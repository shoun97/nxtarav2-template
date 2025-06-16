import type { Metadata } from "next";

import "@styles/globals.css";
import { metadataConfig } from "@config/metadataConfig";

import BottomNavigationBar from "@components/molecules/BottomNavigationBar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

// URL base para los metadatos
const metadataBaseURL = new URL(metadataConfig.url);

// Metadatos para SEO y Open Graph
export const metadata: Metadata = {
  metadataBase: metadataBaseURL,
  title: metadataConfig.title,
  description: metadataConfig.description,
  authors: metadataConfig.authors,
  generator: "Next.js",
  keywords: metadataConfig.keywords,
  referrer: "origin",
  publisher: metadataConfig.companyName,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: metadataConfig.url,
    title: metadataConfig.title,
    description: metadataConfig.description,
    siteName: metadataConfig.companyName,
  },
};

/**
 * Componente de diseño principal que envuelve el contenido de la aplicación.
 * @param children Contenido que se mostrará dentro del layout.
 * @returns Componente que representa la estructura básica de la aplicación con encabezado y pie de página.
 */
const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="es" className={montserrat.variable}>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body>
        {children}
        {/* Barra inferior solo en mobile */}
        <div className="block lg:hidden">
          <BottomNavigationBar />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;