'use client';

import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';

export default function PoliticaHTMLView() {
  const [html, setHtml] = useState('');

  useEffect(() => {
    fetch('/docs/politica-privacidad.html')
      .then((res) => res.text())
      .then((data) => setHtml(data));
  }, []);

  return (
    <div
      className="
        px-4 sm:px-6 md:px-8 
        py-6 
        max-w-screen-lg 
        mx-auto 
        text-neutral-800 
        text-justify 
        leading-relaxed 
        overflow-hidden
      "
    >
      <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
        {parse(html)}
      </div>
    </div>
  );
}
