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

  const servicios = [
    {
      title: '🎨 Diseño web',
      description: 'Ofrecemos diseños modernos y responsivos adaptados a tus necesidades.'
    },
    {
      title: '💻 Desarrollo web',
      description: 'Desarrollamos sitios web utilizando las últimas tecnologías del mercado.'
    },
    {
      title: '🔧 Mantenimiento y soporte',
      description: 'Brindamos soporte técnico y mantenimiento para asegurar que tu sitio funcione sin problemas.'
    },
    {
      title: '📈 Otros servicios',
      description: 'Ofrecemos una variedad de servicios adicionales para complementar tu presencia en línea.'
    },
    {
      title: '🔍 Consultoría tecnológica',
      description: 'Te asesoramos en la elección de tecnologías y estrategias digitales para tu negocio.'
    },
    {
      title: '⚙️ Integraciones y automatizaciones',
      description: 'Integramos herramientas y automatizamos procesos para optimizar tu operación en línea.'
    }
  ];
  
  return (
    <section className={styles.servicios}>
      <h2>Servicios</h2>

      {servicios.map((servicio, index) => (
  <motion.div 
    key={index}
    ref={refs[index]}
    className={styles.servicio}
    initial="hidden"
    animate={inViews[index] ? "visible" : "hidden"}
    variants={fadeInUp}
  >
    <div className={styles.servicio}>
      <h3>{servicio.title}</h3>
      <p>{servicio.description}</p>
    </div>
  </motion.div>
))}

    </section>
  );
}

export default Servicios;
