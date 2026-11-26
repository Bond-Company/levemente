import { copy } from '../content/copy'

// As palavras do texto que recebem ênfase tipográfica (itálico petróleo).
const EMPHASIS = 'atenção, respeito e escuta'

// Manifesto: um único parágrafo em escala grande, sem cards nem pilares.
export function AboutSection() {
  const { about } = copy
  const [before, after] = about.text.split(EMPHASIS)

  return (
    <section id="sobre" aria-labelledby="sobre-title" className="pb-[var(--spacing-section)]">
      <div className="container-page">
        <div className="grid gap-8 border-t hairline pt-10 lg:grid-cols-12 lg:gap-12 lg:pt-14">
          <p className="eyebrow self-start lg:col-span-3">{about.eyebrow}</p>

          <div className="lg:col-span-9">
            <h2 id="sobre-title" className="text-headline italic text-petrol-700">
              {about.title}
            </h2>
            <p className="serif mt-8 max-w-[34ch] text-statement font-[330] text-petrol-900 lg:mt-10">
              {after === undefined ? (
                about.text
              ) : (
                <>
                  {before}
                  <em className="text-petrol-700">{EMPHASIS}</em>
                  {after}
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
