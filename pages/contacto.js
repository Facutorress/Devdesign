// components/Contacto.js
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Layout from '../Components/Layout';
import styles from '../styles/Contacto.module.css';

function Contacto() {
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
    onSubmit: values => {
      // Aquí puedes manejar el envío de los datos, por ejemplo, a una API.
      console.log(values);
    }
  });

  return (
    <Layout title="Contacto">
      <section className={styles.contacto}>
        <h2>Ponete en contacto con nosotros</h2>

        <form onSubmit={formik.handleSubmit} className={styles.formulario}>
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
