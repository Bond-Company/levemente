import { Icon } from '../components/Icon'
import { clinicConfig } from '../config/clinic'
import { copy } from '../content/copy'

export function FAQSection() {
  const { faq } = copy
  const a = clinicConfig.address
  const addressAnswer = `O consultório está localizado no ${a.building}, na ${a.street}, ${a.complement}, ${a.neighborhood}, ${a.city} – ${a.state}.`

  return (
    <section id="duvidas" aria-labelledby="duvidas-title" className="pb-[var(--spacing-section)]">
      <div className="container-page">
        <div className="grid gap-12 border-t hairline pt-10 lg:grid-cols-12 lg:gap-16 lg:pt-14">
          <div className="lg:col-span-4">
            <p className="eyebrow">{faq.eyebrow}</p>
            <h2 id="duvidas-title" className="mt-6 text-headline">
              {faq.title}
            </h2>
          </div>

          {/* <details>/<summary> nativos: acessíveis por teclado e leitores de tela sem JS. */}
          <div className="lg:col-span-8 [&>details:first-child>summary]:pt-0">
            {faq.items.map((item, index) => (
              <details key={item.question} name="faq" className="faq-item group border-b hairline" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-sm py-6 text-left sm:py-7">
                  <span className="font-display text-[clamp(1.15rem,1rem+0.6vw,1.45rem)] leading-snug text-petrol-900 transition-colors duration-200 [@media(hover:hover)]:group-hover:text-petrol-700">
                    {item.question}
                  </span>
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-pill border border-petrol-700/25 text-petrol-700 transition-[transform,background-color,color] duration-200 ease-gentle group-open:rotate-45 group-open:bg-petrol-700 group-open:text-sand-50">
                    <Icon name="plus" size={18} />
                  </span>
                </summary>
                <p className="max-w-2xl pr-14 pb-7 text-ink-soft">
                  {item.answer === 'ADDRESS' ? addressAnswer : item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
