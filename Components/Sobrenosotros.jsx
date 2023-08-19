import styles from '../styles/Sobrenosotros.module.css';
import { motion } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';

function SobreNosotros() {
  const slideFromLeft = {
    hidden: { x: '-100vw' },
    visible: { x: 0, transition: { type: 'spring', stiffness: 60 } }
  };
  
  const slideFromRight = {
    hidden: { x: '100vw' },
    visible: { x: 0, transition: { type: 'spring', stiffness: 60 } }
  };
  const [inView, setInView] = useState(false);
  const elementRef = useRef();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );
  
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
  
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);
    
  return (
    <section className={styles.sobreNosotros} ref={elementRef}>
      <h2>¿Por qué confiar en nosotros?</h2>
  
      <div className={styles.misionVision}>
        <motion.div 
          className={styles.mision}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={slideFromLeft}
        >
          <h3>Nuestro Compromiso</h3>
          <p>
            En cada proyecto, nos comprometemos a entender profundamente las necesidades de nuestros clientes y a ofrecer soluciones web que impulsen su crecimiento. Más que un proveedor, buscamos ser un aliado estratégico en tu camino digital.
          </p>
        </motion.div>
  
        <div className={styles.contenedorAnimado}>
  <motion.div 
    className={styles.vision}
    initial="hidden"
    animate={inView ? "visible" : "hidden"}
    variants={slideFromRight}
  >
    <h3>Excelencia y Soporte</h3>
    <p>
      Nos esforzamos por mantener un estándar de excelencia en todo lo que hacemos. Además, sabemos que las dudas y necesidades no entienden de horarios, por eso ofrecemos atención y soporte técnico 24/7, asegurando que tu negocio nunca se detenga.
    </p>
  </motion.div>
</div>

      </div>
    </section>
  );
  
}

export default SobreNosotros;
