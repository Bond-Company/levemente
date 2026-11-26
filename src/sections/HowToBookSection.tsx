import { WhatsAppLink } from '../components/WhatsAppLink'
import { copy } from '../content/copy'

// Três passos numa linha do tempo fina; o aviso vira nota de rodapé.
export function HowToBookSection() {
  const { howToBook } = copy

  return (
    <section aria-labelledby="agendar-title" className="py-[var(--spacing-section)]">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="eyebrow">{howToBook.eyebrow}</p>
          <h2 id="agendar-title" className="mt-6 text-headline">
            {howToBook.title}
          </h2>
        </div>

        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-0 lg:mt-20">
          {howToBook.steps.map((step, index) => (
            <li key={step.title} className="relative border-t hairline pt-8 md:pr-10">
              <span aria-hidden="true" className="absolute -top-[5px] left-0 size-[9px] rounded-full bg-petrol-700" />
              <span aria-hidden="true" className="text-xs font-semibold tracking-[0.18em] text-clay-600 uppercase tabular-nums">
                Etapa {index + 1}
              </span>
              <h3 className="serif mt-4 text-[1.5rem] leading-tight tracking-[-0.015em]">
                <span className="sr-only">Etapa {index + 1}: </span>
                {step.title}
              </h3>
              <p className="mt-3 max-w-xs text-ink-soft">{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-16 flex flex-col gap-8 lg:mt-20 lg:flex-row lg:items-center lg:justify-between">
          <WhatsAppLink className="shrink-0 self-start">{howToBook.cta}</WhatsAppLink>
          <p className="max-w-md text-sm text-ink-soft lg:text-right">{howToBook.note}</p>
        </div>
      </div>
    </section>
  )
}
