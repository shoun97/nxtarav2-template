import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import clsx from 'clsx'; 

type Props = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

const ScrollFade = ({ children, delay = 0, className }: Props) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      className={clsx("w-full", className)} 
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollFade;