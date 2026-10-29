# LeveMente — site institucional

Site institucional da LeveMente (https://www.levemente.med.br/): página única com
apresentação, modalidades de atendimento, profissional, como agendar,
localização, dúvidas frequentes e Política de Privacidade.

**Stack:** Vite + React 19 + TypeScript + Tailwind CSS v4. As páginas são
**pré-renderizadas no build** (HTML estático completo, bom para SEO e carregamento),
e o React assume a página no navegador.

## Comandos

```bash
npm install          # instala as dependências
npm run dev          # ambiente de desenvolvimento (http://localhost:5173)
npm run lint         # ESLint
npm run typecheck    # checagem de tipos (tsc -b)
npm run build        # build de produção + pré-renderização → pasta dist/
npm run preview      # serve a pasta dist/ localmente (http://localhost:4173)
npm run assets       # regenera favicons, recortes da logo e imagem de compartilhamento
```

> O TypeScript está fixado na série 6.0 porque o `typescript-eslint` ainda não
> suporta o TypeScript 7 (com ele, o lint não executa).

## Publicação

O resultado do `npm run build` é a pasta `dist/`, totalmente estática. Ela pode
ser publicada em qualquer hospedagem de arquivos estáticos (Vercel, Netlify,
Cloudflare Pages, S3 etc.):

- `dist/index.html` → página inicial
- `dist/politica-de-privacidade/index.html` → Política de Privacidade
- `robots.txt`, `sitemap.xml`, favicons e `og-image.jpg` na raiz

Na Vercel ou na Netlify, use o comando de build `npm run build` e o diretório de
saída `dist`. Não é necessário alterar DNS nem domínio.

## Onde alterar cada informação

| O que | Onde |
|---|---|
| WhatsApp (número e mensagem padrão) | `src/config/clinic.ts` → `whatsappNumber`, `whatsappDisplay`, `whatsappDefaultMessage` |
| Instagram | `src/config/clinic.ts` → `instagramUrl`, `instagramHandle` |
| Endereço (texto, botão "Como chegar", mapa, FAQ, dados estruturados) | `src/config/clinic.ts` → `address` |
| Nome e CRM da profissional | `src/config/clinic.ts` → `professional` |
| Modalidades de atendimento (ligar/desligar) | `src/config/clinic.ts` → `services` |
| Menu de navegação | `src/config/clinic.ts` → `navigation` |
| Título e descrição para buscadores | `src/config/clinic.ts` → `seoConfig` |
| Textos de todas as seções | `src/content/copy.ts` |
| Fotografias | `src/content/images.ts` (instruções no próprio arquivo) |
| Cores, fontes, raios, sombras e espaçamentos | `src/index.css` → bloco `@theme` |
| Política de Privacidade | `src/pages/PrivacyPolicy.tsx` |
| Sitemap e robots | `public/sitemap.xml`, `public/robots.txt` |

Todos os botões de agendamento usam a função `whatsappLink()`
(`src/lib/links.ts`), que monta `https://wa.me/<número>?text=<mensagem codificada>`.
O link do Google Maps é gerado por `mapsLink()` a partir do endereço da configuração.

### Logo

A logo oficial fica em `public/Logo.svg` (e `public/Logo.png`). Para trocá-la:

1. substitua `public/Logo.svg` mantendo o mesmo nome;
2. rode `npm run assets` para regerar os recortes em `public/brand/`
   (símbolo e logotipo, usados no cabeçalho), os favicons e a `og-image.jpg`.

O script espera um SVG com dois `<path>` (logotipo e símbolo). Se a nova arte
tiver outra estrutura, ajuste as caixas `SYMBOL_BOX` e `WORDMARK_BOX` em
`scripts/generate-assets.mjs`. O desenho da logo nunca é alterado: os recortes
apenas mudam o enquadramento.

### Imagens

A primeira dobra exibe a logo oficial. A seção da profissional usa a foto real
da Dra. Anna Paula: o original fica em `assets-src/anna.jpg` (fora de `public/`,
para não publicar um arquivo de 2,3 MB), e `npm run assets` gera as versões
otimizadas em `public/images/` (WebP com 800 e 1200 px e JPEG de fallback).

Para trocar ou acrescentar fotos, siga as instruções de `src/content/images.ts`.
Uma imagem marcada como `illustrative: true` recebe automaticamente a legenda
"Imagem ilustrativa".

### Dados estruturados (SEO)

Gerados em `src/entry-server.tsx` (`MedicalClinic`), a partir da configuração.
Eles incluem apenas dados confirmados: nome, endereço, telefone, Instagram e
link de contato. Não inclua especialidade médica, avaliações ou coordenadas sem
confirmação.

## Estrutura

```
src/
  config/clinic.ts        dados institucionais (fonte única)
  content/copy.ts         textos
  content/images.ts       registro de fotografias
  lib/links.ts            WhatsApp, Google Maps e endereço
  components/             Header, MobileNavigation, BrandLogo, WhatsAppLink, WhatsAppButton, Icon
  sections/               uma seção da página por arquivo
  pages/                  Home e PrivacyPolicy
  entry-server.tsx        pré-renderização e metadados por página
scripts/
  generate-assets.mjs     favicons, recortes da logo e og-image
  prerender.mjs           gera o HTML estático de cada rota
```

Pendências de conteúdo: veja `PENDENCIAS.md`.
