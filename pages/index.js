import styles from '../styles/Home.module.css'; 
import Layout from '../Components/Layout';
import Hero from '../Components/Hero';
import Sobrenosotros from '../Components/Sobrenosotros';
import Servicios from '../Components/Servicios';
import ProcesoDeTrabajo from '../Components/Procesodetrabajo';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout title="Inicio">
      <main>
        <div className={styles.container}>
          <h1 className={styles.mainTitle}>Bienvenido a nuestra página web</h1>
          <p className={styles.mainText}>Nos especializamos en soluciones web y software de alta calidad.</p>
          
          {/* Aquí está el div para la imagen */}
          <div className={styles.imageContainer}>
            <Image></Image>
          </div>
          <div className={styles.parrafo}>
          <p>En un mundo digital en constante evolución, es esencial tener una presencia en línea sólida y confiable. Nuestro equipo de expertos se dedica a diseñar y desarrollar soluciones web y software que no solo cumplen, sino que superan las expectativas.</p>
          </div>
          <div className={styles.imageContainer}>
            <Image></Image>
          </div>
          <div className={styles.parrafo}>
          <p>En un mundo digital en constante evolución, es esencial tener una presencia en línea sólida y confiable. Nuestro equipo de expertos se dedica a diseñar y desarrollar soluciones web y software que no solo cumplen, sino que superan las expectativas.</p>
          </div>
        </div>
        <Hero></Hero>
        <Sobrenosotros></Sobrenosotros>
        <Servicios></Servicios>
        <ProcesoDeTrabajo />
      </main>
    </Layout> 
  )
}

