export const checkIsServer = () => {
  return typeof window === "undefined";
};

export const checkIsBrowser = () => !checkIsServer();
