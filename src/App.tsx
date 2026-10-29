import { Header } from './components/Header'
import { WhatsAppButton } from './components/WhatsAppButton'
import { normalizePath } from './lib/routes'
import { useReveal } from './lib/useReveal'
import { Home } from './pages/Home'
import { PrivacyPolicy } from './pages/PrivacyPolicy'
import { Footer } from './sections/Footer'

export default function App({ path }: { path: string }) {
  useReveal()
  const route = normalizePath(path)

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only z-[60] rounded-pill bg-petrol-900 px-5 py-3 text-sand-50 focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo" tabIndex={-1} className="outline-none">
        {route === '/politica-de-privacidade/' ? <PrivacyPolicy /> : <Home />}
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
