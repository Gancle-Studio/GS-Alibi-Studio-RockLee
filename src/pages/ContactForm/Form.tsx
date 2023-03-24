import styles from './ContactForm.module.scss';
import { useFormik } from 'formik';
 
const FormContact = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      contactData: '',
      message: ''
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <div className={styles.inputContainer}>
        <label htmlFor="name" className='p'>Imię</label>
        <input
        placeholder='Podaj swoje imię...'
          id="name"
          name="name"
          type="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
      </div>

      <div className={styles.inputContainer}>
      <label htmlFor="contactData" className='p'>Numer telefonu / E-mail</label>
      <input
      placeholder='Podaj swój numer telefonu / adres e-mail...'
        id="contactData"
        name="contactData"
        type="contactData"
        onChange={formik.handleChange}
        value={formik.values.contactData}
      />
      </div>

      <div className={styles.inputContainer}>
      <label htmlFor="message" className='p'>Wiadomość</label>
      <textarea
      placeholder='Powiedz nam czego potrzebujesz...'
        id="message"
        name="message"
        onChange={formik.handleChange}
        value={formik.values.message}
      />
      </div>

      <div className={styles.submitBtnContainer}>
      <button type="submit" className={styles.submitBtn}>Wyślij</button>
      </div>
    </form>
  );
};

export default FormContact;