"use client"; // <== MARCA COMPLETA LA PÁGINA COMO CLIENTE

import { useEffect, useState } from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Header from "@/components/organism/Header";
import FooterDocuvex from "@/components/organism/Footer-docuvex";
import Banner from "@/components/molecules/Banner";
import PoliticaHTMLView from "@/components/organism/PoliticaHTMLView";

export default function PoliticaPrivacidad() {
  const [isMobile, setIsMobile] = useState(false);
  const [mdxSource, setMdxSource] = useState<MDXRemoteSerializeResult | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const fetchAndParseMDX = async () => {
      const res = await fetch("/docuvex/politicas.mdx");
      const raw = await res.text();
      const mdx = await serialize(raw);
      setMdxSource(mdx);
    };

    fetchAndParseMDX();
  }, []);

  return (
    <>
      <Header transparent />
      <Banner
        desktopSrc="/header-docuvex-politicas.svg"
        mobileSrc="/header-docuvex-politicas.svg"
      />
      <main className="flex flex-col items-center justify-center px-6 py-12">
        {isMobile ? (
          mdxSource ? (
            <div className="prose max-w-4xl w-full">
              <MDXRemote {...mdxSource} />
            </div>
          ) : (
            <p className="text-gray-500 text-center">Cargando contenido...</p>
          )
        ) : (
          <PoliticaHTMLView />
        )}
      </main>
      <div style={{ height: "100px" }}></div>
      <FooterDocuvex />
    </>
  );
}
