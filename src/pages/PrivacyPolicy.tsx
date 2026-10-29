import type { ReactNode } from 'react'
import { clinicConfig } from '../config/clinic'
import { external, fullAddress, whatsappLink } from '../lib/links'

// Política coerente com o que o site efetivamente faz: página estática,
// sem formulários, sem cookies próprios e sem ferramentas de análise.
// Atualize este texto se alguma dessas condições mudar.
const LAST_UPDATED = '29 de outubro de 2026'

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-petrol-900/10 py-8">
      <h2 className="text-title">{title}</h2>
      <div className="mt-4 space-y-4 text-ink-soft">{children}</div>
    </section>
  )
}

export function PrivacyPolicy() {
  return (
    <article className="pt-32 pb-[var(--spacing-section)] lg:pt-40">
      <div className="container-page max-w-3xl">
        <p className="eyebrow">Privacidade</p>
        <h1 className="mt-6 text-headline">Política de Privacidade</h1>
        <p className="mt-6 text-lead text-ink-soft">
          Esta política explica, de forma simples, como o site da {clinicConfig.name} trata informações pessoais, em
          conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).
        </p>
        <p className="mt-4 text-sm text-ink-soft">Última atualização: {LAST_UPDATED}.</p>

        <div className="mt-12">
          <Block title="1. Quem somos">
            <p>
              {clinicConfig.name}, com endereço em {fullAddress()}. Profissional: {clinicConfig.professional.name} —{' '}
              {clinicConfig.professional.crm}.
            </p>
          </Block>

          <Block title="2. Quais dados este site coleta">
            <p>
              Este site é uma página informativa. Ele <strong className="text-ink">não possui formulários</strong>, não
              solicita cadastro, <strong className="text-ink">não utiliza cookies próprios</strong> e não utiliza
              ferramentas de análise de audiência ou de publicidade.
            </p>
            <p>
              Como qualquer site na internet, o serviço de hospedagem pode registrar automaticamente dados técnicos de
              acesso (como endereço IP, data, hora e navegador), utilizados para o funcionamento e a segurança do
              serviço.
            </p>
          </Block>

          <Block title="3. Contato pelo WhatsApp">
            <p>
              Os botões de agendamento abrem uma conversa no WhatsApp com uma mensagem inicial sugerida. A partir desse
              momento, a comunicação ocorre no aplicativo WhatsApp, sujeito à política de privacidade da própria
              plataforma. As informações que você enviar na conversa serão utilizadas somente para responder ao seu
              contato e organizar o agendamento.
            </p>
            <p>
              Para solicitar informações ou agendar, não é necessário enviar dados de saúde, como sintomas,
              diagnósticos, exames ou medicamentos. Essas informações são tratadas durante o atendimento.
            </p>
          </Block>

          <Block title="4. Serviços de terceiros">
            <p>
              O site contém links para o WhatsApp, o Instagram e o Google Maps. Ao acessá-los, você passa a interagir
              com esses serviços, que possuem políticas próprias.
            </p>
            <p>
              O mapa da seção “Onde estamos” é fornecido pelo Google e <strong className="text-ink">só é carregado se
              você clicar em “Mostrar mapa”</strong>. Ao carregá-lo, o Google pode coletar dados conforme a sua
              política de privacidade.
            </p>
          </Block>

          <Block title="5. Seus direitos">
            <p>
              Nos termos da LGPD, você pode solicitar confirmação da existência de tratamento, acesso, correção,
              anonimização, eliminação ou portabilidade dos seus dados, além de informações sobre compartilhamento e a
              revogação de consentimento, quando aplicável.
            </p>
          </Block>

          <Block title="6. Como falar conosco">
            <p>
              Para dúvidas sobre esta política ou sobre seus dados, entre em contato pelo{' '}
              <a href={whatsappLink('Olá! Tenho uma dúvida sobre a Política de Privacidade do site da LeveMente.')} {...external} className="text-petrol-700 underline underline-offset-4">
                WhatsApp {clinicConfig.whatsappDisplay}
              </a>
              .
            </p>
          </Block>

          <Block title="7. Alterações">
            <p>
              Esta política pode ser atualizada para refletir mudanças no site. A data da última atualização é sempre
              informada no início desta página.
            </p>
          </Block>
        </div>

        <a href="/" className="btn btn-secondary mt-10">
          Voltar para a página inicial
        </a>
      </div>
    </article>
  )
}
