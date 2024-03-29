import styles from './ContactForm.module.scss';
import { useFormik } from 'formik';
import axios from 'axios';
import { useContext, useState } from 'react';
import PageModeContext, { PageModeContextType } from 'contexts/PageModeContext';

// const validate = (values: any) => {
//   const errors = {};
//   if (!values.name) {
//     errors.name = 'To pole jest wymagane!';
//   }

//   if (!values.contactData) {
//     errors.contactData = 'To pole jest wymagane!';
//   } else if (
//     !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.contactData) ||
//     !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(
//       values.contactData
//     )
//   ) {
//     errors.contactData = 'Numer telefonu lub adres e-mail jest niepoprawny!';
//   }

//   return errors;
// };

const FormContact = () => {
  const { mode } = useContext(PageModeContext) as PageModeContextType;
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: '',
      contactData: '',
      message: ''
    },
    // validate,
    onSubmit: (values: any, { resetForm }) => {
      axios.post(
        mode === 'PHYSIO' ? '/api/email-zdrowie' : '/api/email-alibi',
        values
      );
      resetForm();
      setIsSubmitted(!isSubmitted);
    }
  });
  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <div className={styles.inputContainer}>
        <label htmlFor='name' className='p'>
          Imię
        </label>
        <input
          placeholder='Podaj swoje imię...'
          id='name'
          name='name'
          type='name'
          onChange={formik.handleChange}
          value={formik.values.name}
        />
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor='contactData' className='p'>
          Numer telefonu / E-mail
        </label>
        <input
          placeholder='Podaj swój numer telefonu / adres e-mail...'
          id='contactData'
          name='contactData'
          type='contactData'
          onChange={formik.handleChange}
          value={formik.values.contactData}
        />
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor='message' className='p'>
          Wiadomość
        </label>
        <textarea
          placeholder='Powiedz nam czego potrzebujesz...'
          id='message'
          name='message'
          onChange={formik.handleChange}
          value={formik.values.message}
        />
      </div>

      <div className={styles.submitBtnContainer}>
        {!isSubmitted && (
          <div className={styles.submitBtnContainer}>
            <button type='submit' className={styles.submitBtn}>
              Wyślij
            </button>
          </div>
        )}
        {isSubmitted && <p>Wiadomość wysłano pomyślnie</p>}
      </div>
    </form>
  );
};

export default FormContact;
