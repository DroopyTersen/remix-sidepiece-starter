import z from "zod";
import { PublicEnvVars, PublicEnvVarSchema } from "./useEnvVar";

export const getEnvVar = (key: keyof EnvVars, fallback = "") => {
  if (!key) return "";
  let envVars = EnvVarSchema.parse(process.env);

  return envVars[key] || fallback;
};

export const PrivateEnvVarSchema = z.object({
  SESSION_SECRET: z.string().optional(),
});
export const EnvVarSchema = PrivateEnvVarSchema.extend(
  PublicEnvVarSchema.shape
);

export type EnvVars = z.infer<typeof EnvVarSchema>;

export const getPublicEnvVars = (): PublicEnvVars => {
  let envVars = EnvVarSchema.parse(process.env);

  const publicEnv = Object.entries(envVars).reduce((acc, [key, value]) => {
    if (key.startsWith("PUBLIC_")) {
      acc[key] = value;
    }
    return acc;
  }, {});
  return publicEnv;
};
