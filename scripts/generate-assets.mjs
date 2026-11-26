// Gera, a partir da logo oficial (public/Logo.svg), os recortes usados no site,
// os favicons e a imagem de compartilhamento (Open Graph).
// Os paths da logo são copiados sem nenhuma alteração; apenas o viewBox muda.
//
// Uso: npm run assets
import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const root = path.resolve(import.meta.dirname, '..')
const pub = (...p) => path.join(root, 'public', ...p)

const BRAND = '#1A6372'
const SAND = '#FAF7F2'

const logo = await fs.readFile(pub('Logo.svg'), 'utf8')
const paths = [...logo.matchAll(/<path d="([^"]+)"/g)].map((m) => m[1])
if (paths.length !== 2) throw new Error(`Esperava 2 paths em Logo.svg, encontrei ${paths.length}`)
const [wordmarkPath, symbolPath] = paths

// Caixas medidas a partir da arte original (x, y, largura, altura), com 4px de respiro.
const SYMBOL_BOX = [423, -4, 1088, 1177]
const WORDMARK_BOX = [21, 1252, 1901, 274]

const svg = (box, d, fill = BRAND) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${box.join(' ')}" width="${box[2]}" height="${box[3]}"><path d="${d}" fill="${fill}"/></svg>\n`

await fs.mkdir(pub('brand'), { recursive: true })
await fs.writeFile(pub('brand', 'logo-symbol.svg'), svg(SYMBOL_BOX, symbolPath))
await fs.writeFile(pub('brand', 'logo-wordmark.svg'), svg(WORDMARK_BOX, wordmarkPath))
await fs.writeFile(pub('brand', 'logo-wordmark-light.svg'), svg(WORDMARK_BOX, wordmarkPath, SAND))
await fs.writeFile(pub('brand', 'logo-light.svg'), logo.replaceAll(`fill="${BRAND}"`, `fill="${SAND}"`))
await fs.writeFile(pub('favicon.svg'), svg(SYMBOL_BOX, symbolPath))

// Ícones quadrados: símbolo centralizado com margem, fundo areia nos ícones de app.
async function squareIcon(size, file, { background, padding }) {
  const inner = Math.round(size * (1 - padding * 2))
  const symbol = await sharp(Buffer.from(svg(SYMBOL_BOX, symbolPath)), { density: 300 })
    .resize(inner, inner, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer()
  await sharp({ create: { width: size, height: size, channels: 4, background } })
    .composite([{ input: symbol, gravity: 'center' }])
    .png({ compressionLevel: 9 })
    .toFile(pub(file))
}

const transparent = { r: 0, g: 0, b: 0, alpha: 0 }
const sand = { r: 250, g: 247, b: 242, alpha: 1 }
await squareIcon(32, 'favicon-32.png', { background: transparent, padding: 0.02 })
await squareIcon(180, 'apple-touch-icon.png', { background: sand, padding: 0.14 })
await squareIcon(192, 'icon-192.png', { background: sand, padding: 0.14 })
await squareIcon(512, 'icon-512.png', { background: sand, padding: 0.14 })

// Open Graph 1200×630: fundo areia, logo oficial completa centralizada, filete discreto.
const ogLogo = await sharp(Buffer.from(logo), { density: 150 })
  .resize({ height: 380 })
  .png()
  .toBuffer()
const ogFrame = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
    <rect width="1200" height="630" fill="${SAND}"/>
    <circle cx="1080" cy="80" r="260" fill="#DCEBEC" opacity=".55"/>
    <circle cx="90" cy="590" r="200" fill="#E6DCCD" opacity=".6"/>
    <rect x="40" y="40" width="1120" height="550" rx="28" fill="none" stroke="#C9A98A" stroke-opacity=".5"/>
  </svg>`,
)
await sharp(ogFrame)
  .composite([{ input: ogLogo, gravity: 'center' }])
  .jpeg({ quality: 86, mozjpeg: true })
  .toFile(pub('og-image.jpg'))

console.log('Assets gerados em public/ (brand/, favicons, og-image.jpg)')

// Fotografias: originais em assets-src/ (fora de public/, para não publicar
// arquivos de vários MB); versões otimizadas em public/images/.
const photos = [{ source: 'anna.jpg', name: 'anna-paula', widths: [800, 1200] }]
for (const photo of photos) {
  const input = path.join(root, 'assets-src', photo.source)
  try {
    await fs.access(input)
  } catch {
    continue
  }
  await fs.mkdir(pub('images'), { recursive: true })
  for (const width of photo.widths) {
    await sharp(input).rotate().resize({ width }).webp({ quality: 78 }).toFile(pub('images', `${photo.name}-${width}.webp`))
  }
  await sharp(input).rotate().resize({ width: 1200 }).jpeg({ quality: 80, mozjpeg: true }).toFile(pub('images', `${photo.name}-1200.jpg`))
}

// Recorte de detalhe (mãos e caderno) da foto da profissional, usado na seção
// "A profissional". A caixa está em pixels do original assets-src/anna.jpg (1792×2400).
const detailInput = path.join(root, 'assets-src', 'anna.jpg')
try {
  await fs.access(detailInput)
  const box = { left: 720, top: 1010, width: 720, height: 900 }
  for (const width of [600, 900]) {
    await sharp(detailInput).rotate().extract(box).resize({ width }).webp({ quality: 80 }).toFile(pub('images', `anna-paula-detalhe-${width}.webp`))
  }
  await sharp(detailInput).rotate().extract(box).resize({ width: 900 }).jpeg({ quality: 80, mozjpeg: true }).toFile(pub('images', 'anna-paula-detalhe-900.jpg'))
} catch {
  // sem original, mantém os arquivos já gerados
}
