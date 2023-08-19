// components/Contacto.js
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Layout from '../Components/Layout';
import styles from '../styles/Contacto.module.css';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';


function Contacto() {
  const slideFromRight = {
    hidden: { opacity: 0, x: 300 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };
  const [inView, setInView] = useState(false);
  const formRef = useRef();
  
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
  
    if (formRef.current) {
      observer.observe(formRef.current);
    }
  
    return () => {
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, []);
    
  const formik = useFormik({
    initialValues: {
      nombre: '',
      email: '',
      asunto: '',
      mensaje: ''
    },
    validationSchema: Yup.object({
      nombre: Yup.string()
        .required('El nombre es obligatorio'),
      email: Yup.string()
        .email('Correo electrónico inválido')
        .required('El correo electrónico es obligatorio'),
      asunto: Yup.string()
        .required('El asunto es obligatorio'),
      mensaje: Yup.string()
        .required('El mensaje es obligatorio')
    }),
  });
  const enviarEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bsm3s2a', 'template_hqm8b6h', e.target, 'AmUXdfMze8_5aWuOh')
      .then((result) => {
          console.log(result.text);
          formik.resetForm(); // Resetea el formulario
          alert('Mensaje enviado con éxito!'); // Muestra un mensaje de alerta
      }, (error) => {
          console.log(error.text);
          alert('Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.');
      });
};


  return (
    <Layout title="Contacto">
      <section className={styles.contacto}>
        <h2>Ponete en contacto con nosotros</h2>
        <motion.div 
  ref={formRef}
  initial="hidden"
  animate={inView ? "visible" : "hidden"}
  variants={slideFromRight}
>
        <form onSubmit={enviarEmail} className={styles.formulario}>
          <input 
            type="text" 
            placeholder="Nombre" 
            name="nombre"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.nombre}
          />
          {formik.touched.nombre && formik.errors.nombre ? <div className={styles.error}>{formik.errors.nombre}</div> : null}

          <input 
            type="email" 
            placeholder="Correo electrónico" 
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? <div className={styles.error}>{formik.errors.email}</div> : null}

          <input 
            type="text" 
            placeholder="Asunto" 
            name="asunto"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.asunto}
          />
          {formik.touched.asunto && formik.errors.asunto ? <div className={styles.error}>{formik.errors.asunto}</div> : null}

          <textarea 
            placeholder="Mensaje" 
            name="mensaje"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.mensaje}
          ></textarea>
          {formik.touched.mensaje && formik.errors.mensaje ? <div className={styles.error}>{formik.errors.mensaje}</div> : null}

          <button type="submit">Enviar</button>
        </form>
</motion.div>
      <div className={styles.info}>
        <p>Buenos Aires, La Plata</p>
        <p><strong>Teléfono:</strong> +54 221303721</p>
        <p><strong>Email:</strong> torresfacundo.lt@gmail.com</p>
      </div>

      {/* Puedes integrar un mapa aquí, por ejemplo, usando la API de Google Maps o cualquier otro servicio de mapas. */}
    </section>
    </Layout>
  );
}

export default Contacto;
