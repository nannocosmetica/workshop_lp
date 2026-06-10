import { IoMdOpen } from "react-icons/io";

const SubscriptionSection = () => {
  return (
    <section className="w-full bg-linear-to-r from-orange-400 via-pink-500 to-purple-600 h-96 flex flex-col gap-y-8 items-center justify-center px-4" id="cadastro">
      <p className="text-3xl text-white text-center">
        Garanta sua vaga agora, domine as técnicas de <br />
        Soltura de Cachos e <b>impulsione seu salão!</b>
      </p>
      <p className="text-3xl text-white text-center font-bold">
        VAGAS LIMITADAS!
      </p>
      <a href="https://www.sympla.com.br/evento/imersao-em-soltura-de-cachos-com-mechas-morena-iluminada/3395799"
        className="text-center bg-neutral-800 text-white rounded-md py-4 px-8 font-bold hover:scale-105 transition-transform flex items-center gap-x-4"
      >
        <span>
          QUERO DOMINAR A TÉCNICA DE SOLTURA DE CACHOS!
        </span>
        <span><IoMdOpen size={22} /></span>
      </a>
    </section>
  );
};

export default SubscriptionSection;
