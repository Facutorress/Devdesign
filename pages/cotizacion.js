// components/Cotizacion.js

import { useState } from 'react';
import styles from '../styles/Cotizacion.module.css';
import Layout from '../Components/Layout';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Cotizacion() {
  const [estimacion, setEstimacion] = useState(null);

  const calcularEstimacion = (values) => {
    let costo = 0;

    // Estimación basada en el tipo de sitio
    switch (values.tipoSitio) {
      case 'personal':
        costo += 50000;
        break;
      case 'negocio':
        costo += 100000;
        break;
      case 'ecommerce':
        costo += 150000;
        break;
      default:
        break;
    }

  
if (values.caracteristicas === 'blog') costo += 10000;
if (values.caracteristicas === 'galeria') costo += 20000;
if (values.caracteristicas === 'reservas') costo += 50000;


    return costo;
  };
  
const validationSchema = Yup.object({
  tipoSitio: Yup.string()
    .required('El tipo de sitio es obligatorio')
    .oneOf(['personal', 'negocio', 'ecommerce'], 'Tipo de sitio no válido'),

  caracteristicas: Yup.string()
    .min(1, 'Selecciona al menos una característica')
    .oneOf(['blog', 'galeria', 'reservas'], 'Característica no válida'),

  plazo: Yup.string()
    .required('El plazo es obligatorio')
    .oneOf(['1', '2', '3'], 'Plazo no válido')
});
  const formik = useFormik({
    initialValues: {
      tipoSitio: '',
      caracteristicas: '',
      plazo: ''
    },
    validationSchema,
    onSubmit: (values) => {
      const estimado = calcularEstimacion(values);
      setEstimacion(estimado);
    }
  });


  return (
    <Layout>
    <section className={styles.cotizacion}>
      <h2>Consulta por tu presupuesto</h2>

      <form onSubmit={formik.handleSubmit} className={styles.formulario}>
        <select 
          name="tipoSitio"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.tipoSitio}
        >
          <option value="" label="Selecciona un tipo de sitio" />
          <option value="personal">Sitio Web Personal</option>
          <option value="negocio">Sitio Web de Negocio</option>
          <option value="ecommerce">E-commerce</option>
        </select>
        {formik.touched.tipoSitio && formik.errors.tipoSitio ? <div className={styles.error}>{formik.errors.tipoSitio}</div> : null}

        <select 
  name="caracteristicas"
  onChange={formik.handleChange}
  onBlur={formik.handleBlur}
  value={formik.values.caracteristicas}
>
<option value="" label="Selecciona la caracteristicas" />
  <option value="blog">Blog</option>
  <option value="galeria">Galería de Imágenes</option>
  <option value="reservas">Sistema de Reservas</option>
</select>

        {formik.touched.caracteristicas && formik.errors.caracteristicas ? <div className={styles.error}>{formik.errors.caracteristicas}</div> : null}

        <select 
          name="plazo"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.plazo}
        >
          <option value="" label="Selecciona un plazo" />
          <option value="1">7 dias</option>
          <option value="2">14 dias</option>
          <option value="3">1 mes</option>
        </select>
        {formik.touched.plazo && formik.errors.plazo ? <div className={styles.error}>{formik.errors.plazo}</div> : null}

        <button type="submit">Obtener cotización</button>
      </form>

      {estimacion && (
        <div className={styles.estimacion}>
          Estimación del proyecto: ${estimacion}
        </div>
      )}
    </section>
    </Layout>
  );
}

export default Cotizacion;
