export function normalizeLocalUrl(url: string): string {
  // TODO: switch to env var
  const baseUrl = import.meta.env.BASE_URL;

  if (url.startsWith("/")) {
    return `${baseUrl}${url}`;
  }

  return `${baseUrl}/${url}`;
}
