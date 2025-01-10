export const port = process.env.PORT || 3000;
export const host = process.env.NEXT_PUBLIC_PRODUCTION_URL ? `https://${process.env.NEXT_PUBLIC_PRODUCTION_URL}` : `http://localhost:${port}`;
