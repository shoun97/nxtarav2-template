import PolicyInfoCard from "@/components/molecules/PolicyInfoCard";
import QualityItem from "@/components/molecules/QualityItem";
import QualityPolicy from "../molecules/QualityPolicy";
import ScrollFade from "../atoms/ScrollFade";
import PrinciplesBanner from "../molecules/PrinciplesBanner";

const principles = [
  {
    number: 1,
    title: "Rapidez y eficiencia",
    description: "Respondemos dentro de los tiempos establecidos (SLAs).",
    imageSrc: "/principio-1.svg",
    imagePosition: "right",
  },
  {
    number: 2,
    title: "Enfoque en el usuario",
    description: "Atendemos con orientación a la satisfacción del usuario.",
    imageSrc: "/principio-2.svg",
    imagePosition: "left",
  },
  {
    number: 3,
    title: "Compromiso con la calidad",
    description: "Mejoramos continuamente nuestros servicios.",
    imageSrc: "/principio-3.svg",
    imagePosition: "right",
  },
  {
    number: 4,
    title: "Mejora continua",
    description: "Evaluamos y mejoramos nuestros procesos periódicamente.",
    imageSrc: "/principio-4.svg",
    imagePosition: "left",
  },
  {
    number: 5,
    title: "Cumplir Normas y Resoluciones",
    description: "Alineamos nuestras acciones a las normas.",
    imageSrc: "/principio-5.svg",
    imagePosition: "right",
  },
  {
    number: 6,
    title: "Resolución proactiva de problemas",
    description: "Detectamos errores a tiempo y tomamos acciones.",
    imageSrc: "/principio-6.svg",
    imagePosition: "left",
  },
  {
    number: 7,
    title: "Comunicación clara y efectiva",
    description: "Hablamos con empatía, respeto y claridad.",
    imageSrc: "/principio-7.svg",
    imagePosition: "right",
  },
  {
    number: 8,
    title: "Trabajo en equipo",
    description: "Colaboramos para lograr objetivos comunes.",
    imageSrc: "/principio-8.svg",
    imagePosition: "left",
  },
];

const PolicyInfoSection = () => {
  return (
    <section id="calidad" className="bg-gradient-to-b from-[#4B2E83] to-[#A12C8E] py-16 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <ScrollFade delay={0.1}>
          <QualityPolicy />
        </ScrollFade>
        {/* Tarjetas informativas */}
        <div className="flex flex-col md:flex-row justify-center items-start gap-6 text-left" style={{ overflow: 'visible', minWidth: '100%' }}>
          <ScrollFade delay={0.3} className="w-full">
            <PolicyInfoCard
              title="¿Para qué existe esta política?"
              description="Garantizar un soporte técnico eficiente y orientado al usuario, contribuyendo al cumplimiento de los objetivos de calidad."
              iconSrc="/borde-derecho-arriba.svg"
            />
          </ScrollFade>

          <ScrollFade delay={0.8} className="w-full ">
            <PolicyInfoCard
              title="¿A quiénes aplica?"
              description="A todos los servicios del equipo de soporte y mesa de ayuda: solicitudes, incidentes, problemas y consultas de usuarios internos y externos."
              iconSrc="/borde-derecho-arriba.svg"
            />
          </ScrollFade>
        </div>

        {/* Subtítulo */}
        <ScrollFade delay={0.1}>
          <PrinciplesBanner />
        </ScrollFade>
      </div>

      {/* Lista de principios */}
      <div className="flex flex-col gap-12 max-w-4xl mx-auto">
        {principles.map((item) => (
          <ScrollFade key={item.number} delay={0.3 + item.number * 0.1}>
            <QualityItem
              key={item.number}
              number={item.number}
              title={item.title}
              description={item.description}
              imageSrc={item.imageSrc}
              iconSrc="/borde-derecho-arriba.svg"
              imagePosition={item.imagePosition as "left" | "right"}
            />
          </ScrollFade>
        ))}
      </div>
    </section>
  );
};

export default PolicyInfoSection;
