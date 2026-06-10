import { FaMedal, FaSearch, FaUser } from "react-icons/fa";
import Card from "./Card";
import { SiInstructure } from "react-icons/si";
import { CiViewTable } from "react-icons/ci";
import { PiPaintBrushHouseholdBold } from "react-icons/pi";
import { FaBottleWater } from "react-icons/fa6";

function CardSection() {
  return (
    <section className="w-full bg-neutral-900 flex flex-col items-center justify-center p-16 px-4" id="workshop">
      <p className="text-4xl mb-16 text-white text-center">
        Em 9 horas de treinamento completo, você vai aprender:
      </p>

      <div
        className="
          w-full
          max-w-7xl
          bg-neutral-900
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-4
          justify-items-stretch
        "
      >
        <Card
          name={"QUÍMICA COSMÉTICA"}
          text={
            "Palestra com o Diretor Nanno, Márcio Brito, sobre a área da química que estuda os ativos, formulações e reações envolvidas na criação das químicas de alisamento e soltura de cachos."
          }
          icon={<FaMedal size={32} />}
        />

        <Card
          name={"Diagnóstico e análise capilar"}
          text={
            "Avaliação inicial do cabelo para identificar resistência, elasticidade, porosidade, histórico químico e condições gerais dos fios, garantindo mais segurança antes de qualquer processo de soltura ou iluminação."
          }
          icon={<FaSearch size={32} />}
        />

        <Card
          name={"Estrutura do fio e compatibilidade química"}
          text={
            "Estudo da composição e comportamento da fibra capilar para entender como o cabelo reage aos procedimentos químicos, evitando incompatibilidades, quebra, ressecamento ou danos durante o serviço."
          }
          icon={<SiInstructure size={32} />}
        />

        <Card
          name={"Tabela de cachos e particularidades do cabelo crespo"}
          text={
            "Análise dos diferentes tipos de curvatura, desde ondulados até crespos, considerando suas necessidades específicas, fragilidade, encolhimento, densidade e resposta aos processos de transformação."
          }
          icon={<CiViewTable size={32} />}
        />

        <Card
          name={"Técnicas de divisão e aplicação"}
          text={
            "Organização correta das mechas e aplicação estratégica dos produtos para garantir uniformidade, controle do resultado, segurança no procedimento e melhor acabamento visual nos cachos."
          }
          icon={<PiPaintBrushHouseholdBold size={32} />}
        />

        <Card
          name={"OX, volumes e coloração em cabelos relaxados"}
          text={
            "Orientação sobre a escolha correta da água oxigenada e da coloração em cabelos com química, respeitando o limite da fibra capilar para alcançar clareamento com menor risco de danos."
          }
          icon={<FaBottleWater size={32} />}
        />

        <Card
          name={"Técnicas de soltura com efeito morena iluminada"}
          text={
            "Aplicação de métodos que promovem a abertura controlada dos cachos junto ao efeito de mechas iluminadas, criando um resultado natural, sofisticado e seguro para cabelos cacheados e crespos."
          }
          icon={<FaUser size={32} />}
        />
      </div>
    </section>
  );
}

export default CardSection;