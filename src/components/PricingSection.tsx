import { FaCheckCircle, FaTicketAlt } from "react-icons/fa";
import { IoMdOpen } from "react-icons/io";

function TicketSection() {
  return (
    <section id="ingresso" className="w-full bg-neutral-950 text-white px-4 lg:px-20 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <span className="text-sm uppercase tracking-[0.3em] text-violet-500">Garanta sua vaga</span>

          <h2 className="text-3xl lg:text-5xl font-bold mt-4 mb-6 leading-tight">Ingresso para o Workshop de Corte Feminino e Visagismo</h2>

          <p className="text-zinc-300 text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">Garanta sua participação em uma experiência completa de aprendizado, prática e atualização profissional com o Luck Coiffeur e o Instituto Nanno.</p>
        </div>

        {/* Card do ingresso */}
        <div className="bg-neutral-900 border border-violet-600/30 rounded-3xl p-6 lg:p-10 shadow-2xl max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 items-start lg:items-center justify-between">
            {/* Informações */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-violet-500 text-neutral-950 p-3 rounded-full shrink-0">
                  <FaTicketAlt size={24} />
                </div>

                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold">Ingresso Individual</h3>
                  <p className="text-white">Acesso completo ao evento presencial</p>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-white mb-2">Investimento</p>

                <div className="flex items-end gap-2">
                  <div className="flex items-baseline">
                    <span className="text-5xl lg:text-6xl font-bold text-violet-500">R$160</span>
                    <span className="text-violet-500 text-lg mb-2">,00</span>
                  </div>
                </div>

                <p className="text-white mt-3">
                  Data: <b>21 de setembro de 2026</b> <br />
                  Horário: <b>09h às 16h</b>
                </p>
              </div>

              <a href="https://www.sympla.com.br/evento/workshop-de-corte-alisamento-progressivo/3547852" target="_blank" rel="noopener noreferrer" className="inline-flex gap-x-2 items-center justify-center w-full lg:w-auto bg-violet-500 hover:bg-violet-600 text-neutral-950 font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:scale-105">
                <span className="text-white">Comprar ingresso agora</span>
                <IoMdOpen size={22} className="shrink-0" color="fff" />
              </a>

              <p className="text-xs text-white mt-4">
                As vagas são limitadas e a inscrição é confirmada após a finalização da compra. <br />
                Inscrições também pelo WhatsApp: (21) 9 9906-1653
              </p>
            </div>

            {/* O que está incluso */}
            <div className="flex-1 bg-neutral-950 border border-zinc-800 rounded-2xl p-6">
              <h4 className="text-xl font-bold mb-6">O que está incluso no ingresso?</h4>

              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-violet-500 mt-1 w-4 h-4 shrink-0" />
                  <p className="text-zinc-300">Coffee Break</p>
                </div>

                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-violet-500 mt-1 w-4 h-4 shrink-0" />
                  <p className="text-zinc-300">Acesso completo ao workshop presencial de corte feminino e visagismo.</p>
                </div>

                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-violet-500 mt-1 w-4 h-4 shrink-0" />
                  <p className="text-zinc-300">Cortes femininos modernos, comerciais e tendências para 2027.</p>
                </div>

                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-violet-500 mt-1 w-4 h-4 shrink-0" />
                  <p className="text-zinc-300">Visagismo aplicado na prática e técnicas de alisamento com produtos, ativos e protocolos corretos.</p>
                </div>

                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-violet-500 mt-1 w-4 h-4 shrink-0" />
                  <p className="text-zinc-300">Cronograma capilar como diferencial no atendimento e estratégias para aumentar a durabilidade dos alisamentos.</p>
                </div>

                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-violet-500 mt-1 w-4 h-4 shrink-0" />
                  <p className="text-zinc-300">Posicionamento, valorização profissional e gerenciamento e fidelização de clientes.</p>
                </div>

                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-violet-500 mt-1 w-4 h-4 shrink-0" />
                  <p className="text-zinc-300">Os primeiros inscritos recebem uma máscara de tratamento Pro Gravidade Nanno de 1Kg.</p>
                </div>

                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-violet-500 mt-1 w-4 h-4 shrink-0" />
                  <p className="text-zinc-300">Networking com Luck Coiffeur, profissionais da beleza e equipe técnica da Nanno Cosmética.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TicketSection;