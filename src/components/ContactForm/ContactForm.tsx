import Icon, { IconType } from 'components/Icon/Icon';
import styles from './ContactForm.module.scss';
import FormContact from './Form';

const ContactForm = () => {
  return (
    <section className={styles.ContactForm}>
      <div className='container'>
        <header>
          <h2>SKONTAKTUJ SIĘ Z NAMI</h2>
        </header>
        <div className={styles.contactFormContainer}>
          <div className={styles.contacts}>
            <div className={styles.contactFiled}>
              <div className={styles.icon}>
                <Icon icon={IconType.Phone} />
              </div>
              <div className={styles.contactText}>
                <h4>ZADZWOŃ</h4>
                <p>+48 728 974 997</p>
              </div>
            </div>

            <div className={styles.contactFiled}>
              <div className={styles.icon}>
                <Icon icon={IconType.Mail} />
              </div>
              <div className={styles.contactText}>
                <h4>NAPISZ</h4>
                <p>alibi@alibistudio.pl</p>
              </div>
            </div>

            <div className={styles.contactFiled}>
              <div className={styles.icon}>
                <Icon icon={IconType.Address} />
              </div>
              <div className={styles.contactText}>
                <h4>NASZ ADRES</h4>
                <p>
                  ul. Radomska 1
                  <br />
                  40-757 Katowice
                </p>
              </div>
            </div>

            <div className={styles.contactFiled}>
              <div className={styles.icon}>
                <Icon icon={IconType.Payment} />
              </div>
              <div className={styles.contactText}>
                <h4>NUMER KONTA</h4>
                <p>10 1140 2004 0000 3602 8029 2544</p>
              </div>
            </div>
          </div>
          <FormContact />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
