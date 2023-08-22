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
    
    <div className={styles.contentGroup}>
        <div className={styles.imageContainer}>
            <Image src="Images\Diseño sin título (4).png" width={250} height={180} alt="Diseño web" />
        </div>
        <div className={styles.parrafo}>
            <p>En un mundo digital que no para de avanzar, es fundamental contar con una presencia en línea firme y de confianza.</p>
        </div>
    </div>

    <div className={styles.contentGroup}>
        <div className={styles.imageContainerr}>
            <Image src="/Images/facutorres._White_wall_serving_as_the_backdrop_for_a_minimalist_b1ca74ee-0346-4227-919a-fc294aa23983.png" width={250} height={140} alt="Estudio de diseño moderno" />
        </div>
        <div className={styles.parrafoo}>
            <p>Nuestro equipo se dedica a armar soluciones web y aplicaciones, usando lo último y lo mejor en tecnologías de programación. </p>
        </div>
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

