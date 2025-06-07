import Image from "next/image";

const PrinciplesBanner = () => {
  return (
    <div className="w-full py-6 px-4 flex justify-center text-white">
      <div className="md:hidden flex items-center gap-4">

        {/* Texto + flecha + QR */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center pb-7">
              <Image
                src="/nuestros-principios-movile.svg"
                alt="QR Principios"
                width={500}
                height={100}
              />
            </div>
            <Image
              src="/qr-nuestros-principios.png"
              alt="QR Principios"
              width={100}
              height={100}
            />
            <span className="text-xl mt-1">Ver en detalle</span>
          </div>
        </div>
      </div>
      <div className="hidden md:block flex items-center gap-4">
        {/* Línea izquierda */}

        {/* Texto + flecha + QR */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center">
            <Image
              src="/nuestros-principios.svg"
              alt="QR Principios"
              width={500}
              height={100}
            />
          </div>

          <div className="flex flex-col items-center pt-7">
            <Image
              src="/qr-nuestros-principios.png"
              alt="QR Principios"
              width={100}
              height={100}
            />
            <span className="text-xs mt-1">Ver en detalle</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrinciplesBanner;
