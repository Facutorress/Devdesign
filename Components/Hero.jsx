
import styles from '../styles/Hero.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';


function Hero() {
  const [inView, setInView] = useState(false);
const elementRef = useRef();

  const titleVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }
  };
  
  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } }
  };
  
  const buttonVariant = {
    hover: { scale: 1.1, transition: { yoyo: Infinity } }
  };
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
  <div className={styles.hero} ref={elementRef}>
    <div className={styles.heroContent}>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Tu presencia en línea, reinventada
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Construimos experiencias web inolvidables.
      </motion.p>

      <Link href="/contacto">
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          whileHover="hover"
          variants={buttonVariant}
          className={styles.heroCta}
        >
          Conoce más sobre nosotros
        </motion.button>
      </Link>
    </div>
  </div>
);

  }
  
export default Hero;