import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function SlideInSection({children}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(50px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
      }}
    >
      {children}
    </section>
  )
}
