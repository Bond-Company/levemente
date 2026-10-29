// Pré-renderiza cada rota em HTML estático após o build do cliente.
// Resultado: dist/index.html e dist/politica-de-privacidade/index.html completos,
// legíveis por buscadores e exibidos antes mesmo do JavaScript carregar.
import fs from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const root = path.resolve(import.meta.dirname, '..')
const dist = path.join(root, 'dist')
const ssrDir = path.join(root, 'dist-ssr')

const { render, routes } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href)
const template = await fs.readFile(path.join(dist, 'index.html'), 'utf8')

for (const route of routes) {
  const { html, head } = render(route)
  const page = template
    .replace(/<title>[^<]*<\/title>\s*<!--app-head-->/, head)
    .replace('<!--app-html-->', html)

  if (page.includes('<!--app-head-->') || page.includes('<!--app-html-->')) {
    throw new Error(`Marcadores não substituídos em ${route}`)
  }

  const outDir = path.join(dist, route)
  await fs.mkdir(outDir, { recursive: true })
  await fs.writeFile(path.join(outDir, 'index.html'), page)
  console.log(`pré-renderizado: ${route}`)
}

await fs.rm(ssrDir, { recursive: true, force: true })
