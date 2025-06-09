import Image from "next/image";
import Link from "next/link";

interface Solution {
  icon: string;
  alt: string;
  name: string;
  description: string;
  href: string;
}

interface LinkItem {
  icon: string;
  alt: string;
  text: string;
  href: string;
}

interface Partner {
  logo: string;
  alt: string;
  name: string;
  href: string;
}

interface FooterProps {
  solutions: Solution[];
  aboutUs: LinkItem[];
  partners: Partner[];
  logo: string;
  altLogo: string;
}

const Footer: React.FC<FooterProps> = ({
  solutions,
  aboutUs,
  partners,
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
