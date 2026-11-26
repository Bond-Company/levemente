// Registro de imagens fotográficas do site.
//
// A primeira dobra usa a foto real; a seção da profissional usa um recorte de detalhe dela.
// Para incluir ou trocar uma foto:
//   1. coloque o original em assets-src/ e registre-o na lista `photos` de
//      scripts/generate-assets.mjs; rode `npm run assets` (gera .webp e .jpg em public/images/);
//   2. preencha a entrada abaixo com src, srcSet, alt, width e height reais;
//   3. marque `illustrative: true` se NÃO for uma foto real da LeveMente —
//      o site exibirá a legenda "Imagem ilustrativa" automaticamente.

export type ImageEntry = {
  /** Imagem de fallback (JPEG). */
  src: string
  /** Versões WebP em larguras diferentes, no formato do atributo srcset. */
  webpSrcSet?: string
  alt: string
  /** Enquadramento no recorte (CSS object-position). */
  position?: string
  width: number
  height: number
  illustrative: boolean
}

export const images: {
  professional: ImageEntry | null
  /** Recorte de detalhe da mesma foto (mãos e caderno), gerado por npm run assets. */
  detail: ImageEntry | null
} = {
  professional: {
    src: '/images/anna-paula-1200.jpg',
    webpSrcSet: '/images/anna-paula-800.webp 800w, /images/anna-paula-1200.webp 1200w',
    alt: 'Dra. Anna Paula Mendes A. Lima, sorrindo, durante um atendimento em consultório',
    width: 1200,
    height: 1607,
    position: '62% 30%',
    illustrative: false,
  },
  detail: {
    src: '/images/anna-paula-detalhe-900.jpg',
    webpSrcSet: '/images/anna-paula-detalhe-600.webp 600w, /images/anna-paula-detalhe-900.webp 900w',
    alt: 'Detalhe das mãos da Dra. Anna Paula fazendo anotações durante uma consulta',
    width: 900,
    height: 1125,
    position: '50% 50%',
    illustrative: false,
  },
}
