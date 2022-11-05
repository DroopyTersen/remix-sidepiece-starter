import dayjs from "dayjs";
import "isomorphic-fetch";
import type {
  AuthRedirectParams,
  OAuthConfig,
  OAuthTokenData,
  RefreshTokenData,
  TokenParams,
} from "./oauth.types";
import { calcTokenExpiration } from "./oauth.utils";

const AUTH_REDIRECT_DEFAULTS: Partial<AuthRedirectParams> = {
  response_type: "code",
  access_type: "offline",
  prompt: "consent",
  include_granted_scopes: "true",
};

export class OAuthProvider {
  config: OAuthConfig;

  constructor(config) {
    this.config = config;
  }
  get defaultTokenParams(): Partial<TokenParams> {
    return {
      client_id: this.config.client_id,
      client_secret: this.config.client_secret,
    };
  }
  getAuthRedirectUrl = (overrides?: Partial<AuthRedirectParams>) => {
    let mergedParams: AuthRedirectParams = {
      ...AUTH_REDIRECT_DEFAULTS,
      client_id: this.config.client_id,
      redirect_uri: this.config.redirect_uri,
      scope: this.config.scope,
      ...overrides,
    };
    return (
      this.config.auth_uri + "?" + new URLSearchParams(mergedParams as any)
    );
  };

  private _fetchToken = (overrides: Partial<TokenParams>) => {
    return fetch(this.config.token_uri, {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        ...this.defaultTokenParams,
        ...overrides,
      }).toString(),
    }).then(async (resp) => {
      if (!resp.ok) {
        let errorText = await resp.text();
        let error = new Error("Unable to get access token: " + errorText);
        // See if the error came back as JSON
        try {
          let errorData = JSON.parse(errorText);
          error = {
            message: "Invalid credential (unable to get access token)",
            status: resp.status,
            ...errorData,
          };
        } catch (err) {}
        throw error;
      }
      return resp.json();
    });
  };

  getToken = async (
    code: string,
    overrides?: Partial<TokenParams>
  ): Promise<OAuthTokenData> => {
    let tokenData = await this._fetchToken({
      grant_type: "authorization_code",
      code,
      redirect_uri: this.config.redirect_uri,
      ...overrides,
    });
    tokenData.expires = calcTokenExpiration(tokenData);

    return tokenData;
  };

  ensureToken = async (
    tokenData: OAuthTokenData,
    onRefresh: (newTokenData: OAuthTokenData) => void
  ) => {
    if (!tokenData) return;
    let accessToken = tokenData?.access_token;
    let isInvalid =
      !accessToken ||
      !tokenData?.expires ||
      dayjs(tokenData?.expires).isBefore(new Date());

    if (isInvalid && tokenData?.refresh_token) {
      // console.log("🚀 | newData", tokenData.refresh_token);
      let refreshData = await this.refreshToken(tokenData.refresh_token);
      let newData = {
        ...tokenData,
        ...refreshData,
        expires: calcTokenExpiration(refreshData),
      };
      accessToken = refreshData.access_token;
      // Wait to save the credential back to the DB
      await onRefresh(newData);
    }
    return accessToken;
  };

  refreshToken = (
    refreshToken: string,
    overrides?: Partial<TokenParams>
  ): Promise<RefreshTokenData> => {
    return this._fetchToken({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
      ...overrides,
    });
  };
}
