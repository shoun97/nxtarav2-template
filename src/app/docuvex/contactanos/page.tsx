'use client';

import Image from "next/image";
import Header from "@/components/organism/Header";


export default function ContactanosPage() {
  return (
    <>
      <Header transparent />
      <main className="mx-auto px-6 py-12 mt-[107px]">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-[105px]">
          {/* Imagen de soporte */}
          <div className="relative w-full max-w-[550px] h-[300px] md:h-[500px] rounded-[32px] overflow-hidden">
            <Image
              src="/docuvex-soporte.svg"
              alt="Soporte Docuvex"
              layout="fill"
              objectFit="cover"
              className="rounded-[32px]"
              priority
            />
            {/* Ícono flotante opcional
            <div className="absolute bottom-10 right-[-20px] bg-teal-500 p-3 rounded-[30%] shadow-md">
              <Image
                src="/iconoAyuda.svg"
                alt="Ayuda"
                width={100}
                height={100}
                loading="lazy"
              />
            </div> */}
          </div>

          {/* Texto y contacto */}
          <div className="w-full max-w-[500px] rounded-[32px] px-4 md:px-8 py-6 flex flex-col justify-center">
            {/* Logo */}
            <div className="relative w-full max-w-[260px] h-[80px] mb-6">
              <Image
                src="/banner-docuvex.svg"
                alt="docuvex_logo"
                layout="fill"
                objectFit="contain"
                loading="lazy"
              />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Estamos Aquí Para Ayudarte
            </h2>
            <p className="mb-6 text-base md:text-lg">
              Si tienes dudas, problemas técnicos o necesitas soporte,
              contáctanos. Nuestro equipo te responderá a la brevedad.
            </p>
            <p className="text-base md:text-lg mb-3">
              📧{" "}
              <a
                href="mailto:ayudadocuvex@nxtara.com"
                className="text-teal-700 underline"
              >
                <b style={{ fontWeight: "bold", color: "#00B39F" }}>
                  ayudadocuvex@nxtara.com
                </b>
              </a>
            </p>
            <p className="text-base md:text-lg">
              📞{" "}
              <a href="tel:+56934566724" className="text-teal-700 underline">
                <b style={{ fontWeight: "bold", color: "#00B39F" }}>
                  {" "}
                  +56 9 3456 6724{" "}
                </b>
              </a>
              <br />
              <span className="text-sm text-neutral-700">
                (WhatsApp o llamada directa)
              </span>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
