import styles from '../styles/Sobrenosotros.module.css';

function SobreNosotros() {
  return (
    <section className={styles.sobreNosotros}>
      <h2>¿Por qué confiar en nosotros?</h2>

      <div className={styles.misionVision}>
        <div className={styles.mision}>
          <h3>Nuestro Compromiso</h3>
          <p>
            En cada proyecto, nos comprometemos a entender profundamente las necesidades de nuestros clientes y a ofrecer soluciones web que impulsen su crecimiento. Más que un proveedor, buscamos ser un aliado estratégico en tu camino digital.
          </p>
        </div>

        <div className={styles.vision}>
          <h3>Excelencia y Soporte</h3>
          <p>
            Nos esforzamos por mantener un estándar de excelencia en todo lo que hacemos. Además, sabemos que las dudas y necesidades no entienden de horarios, por eso ofrecemos atención y soporte técnico 24/7, asegurando que tu negocio nunca se detenga.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SobreNosotros;
