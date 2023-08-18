// components/Servicios.js

import styles from '../styles/Servicios.module.css';

function Servicios() {
  return (
    <section className={styles.servicios}>
      <h2>Servicios</h2>

      <div className={styles.servicio}>
        <h3>🎨 Diseño web</h3>
        <p>Ofrecemos diseños responsivos adaptados a todos los dispositivos, personalizados según las necesidades de tu marca y negocio.</p>
      </div>

      <div className={styles.servicio}>
        <h3>💻 Desarrollo web</h3>
        <p>Trabajamos en soluciones personalizadas basadas en tecnologías modernas como React y Next.js.</p>
      </div>

      <div className={styles.servicio}>
        <h3>🔧 Mantenimiento y soporte</h3>
        <p>Brindamos servicios de mantenimiento para garantizar que tu sitio esté siempre actualizado y seguro. Además, ofrecemos soporte técnico para resolver cualquier problema que pueda surgir.</p>
      </div>

      <div className={styles.servicio}>
        <h3>📈 Otros servicios</h3>
        <p>Además del diseño y desarrollo web, ofrecemos servicios de SEO para mejorar tu visibilidad en línea y estrategias de marketing digital para impulsar tu negocio.</p>
      </div>

      <div className={styles.servicio}>
        <h3>🔍 Consultoría tecnológica</h3>
        <p>Ofrecemos consultoría tecnológica para ayudarte a definir y planificar la estrategia tecnológica más adecuada para tu negocio. Evaluamos tus necesidades y te proponemos las soluciones más adecuadas.</p>
      </div>

      <div className={styles.servicio}>
        <h3>⚙️ Integraciones y automatizaciones</h3>
        <p>Integramos sistemas y aplicaciones para mejorar la eficiencia de tus procesos. Automatizamos tareas repetitivas para que puedas centrarte en lo que realmente importa: tu negocio.</p>
      </div>

    </section>
  );
}

export default Servicios;

