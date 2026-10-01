import { FaStar } from "react-icons/fa";
import Card from "./Card";

function CardSection() {
  return (
    <section className="w-full bg-neutral-900 flex flex-col items-center justify-center p-16 px-4" id="workshop">
      <p className="text-4xl mb-16 text-white text-center">Em 9 horas de workshop prático, você vai aprender:</p>

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
        <Card name={"Fundamentos de Mechas Criativas"} text={"Entenda os princípios das mechas criativas, como divisão, posicionamento e planejamento, para criar iluminações modernas e com identidade própria."} icon={<FaStar size={32} />} />

        <Card name={"Pó Descolorante Azul x Pó Descolorante Branco"} text={"Conheça na prática as diferenças entre o pó descolorante azul tradicional e o pó descolorante branco, e saiba quando escolher cada um de acordo com a técnica e o resultado desejado."} icon={<FaStar size={32} />} />

        <Card name={"Iluminação com Pó Descolorante Azul"} text={"Aprenda a técnica de iluminação com o pó descolorante azul tradicional, com controle do clareamento, uniformidade e segurança em cada etapa da aplicação."} icon={<FaStar size={32} />} />

        <Card name={"Técnica de Mão Livre com Pó Descolorante Branco"} text={"Domine a iluminação à mão livre com o pó descolorante branco, uma das técnicas mais procuradas hoje, e ganhe liberdade na aplicação para criar resultados naturais e personalizados."} icon={<FaStar size={32} />} />

        <Card name={"Loiro Mais Claro e Morena Iluminada"} text={"Descubra como construir um loiro mais claro e uma morena iluminada, entendendo o que muda em cada processo, desde o planejamento até o resultado final."} icon={<FaStar size={32} />} />

        <Card name={"Tonalização Criativa com a Cartela Nanno"} text={"Aprenda a tonalizar de forma criativa utilizando a cartela de cores Nanno, combinando tons para valorizar a iluminação e entregar um acabamento exclusivo para cada cliente."} icon={<FaStar size={32} />} />

        <Card name={"Demonstração Prática em Duas Modelos"} text={"Acompanhe a execução das duas técnicas lado a lado, em duas modelos, e compare em tempo real o comportamento de cada descolorante e o resultado de cada abordagem."} icon={<FaStar size={32} />} />

        <Card name={"A Ciência por Trás de Cada Escolha"} text={"Entenda o comportamento de cada descolorante e os fundamentos técnicos que orientam suas decisões, para trabalhar com mais segurança, previsibilidade e domínio real dos produtos."} icon={<FaStar size={32} />} />

        <Card name={"Arte, Assinatura e Novas Oportunidades"} text={"Explore o lado artístico da profissão sem abrir mão da segurança técnica, transforme cada iluminação em uma assinatura e amplie suas oportunidades no mercado da beleza."} icon={<FaStar size={32} />} />
      </div>
    </section>
  );
}

export default CardSection;