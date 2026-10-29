// Páginas pré-renderizadas no build (ver scripts/prerender.mjs).
export const routes = ['/', '/politica-de-privacidade/'] as const
export type Route = (typeof routes)[number]

export function normalizePath(path: string): Route {
  const clean = path.replace(/\/index\.html$/, '/').replace(/\/?$/, '/')
  return clean === '/politica-de-privacidade/' ? clean : '/'
}
