function HeroSection() {
  return (
    <section className="relative z-10 flex flex-col lg:flex-row min-h-screen px-4 lg:px-12 pt-20">
      {/* Conteúdo */}
      <div className="flex flex-1 flex-col justify-center items-center lg:items-start text-center lg:text-left lg:pl-12">
        <img src="./logo.png" alt="Logo" className="w-48 lg:w-60 mb-8" />

        <h1 className="text-4xl lg:text-6xl leading-tight mb-6">
          Domine a <span className="font-bold">Soltura de Cachos</span>
        </h1>

        <p className="text-base lg:text-lg text-zinc-300 leading-relaxed mb-8">
          Você sabe diagnosticar o cabelo da sua cliente antes de qualquer processo químico?<br /><br />Sabe como garantir compatibilidade química, escolher o OX correto e trabalhar com segurança em cachos e crespos?<br /><br />Não perca essa oportunidade única de aprender como fazer uma Soltura de Cachos com Morena Iluminada de Maneira profissional e segura!
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
          "
        >
          ME INSCREVER
        </a>
      </div>

      {/* Imagem */}
      <div className="flex flex-1 items-end justify-center mt-10 lg:mt-0">
        <img
          src="./barbara3.png"
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
        />
      </div>
    </section>
  );
}

export default HeroSection;
