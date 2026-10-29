import { BrandLogo } from '../components/BrandLogo'
import { Icon } from '../components/Icon'
import { clinicConfig, navigation } from '../config/clinic'
import { copy } from '../content/copy'
import { external, mapsLink, whatsappLink } from '../lib/links'

export function Footer() {
  const { address, professional } = clinicConfig

  return (
    <footer data-hide-floating className="on-dark bg-petrol-950 pt-20 pb-10 text-petrol-100">
      <div className="container-page">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <a href="/#inicio" className="inline-block rounded-sm" aria-label="LeveMente — voltar ao início">
              <BrandLogo variant="stacked" tone="light" className="h-24 w-auto" />
            </a>
            <p className="mt-6 max-w-xs text-[0.9375rem] leading-relaxed text-petrol-100/80">{copy.footer.description}</p>
          </div>

          <nav aria-label="Rodapé" className="lg:col-span-2">
            <h2 className="font-sans text-xs font-semibold tracking-[0.18em] text-sand-50 uppercase">Navegação</h2>
            <ul className="mt-5 space-y-1">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="link-underline inline-block py-1.5 text-[0.9375rem]">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="font-sans text-xs font-semibold tracking-[0.18em] text-sand-50 uppercase">Endereço</h2>
            <address className="mt-5 text-[0.9375rem] leading-relaxed not-italic">
              {address.building}
              <br />
              {address.street}
              <br />
              {address.complement}
              <br />
              {address.neighborhood}, {address.city} – {address.state}
              <br />
              CEP {address.postalCode}
            </address>
            <a href={mapsLink()} {...external} className="link-underline mt-3 inline-flex items-center gap-1.5 py-1 text-[0.9375rem] text-sand-50">
              Como chegar <Icon name="arrowUpRight" size={16} />
              <span className="sr-only"> (abre o Google Maps em nova aba)</span>
            </a>
          </div>

          <div className="lg:col-span-3">
            <h2 className="font-sans text-xs font-semibold tracking-[0.18em] text-sand-50 uppercase">Contato</h2>
            <ul className="mt-5 space-y-3 text-[0.9375rem]">
              <li>
                <a href={whatsappLink()} {...external} className="inline-flex items-center gap-2.5 py-1 hover:text-sand-50">
                  <Icon name="whatsapp" size={18} />
                  <span className="link-underline">WhatsApp {clinicConfig.whatsappDisplay}</span>
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
              </li>
              <li>
                <a href={clinicConfig.instagramUrl} {...external} className="inline-flex items-center gap-2.5 py-1 hover:text-sand-50">
                  <Icon name="instagram" size={18} />
                  <span className="link-underline">{clinicConfig.instagramHandle}</span>
                  <span className="sr-only"> (Instagram, abre em nova aba)</span>
                </a>
              </li>
            </ul>
            <p className="mt-8 text-[0.9375rem] leading-relaxed">
              <span className="block text-xs font-semibold tracking-[0.18em] text-sand-50 uppercase">Profissional</span>
              <span className="mt-2 block">{professional.name}</span>
              <span className="block text-petrol-100/80">{professional.crm}</span>
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-petrol-100/12 pt-8 pb-20 text-sm text-petrol-100/75 sm:flex-row sm:items-center sm:justify-between sm:pb-0">
          <p>
            © <span suppressHydrationWarning>{new Date().getFullYear()}</span> {clinicConfig.name}. Todos os direitos reservados.
          </p>
          <a href="/politica-de-privacidade/" className="link-underline self-start py-1 sm:self-auto">
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  )
}
