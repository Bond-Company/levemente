import { useCallback, useEffect, useRef, useState } from 'react'
import { navigation } from '../config/clinic'
import { BrandLogo } from './BrandLogo'
import { Icon } from './Icon'
import { MobileNavigation } from './MobileNavigation'
import { WhatsAppLink } from './WhatsAppLink'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = useCallback((restoreFocus = false) => {
    setMenuOpen(false)
    if (restoreFocus) toggleRef.current?.focus()
  }, [])

  // Com o menu aberto o fundo é sólido e sem backdrop-filter: o filtro criaria
  // um novo bloco de contenção e o painel `fixed` ficaria preso ao cabeçalho.
  const surface = menuOpen
    ? 'border-petrol-900/8 bg-sand-50'
    : scrolled
      ? 'border-petrol-900/8 bg-sand-50/80 backdrop-blur-md backdrop-saturate-150'
      : 'border-transparent'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-200 ${surface}`}
    >
      <div className="container-page flex h-[4.5rem] items-center justify-between gap-6 lg:h-20">
        <a href="/#inicio" className="flex h-10 items-center rounded-sm lg:h-11" aria-label="LeveMente — página inicial">
          <BrandLogo className="h-full" />
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-pill px-3.5 py-2 text-[0.875rem] font-medium text-ink-soft transition-colors duration-200 hover:text-petrol-900"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <WhatsAppLink size="sm" className="hidden sm:inline-flex">
            Agendar consulta
          </WhatsAppLink>
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-pill text-petrol-900 transition-colors active:scale-[0.97] lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={24} />
          </button>
        </div>
      </div>

      <MobileNavigation open={menuOpen} onClose={closeMenu} />
    </header>
  )
}
