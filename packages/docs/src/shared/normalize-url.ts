export function normalizeLocalUrl(url: string): string {
  const baseUrl = import.meta.env.BASE_URL

  if (baseUrl === '/') {
    return url
  }

  if (url.startsWith('/')) {
    return `${baseUrl}${url}`
  }

  return `${baseUrl}/${url}`
}
