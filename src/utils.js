export const getImageUrl = (path) => {
  const baseUrl = process.env.PUBLIC_URL || '';
  return `${baseUrl}/assets/${path}`;
};
