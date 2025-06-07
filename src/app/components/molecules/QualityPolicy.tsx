import Image from "next/image";

const QualityPolicy = () => {
  return (
    <section className="w-full py-12 px-4 text-white text-center">
      <div className="max-w-2xl mx-auto">
        <Image
          src="/qualityPolicy.svg"
          alt="Política de calidad - Infraestructura y Servicios TI"
          width={300}
          height={300}
          className="mx-auto mb-6"
          priority
        />
        <h2 className="text-2xl font-bold mb-2">Política de calidad</h2>
        <p className="text-lg">Infraestructura y Servicios TI</p>
      </div>
    </section>
  );
};

export default QualityPolicy;
