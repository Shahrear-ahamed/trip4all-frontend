export const getBaseUrl = (): string => {
  return (
    process.env.NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_API_BASE_URL_DEV ||
          "http://localhost:5000/api/v1"
      : (process.env.NEXT_PUBLIC_API_BASE_URL_LIVE as string)
  );
};
