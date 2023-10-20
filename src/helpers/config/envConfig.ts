export const getBaseUrl = (): string => {
  return (
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://back-k9k02y7tm-its-shahrear.vercel.app/api/v1"
  );
};
