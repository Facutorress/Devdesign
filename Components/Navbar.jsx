import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router'; // Paso 1: Importa useRouter
import styles from '../styles/Navbar.module.css';

function Navbar() {
  const router = useRouter(); // Paso 2: Utiliza el hook

  return (
    <nav className={styles.navbar}>
      <div>
        <Image
          className={styles.logo}
          src="/Images/logo.png"
          alt="Logo" 
          width={100}
          height={100}
        />
      </div>
      <h2>Developer Designers</h2>
      <ul className={styles.navbarNav}>
        <li className={router.pathname === "/" ? `${styles.navItem} ${styles.active}` : styles.navItem}>
          <Link href="/"><p className={styles.navLink}>Home</p></Link>
        </li>
        <li className={router.pathname === "/cotizacion" ? `${styles.navItem} ${styles.active}` : styles.navItem}>
          <Link href="/cotizacion"><p className={styles.navLink}>Cotizá tu página</p></Link>
        </li>
        <li className={router.pathname === "/contacto" ? `${styles.navItem} ${styles.active}` : styles.navItem}>
          <Link href="/contacto"><p className={styles.navLink}>Contacto</p></Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
