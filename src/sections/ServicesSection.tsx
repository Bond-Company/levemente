import { WhatsAppLink } from '../components/WhatsAppLink'
import { clinicConfig } from '../config/clinic'
import { copy } from '../content/copy'

// Modalidades como linhas editoriais separadas por fios, em vez de cards.
export function ServicesSection() {
  const { services } = copy
  const items = services.items.filter((item) =>
    item.id === 'presencial' ? clinicConfig.services.inPerson : clinicConfig.services.teleconsultation,
  )

  return (
    <section id="atendimento" aria-labelledby="atendimento-title" className="pb-[var(--spacing-section)]">
      <div className="container-page">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow">{services.eyebrow}</p>
            <h2 id="atendimento-title" className="mt-6 text-headline">
              {services.title}
            </h2>
          </div>
          <p className="max-w-md text-ink-soft lg:col-span-4 lg:col-start-9">{services.intro}</p>
        </div>

        <ul className="mt-14 border-t hairline lg:mt-20">
          {items.map((item) => (
            <li key={item.id} className="grid gap-4 border-b hairline py-9 md:grid-cols-12 md:items-baseline md:gap-8 lg:py-12">
              <h3 className="text-title md:col-span-5">{item.title}</h3>
              <div className="md:col-span-4">
                <p className="text-ink-soft">{item.text}</p>
                {item.id === 'presencial' && (
                  <p className="mt-3 text-[0.9375rem] text-petrol-800">
                    {clinicConfig.address.building} · {clinicConfig.address.complement}
                  </p>
                )}
              </div>
              <div className="md:col-span-3 md:justify-self-end">
                <WhatsAppLink message={item.message} variant="quiet" size="sm">
                  {item.cta}
                  <span className="sr-only"> sobre {item.title.toLowerCase()}</span>
                </WhatsAppLink>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
