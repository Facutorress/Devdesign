// components/ProcesoDeTrabajo.js

import styles from '../styles/Procesodetrabajo.module.css';

function ProcesoDeTrabajo() {
  return (
    <section className={styles.proceso}>
      <h2>Proceso de Trabajo</h2>

      <div className={styles.pasos}>
        <div className={styles.paso}>
          <h3>1. Consulta Inicial</h3>
          <p>Comenzamos con una reunión para entender tus necesidades y objetivos.</p>
        </div>

        <div className={styles.paso}>
          <h3>2. Diseño</h3>
          <p>Creación de mockups y prototipos basados en tus requerimientos.</p>
        </div>

        <div className={styles.paso}>
          <h3>3. Desarrollo</h3>
          <p>Construcción del sitio web con las tecnologías más adecuadas.</p>
        </div>

        <div className={styles.paso}>
          <h3>4. Revisión</h3>
          <p>Revisamos juntos el sitio y hacemos los ajustes necesarios.</p>
        </div>

        <div className={styles.paso}>
          <h3>5. Lanzamiento</h3>
          <p>Una vez que todo esté perfecto, lanzamos tu sitio al mundo.</p>
        </div>
      </div>
    </section>
  );
}

export default ProcesoDeTrabajo;
