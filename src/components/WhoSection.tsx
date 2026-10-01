import { IoMdOpen } from "react-icons/io";

const WhoSection = () => {
  return (
    <section
      className="
        relative
        z-10
        flex
        flex-col
        lg:flex-row
        min-h-screen
        px-4
        lg:px-12
        overflow-hidden
        pb-8
      "
    >
      {/* Background com flip horizontal */}
      <div
        className="
          absolute
          inset-0
          bg-[url('/bg.jpg')]
          bg-cover
          bg-center
          scale-x-[-1]
          -z-20
        "
      />

      {/* Camada escura por cima do background */}
      <div className="absolute inset-0 bg-black/70 -z-10" />

      {/* Imagem */}
      <div className="relative z-10 flex flex-1 items-center justify-center mt-10 lg:mt-0 flex-col">
        <img
          src="./who.png"
          alt="Foto do palestrante Vitor Paim"
          className="
            w-full
            max-w-xs
            sm:max-w-sm
            lg:max-w-none
            lg:h-[85vh]
            object-contain
            object-bottom
          "
          id="palestrante"
        />
        <a href="https://www.instagram.com/vitorpaimstudio/" target="_blank" rel="noreferrer" className="inline-flex text-white text-2xl">
          @vitorpaimstudio
        </a>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-1 flex-col justify-center items-center lg:items-start text-center lg:text-left lg:pl-12 lg:mt-0 mt-12">
        <div className="lg:max-w-4/5">
          <h1 className="text-2xl lg:text-4xl leading-tight mb-6 text-white">Quem vai te ensinar</h1>

          <p className="text-base lg:text-lg text-zinc-300 leading-relaxed mb-8 text-justify">
            <b>Vitor Paim</b> é cabeleireiro, educador e especialista em coloração, descoloração e iluminação, dedicado à arte da cor e à formação de profissionais da beleza. À frente do{" "}
            <a href="https://www.instagram.com/vitorpaimstudio/" target="_blank" rel="noreferrer" className="inline-flex whitespace-nowrap items-center gap-x-1 text-cyan-500">
              Vitor Paim Studio <IoMdOpen className="shrink-0" />
            </a>
            , une conhecimento técnico, olhar artístico e domínio real dos produtos para criar loiros, morenas iluminadas e tonalizações com identidade própria.
          </p>

          <p className="text-base lg:text-lg text-zinc-300 leading-relaxed mb-8 text-justify">
            No <b>Workshop de Tons &amp; Cores – Coloração e Descoloração</b>, em parceria com a Nanno Cosmética, Vitor compartilhará sua experiência abordando desde os fundamentos das mechas criativas e as diferenças práticas entre o pó descolorante azul tradicional e o pó descolorante branco até a técnica de mão livre, a construção de loiros mais claros e morenas iluminadas e a tonalização criativa com a cartela de cores Nanno, permitindo que os participantes dominem cada etapa da iluminação com segurança, liberdade na aplicação e resultados personalizados que encantam seus clientes.
          </p>

          <a
            href="#ingresso"
            // target="_blank"
            // rel="noreferrer"
            className="
              inline-flex
              items-center
              justify-center
              rounded-md
              px-8
              py-4
              font-semibold
              text-black
              transition
              hover:scale-105
              bg-linear-to-r
              from-[#8C5C1C] via-[#F7C46E] to-[#AF7727]
              w-full
            "
          >
            QUERO ME INSCREVER!
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhoSection;