import fs from "fs";
import path from "path";
import { Metadata } from "next";
import { parseMDX } from "@/utils/mdx";
import Header from "@/components/organism/Header";
import FooterDocuvex from "@/components/organism/Footer-docuvex";
import Banner from "@/components/molecules/Banner";
import PoliticaContentSwitcher from "@/components/organism/PoliticaContentSwitcher";

export const metadata: Metadata = {
  title: "Políticas de Privacidad | Docuvex - Nxtara",
  description: "Conoce nuestras políticas de privacidad",
  robots: "index, follow",
};

export default async function PoliticaPrivacidad() {
  const filePath = path.join(
    process.cwd(),
    "src",
    "app",
    "components",
    "organism",
    "politicas.mdx"
  );

  let mdxSource = null;

  try {
    const source = fs.readFileSync(filePath, "utf8");
    mdxSource = await parseMDX(source);
  } catch (error) {
    console.error("Error al cargar el archivo MDX:", error);
  }

  return (
    <>
      <Header transparent />
      <Banner
        desktopSrc="/header-docuvex-politicas.svg"
        mobileSrc="/header-docuvex-politicas.svg"
      />
      <main className="flex flex-col items-center justify-center px-6 py-12">
        {mdxSource ? (
          <PoliticaContentSwitcher mdxSource={mdxSource} />
        ) : (
          <p className="text-center text-gray-500">
            No se pudo cargar el contenido de políticas.
          </p>
        )}
      </main>
      <div style={{ height: "100px" }}></div>
      <FooterDocuvex />
    </>
  );
}
