"use client";

import { useEffect, useState } from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import PoliticaHTMLView from "@/components/organism/PoliticaHTMLView";

export default function PoliticaContentSwitcher() {
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
    const loadMdx = async () => {
      const res = await fetch("/docuvex/politicas.mdx");
      const raw = await res.text();
      const serialized = await serialize(raw);
      setMdxSource(serialized);
    };
    loadMdx();
  }, []);

  if (!isMobile) return <PoliticaHTMLView />;

  return (
    <div className="prose max-w-4xl w-full">
      {mdxSource ? (
        <MDXRemote {...mdxSource} />
      ) : (
        <p className="text-center text-gray-500">Cargando contenido...</p>
      )}
    </div>
  );
}
