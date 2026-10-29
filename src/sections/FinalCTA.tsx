import { WhatsAppLink } from '../components/WhatsAppLink'
import { copy } from '../content/copy'

export function FinalCTA() {
  const { finalCta } = copy

  return (
    <section
      aria-labelledby="cta-final-title"
      data-hide-floating
      className="on-dark relative overflow-hidden bg-petrol-700 py-[var(--spacing-section)] text-sand-50"
    >
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-1/2 left-1/2 w-[64rem] -translate-x-1/2 text-petrol-800/35">
        <div className="brand-symbol w-full" />
      </div>
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_0%,rgb(250_247_242/0.12),transparent_70%)]" />

      <div className="container-page relative flex flex-col items-center text-center" data-reveal>
        <h2 id="cta-final-title" className="max-w-3xl text-headline text-sand-50">
          {finalCta.title}
        </h2>
        <p className="mt-6 max-w-xl text-lead text-petrol-100">{finalCta.text}</p>
        <WhatsAppLink variant="light" className="mt-10">
          {finalCta.cta}
        </WhatsAppLink>
      </div>
    </section>
  )
}
