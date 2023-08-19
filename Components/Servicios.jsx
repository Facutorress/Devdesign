import { motion } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/Servicios.module.css';

function Servicios() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const refs = Array(6).fill().map(() => useRef(null));
  const [inViews, setInViews] = useState(Array(6).fill(false));

  useEffect(() => {
    refs.forEach((ref, index) => {
      const currentRef = ref.current;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInViews(prevInViews => {
              const newInViews = [...prevInViews];
              newInViews[index] = true;
              return newInViews;
            });
          }
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
        }
      );

      if (currentRef) {
        observer.observe(currentRef);
      }

      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    });
  }, []);


  return (
    <section className={styles.servicios}>
      <h2>Servicios</h2>

      {['🎨 Diseño web', '💻 Desarrollo web', '🔧 Mantenimiento y soporte', '📈 Otros servicios', '🔍 Consultoría tecnológica', '⚙️ Integraciones y automatizaciones'].map((title, index) => (
        <motion.div 
        key={index}
          ref={refs[index]}
          className={styles.servicio}
          initial="hidden"
          animate={inViews[index] ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <div className={styles.servicio}>
            <h3>{title}</h3>
            <p>Descripción del servicio {index + 1}.</p>
          </div>
        </motion.div>
      ))}
    </section>
  );
}

export default Servicios;
