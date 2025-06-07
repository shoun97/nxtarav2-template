"use client";

import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { MDXRemote } from "next-mdx-remote";
import { useEffect, useState } from "react";
import PoliticaHTMLView from "@/components/organism/PoliticaHTMLView";

type Props = {
  mdxSource: MDXRemoteSerializeResult;
};

export default function PoliticaContentSwitcher({ mdxSource }: Props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return isMobile ? (
    <div className="prose max-w-4xl w-full">
      <MDXRemote {...mdxSource} />
    </div>
  ) : (
    <PoliticaHTMLView />
  );
}
