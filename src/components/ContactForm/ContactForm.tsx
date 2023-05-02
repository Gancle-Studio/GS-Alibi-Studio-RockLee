import Icon, { IconType } from 'components/Icon/Icon';
import Link from 'next/link';
import { useState } from 'react';
import styles from './ContactForm.module.scss';
import FormContact from './Form';
import PageModeContext, { PageModeContextType } from 'contexts/PageModeContext';
import { useContext } from 'react';
import classNames from 'classnames';

const ContactForm = () => {
  const [isTextDisplayed, setIsTextDisplayed] = useState(false);
  const { mode } = useContext(PageModeContext) as PageModeContextType;

  return (
    <>
      <section
        className={classNames(
          styles.ContactForm,
          mode === 'PHYSIO' && styles.physioBgColor
        )}
        id='contact'
      >
        <div className='container'>
          <header>
            <h2>SKONTAKTUJ SIĘ Z NAMI</h2>
          </header>
          <div className={styles.contactFormContainer}>
            <div className={styles.contacts}>
              <Link href='tel:728-974-997'>
                <div className={styles.contactFiled}>
                  <div className={styles.icon}>
                    <Icon icon={IconType.Phone} />
                  </div>
                  <div className={styles.contactText}>
                    <h4>ZADZWOŃ</h4>
                    <p>+48 728 974 997</p>
                  </div>
                </div>
              </Link>

              <Link
                href={
                  mode === 'TRAININGS'
                    ? 'mailto:alibi@alibistudio.pl'
                    : 'mailto:zdrowie@alibistudio.pl'
                }
              >
                <div className={styles.contactFiled}>
                  <div className={styles.icon}>
                    <Icon icon={IconType.Mail} />
                  </div>
                  <div className={styles.contactText}>
                    <h4>NAPISZ</h4>
                    <p>
                      {mode === 'TRAININGS'
                        ? 'alibi@alibistudio.pl'
                        : 'zdrowie@alibistudio.pl'}
                    </p>
                  </div>
                </div>
              </Link>

              <Link
                target='_blank'
                href='https://www.google.pl/maps/place/Radomska+1,+40-757+Katowice/@50.2345584,18.9537074,16.89z/data=!4m6!3m5!1s0x4716ce9d8172d7a7:0xc9bc6f07b3f18f82!8m2!3d50.2346124!4d18.9556634!16s%2Fg%2F11c4p4k9mx'
              >
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
              </Link>

              <div
                className={styles.contactFiled}
                onClick={() => {
                  navigator.clipboard.writeText(
                    '10 1140 2004 0000 3602 8029 2544'
                  );
                }}
              >
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
      {/* <p
        onClick={() => {
          setIsTextDisplayed;
        }}
        className={styles.displayText}
      >
        Skopiowano
      </p> */}
    </>
  );
};

export default ContactForm;
