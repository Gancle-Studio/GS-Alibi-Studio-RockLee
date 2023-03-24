import styles from './ContactForm.module.scss'
import FormContact from './Form';

const ContactForm = () => {
   return <section className={styles.ContactForm}>
    <div className="container">
      <header>
        <h2>SKONTAKTUJ SIĘ Z NAMI</h2>
      </header>
      <div className={styles.contactFormContainer}>
        <div className={styles.contacts}></div>
        <FormContact />
      </div>
    </div>
   </section>;
};

export default ContactForm;