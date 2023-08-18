
import styles from '../styles/Hero.module.css';
import Link from 'next/link';

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Tu presencia en línea, reinventada</h1>
        <p>Construimos experiencias web inolvidables.</p>
        <Link href="/contacto">
          <button className={styles.heroCta}>Conoce más sobre nosotros</button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;

