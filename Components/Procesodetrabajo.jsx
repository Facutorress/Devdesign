import { motion } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/Procesodetrabajo.module.css';

function ProcesoDeTrabajo() {
  const complexAnimation = {
    hidden: { opacity: 0, y: 50, rotate: -10 },
    visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.8 } }
  };

  const refs = Array(5).fill().map(() => useRef(null));
  const [inViews, setInViews] = useState(Array(5).fill(false));

  useEffect(() => {
    refs.forEach((ref, index) => {
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

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    });
  }, []);
  const pasos = [
    {
      titulo: "1. Consulta Inicial",
      descripcion: "Comenzamos con una reunión para entender tus necesidades y objetivos."
    },
    {
      titulo: "2. Diseño",
      descripcion: "Creación de mockups y prototipos basados en tus requerimientos."
    },
    {
      titulo: "3. Desarrollo",
      descripcion: "Construcción del sitio web con las tecnologías más adecuadas."
    },
    {
      titulo: "4. Revisión",
      descripcion: "Revisamos juntos el sitio y hacemos los ajustes necesarios."
    },
    {
      titulo: "5. Lanzamiento",
      descripcion: "Una vez que todo esté perfecto, lanzamos tu sitio al mundo."
    }
  ];
  
  return (
    <section className={styles.proceso}>
      <h2>Proceso de Trabajo</h2>

      <div className={styles.pasos}>
      {pasos.map((paso, index) => (
  <motion.div 
    ref={refs[index]}
    className={styles.paso}
    initial="hidden"
    animate={inViews[index] ? "visible" : "hidden"}
    variants={complexAnimation}
  >
    <h3>{paso.titulo}</h3>
    <p>{paso.descripcion}</p>
  </motion.div>
))}

      </div>
    </section>
  );
}

export default ProcesoDeTrabajo;
