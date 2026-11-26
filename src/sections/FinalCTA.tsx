import { WhatsAppLink } from '../components/WhatsAppLink'
import { copy } from '../content/copy'

// Fechamento escuro, contínuo com o rodapé. É a única aparição do símbolo
// da marca em escala grande, parado.
export function FinalCTA() {
  const { finalCta } = copy

  return (
    <section
      aria-labelledby="cta-final-title"
      data-hide-floating
      className="on-dark relative overflow-hidden bg-petrol-950 pt-[var(--spacing-section)] pb-24 text-sand-50 lg:pb-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -right-[12%] w-[min(46rem,90vw)] -translate-y-1/2 text-petrol-800/40 lg:right-[-4%]"
      >
        <div className="brand-symbol w-full" />
      </div>

      <div className="container-page relative">
        <h2 id="cta-final-title" className="max-w-[14ch] text-display text-sand-50">
          {finalCta.title}
        </h2>
        <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-10">
          <WhatsAppLink variant="light">{finalCta.cta}</WhatsAppLink>
          <p className="max-w-sm text-petrol-100/85">{finalCta.text}</p>
        </div>
      </div>
    </section>
  )
}
