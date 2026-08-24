import { FaStar } from "react-icons/fa";
import Card from "./Card";

function CardSection() {
  return (
    <section className="w-full bg-neutral-900 flex flex-col items-center justify-center p-16 px-4" id="workshop">
      <p className="text-4xl mb-16 text-white text-center">Em 7 horas de treinamento completo, você vai aprender:</p>

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
        <Card name={"Cortes Femininos Modernos e Comerciais"} text={"Aprenda técnicas de cortes atuais e comerciais que valorizam diferentes formatos de rosto, tipos de cabelo e estilos, aumentando a versatilidade do seu atendimento."} icon={<FaStar size={32} />} />

        <Card name={"Tendências de Corte para 2027"} text={"Conheça as principais tendências de cortes para 2027 e descubra como adaptar estilos modernos às características e preferências de cada cliente."} icon={<FaStar size={32} />} />

        <Card name={"Visagismo Aplicado na Prática"} text={"Aprenda a aplicar os princípios do visagismo para criar cortes que valorizem o formato do rosto, a personalidade e a imagem que cada cliente deseja transmitir."} icon={<FaStar size={32} />} />

        <Card name={"Valorização do Serviço de Corte"} text={"Descubra estratégias para agregar valor ao serviço de corte, melhorar a experiência da cliente e transformar uma técnica profissional em uma oportunidade de aumentar seus resultados."} icon={<FaStar size={32} />} />

        <Card name={"Posicionamento e Valorização Profissional"} text={"Aprenda como fortalecer seu posicionamento, transmitir autoridade e valorizar sua experiência para se destacar no mercado e conquistar clientes que reconhecem seu trabalho."} icon={<FaStar size={32} />} />

        <Card name={"Gerenciamento e Fidelização de Clientes"} text={"Conheça estratégias práticas para organizar seu atendimento, criar relacionamento com as clientes e aumentar a fidelização, o retorno e a recorrência no salão."} icon={<FaStar size={32} />} />

        <Card name={"Cronograma Capilar como Diferencial"} text={"Aprenda a utilizar o cronograma capilar como ferramenta de diagnóstico e tratamento, oferecendo um atendimento mais personalizado e agregando valor aos seus serviços."} icon={<FaStar size={32} />} />

        <Card name={"Técnicas e Estratégias para Melhores Resultados"} text={"Conheça técnicas e estratégias que ajudam a otimizar cada etapa do atendimento, melhorar a execução dos procedimentos e alcançar resultados mais consistentes."} icon={<FaStar size={32} />} />

        <Card name={"Produtos, Ativos e Protocolos Corretos"} text={"Entenda como selecionar produtos, ativos e protocolos de acordo com as necessidades da fibra capilar, proporcionando mais segurança, eficiência e qualidade nos resultados."} icon={<FaStar size={32} />} />

        <Card name={"Como Aumentar a Durabilidade dos Alisamentos"} text={"Aprenda estratégias de manutenção e cuidados que contribuem para prolongar os resultados dos alisamentos, preservar a fibra capilar e aumentar a satisfação das clientes."} icon={<FaStar size={32} />} />

        <Card name={"Segurança nos Procedimentos"} text={"Conheça os principais cuidados para realizar procedimentos químicos com mais segurança, desde a avaliação da fibra até a escolha do protocolo e acompanhamento dos resultados."} icon={<FaStar size={32} />} />

        <Card name={"Dicas Práticas para o Dia a Dia do Salão"} text={"Confira dicas práticas e estratégias que podem ser aplicadas imediatamente na rotina do salão para otimizar processos, melhorar o atendimento e elevar a qualidade dos resultados."} icon={<FaStar size={32} />} />
      </div>
    </section>
  );
}

export default CardSection;
