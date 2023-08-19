import styles from '../styles/Home.module.css'; 
import Layout from '../Components/Layout';
import Hero from '../Components/Hero';
import Sobrenosotros from '../Components/Sobrenosotros';
import Servicios from '../Components/Servicios';
import ProcesoDeTrabajo from '../Components/Procesodetrabajo';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2 } }
  };
  
  return (
    <Layout title="Inicio">
      <main>
      <motion.div initial="hidden" animate="visible" variants={fadeInUp} className={styles.container}>
    <h1 className={styles.mainTitle}>Bienvenido a nuestra página web</h1>
    <p className={styles.mainText}>Nos especializamos en soluciones web y software de alta calidad.</p>
    
    <div className={styles.imageContainer}>
    <Image alt="Diseño web"></Image>
</div>
<div className={styles.parrafo}>
    <p>En un mundo digital que no para de avanzar, es fundamental contar con una presencia en línea firme y de confianza. Tener un sitio web para tu negocio , puede posicionarte como líder en tu rubro y acercándote a tus clientes de una manera efectiva y moderna.</p>
</div>
<div className={styles.imageContainerr}>
    <Image alt="Estudio de diseño moderno"></Image>
</div>
<div className={styles.parrafo}>
    <p>Nuestro equipo se dedica a armar soluciones web y aplicaciones, usando lo último y lo mejor en tecnologías de programación. Nos encargamos de personalizar cada rincón de tu página, asegurándonos de que deje la mejor experiencia de usuario. </p>
</div>

</motion.div>

        <Hero></Hero>
        <Sobrenosotros></Sobrenosotros>
        <Servicios></Servicios>
        <ProcesoDeTrabajo />
      </main>
    </Layout> 
  )
}

