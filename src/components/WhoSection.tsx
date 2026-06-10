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
          alt="Foto da palestrante"
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
        <a href="https://www.instagram.com/atitudblack/" className="inline-flex text-white text-2xl">@atitudblack</a>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-1 flex-col justify-center items-center lg:items-start text-center lg:text-left lg:pl-12 lg:mt-0 mt-12">
        <div className="lg:max-w-4/5">
          <h1 className="text-2xl lg:text-4xl leading-tight mb-6 text-white">
            Quem vai te ensinar
          </h1>

          <p className="text-base lg:text-lg text-zinc-300 leading-relaxed mb-8 text-justify">
            <b>Bárbara Souza</b> é especialista em cabelos crespos e cacheados,
            mentora e fundadora do{" "}
            <a
              href="https://www.instagram.com/atitudblack/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex whitespace-nowrap items-center gap-x-1 text-cyan-500"
            >
              Atitudblack <IoMdOpen className="shrink-0" />
            </a>
            , salão referência no cuidado, valorização e transformação de
            cabelos naturais. Com mais de 15 anos de experiência na área da
            beleza capilar, atua ajudando mulheres a conquistarem mais
            autoestima, segurança e liberdade através de técnicas profissionais
            voltadas para cachos e crespos.
          </p>

          <p className="text-base lg:text-lg text-zinc-300 leading-relaxed mb-8 text-justify">
            Na <b>Imersão Soltura de Cachos</b>, Bárbara compartilhará sua
            vivência prática, conhecimento técnico e olhar especializado para
            quem deseja dominar procedimentos com mais segurança, resultado e
            respeito à estrutura dos fios.
          </p>

          <a
            href="https://www.sympla.com.br/evento/imersao-em-soltura-de-cachos-com-mechas-morena-iluminada/3395799"
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex
              items-center
              justify-center
              rounded-md
              px-8
              py-4
              font-semibold
              text-white
              transition
              hover:scale-105
              bg-linear-to-r
              from-orange-400
              via-pink-500
              to-purple-600
              w-full
            "
          >
            QUERO DOMINAR A SOLTURA DE CACHOS
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhoSection;