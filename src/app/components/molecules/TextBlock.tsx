// components/molecules/TextBlock.tsx
interface TextBlockProps {
  title: string;
  subtitle: string;
  description: string;
}

const TextBlock: React.FC<TextBlockProps> = ({ title, subtitle, description }) => (
  <div className="max-w-xl text-gray-700">
    <h2 className="text-3xl font-semibold">{title}</h2>
    <h3 className="text-2xl font-bold text-pink-500 mt-1">{subtitle}</h3>
    <p className="mt-4 text-lg whitespace-pre-line">{description}</p>
  </div>
);

export default TextBlock;
