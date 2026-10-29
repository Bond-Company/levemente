import type { CSSProperties } from 'react'
import { Icon } from '../components/Icon'
import { WhatsAppLink } from '../components/WhatsAppLink'
import { clinicConfig } from '../config/clinic'
import { copy } from '../content/copy'

export function ServicesSection() {
  const { services } = copy
  const items = services.items.filter((item) =>
    item.id === 'presencial' ? clinicConfig.services.inPerson : clinicConfig.services.teleconsultation,
  )

  return (
    <section
      id="atendimento"
      aria-labelledby="atendimento-title"
      className="relative bg-sand-100 py-[var(--spacing-section)]"
    >
      <div className="container-page">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end" data-reveal>
          <div className="lg:col-span-7">
            <p className="eyebrow">{services.eyebrow}</p>
            <h2 id="atendimento-title" className="mt-6 text-headline">
              {services.title}
            </h2>
          </div>
          <p className="max-w-md text-ink-soft lg:col-span-5 lg:justify-self-end">{services.intro}</p>
        </div>

        <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:mt-20 lg:gap-6">
          {items.map((item, index) => (
            <li
              key={item.id}
              data-reveal
              style={{ '--reveal-delay': index * 120 } as CSSProperties}
              className="group relative flex flex-col overflow-hidden rounded-[var(--radius-lg)] border border-petrol-900/8 bg-sand-50 p-7 transition-[box-shadow,transform] duration-500 ease-gentle hover:-translate-y-1 hover:shadow-soft sm:p-10"
            >
              <span
                aria-hidden="true"
                className="absolute -top-16 -right-16 size-48 rounded-full bg-petrol-50 transition-transform duration-700 ease-gentle group-hover:scale-110"
              />
              <span className="relative inline-flex size-14 items-center justify-center rounded-pill border border-petrol-700/20 bg-sand-50 text-petrol-700">
                <Icon name={item.icon} size={26} />
              </span>
              <h3 className="relative mt-8 text-title">{item.title}</h3>
              <p className="relative mt-4 max-w-md text-ink-soft">{item.text}</p>
              {item.id === 'presencial' && (
                <p className="relative mt-4 text-[0.9375rem] text-petrol-800">
                  {clinicConfig.address.building} · {clinicConfig.address.complement}
                </p>
              )}
              <div className="relative mt-auto pt-10">
                <WhatsAppLink message={item.message} variant="secondary" size="sm">
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
