import Image from "next/image";
import Link from "next/link";



interface FooterProps {
  logo: string;
  altLogo: string;
}

const solutions = [
  { icon: "/assets/icons/xperium.svg", alt: "Xperium", name: "Xperium", description: "Tienda online para tu negocio", href: "#xperium" },
  { icon: "/assets/icons/orvix.svg", alt: "Orvix", name: "Orvix", description: "Gestión total para empresas", href: "#orvix" },
  { icon: "/assets/icons/docuvex.svg", alt: "Docuvex", name: "Docuvex", description: "Gestor documental empresarial", href: "#docuvex" },
  { icon: "/assets/icons/insumex.svg", alt: "Insumex", name: "Insumex", description: "Insumos de oficina empresariales", href: "#insumex" },
  { icon: "/assets/icons/solvix.svg", alt: "Solvix", name: "Solvix", description: "Soluciones informáticas para empresas", href: "#solvix" },
];

const aboutUs = [
  { icon: "/assets/icons/star.svg", alt: "Identidad", text: "Nuestra identidad", href: "#identidad" },
  { icon: "/assets/icons/help.svg", alt: "Contáctanos", text: "Contactanos", href: "#contacto" },
  { icon: "/assets/icons/info.svg", alt: "Política", text: "Política de calidad", href: "#politica" },
];

const partners = [
  { logo: "/assets/icons/ilis.svg", alt: "Ilis Seguridad", name: "Ilis seguridad", href: "#ilis" },
  { logo: "/assets/icons/farallones.svg", alt: "Farallones", name: "Farallones Holding", href: "#farallones" },
];

const Footer: React.FC<FooterProps> = ({

  logo,
  altLogo,
}) => {
  return (
    <footer className="bg-black text-white py-10 px-4 md:px-20">
      <div className="flex flex-col md:flex-row justify-between gap-10 mb-6">
        {/* Soluciones digitales */}
        <div>
          <h3 className="font-bold text-lg mb-4">Soluciones digitales</h3>
          {solutions.map((s, idx) => (
            <Link key={idx} href={s.href} className="flex items-start gap-3 mb-3 hover:underline">
              <Image src={s.icon} alt={s.alt} width={20} height={20} />
              <div>
                <p className="font-semibold">{s.name}</p>
                <p className="text-sm">{s.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Nosotros */}
        <div>
          <h3 className="font-bold text-lg mb-4">Nosotros</h3>
          {aboutUs.map((item, idx) => (
            <Link key={idx} href={item.href} className="flex items-center gap-3 mb-3 hover:underline">
              <Image src={item.icon} alt={item.alt} width={18} height={18} />
              <p className="text-sm">{item.text}</p>
            </Link>
          ))}
        </div>

        {/* Alianzas */}
        <div>
          <h3 className="font-bold text-lg mb-4">Alianzas</h3>
          {partners.map((p, idx) => (
            <Link key={idx} href={p.href} className="flex items-center gap-3 mb-3 hover:underline">
              <Image src={p.logo} alt={p.alt} width={20} height={20} />
              <p className="text-sm">{p.name}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t border-fuchsia-600 w-full my-4" />

      <div className="flex justify-between items-center">
        <Image src={logo} alt={altLogo} width={100} height={30} />
        <div className="flex gap-4">
          <Link href="#facebook">
            <Image src="/assets/icons/facebook.svg" alt="Facebook" width={20} height={20} />
          </Link>
          <Link href="#instagram">
            <Image src="/assets/icons/instagram.svg" alt="Instagram" width={20} height={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
