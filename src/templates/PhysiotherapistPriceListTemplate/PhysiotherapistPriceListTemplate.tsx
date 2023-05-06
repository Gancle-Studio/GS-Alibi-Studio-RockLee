import classNames from 'classnames';
import Image from 'next/image';
import styles from './PhysiotherapistPriceListTemplate.module.scss';

const PhysiotherapistPriceListTemplate = () => {
  return (
    <>
      <section className={styles.landingSection}>
        <figure className={styles.landingImage}>
          <Image
            src={'/pricePhysioLandingImage.png'}
            alt='zdjęcie trenera personalnego'
            layout='fill'
          />
          <div></div>
        </figure>
        <div className={classNames('container', styles.textContainer)}>
          <h1>Wybierz coś dla siebie</h1>
          <p>
            Czas trwania treningu to ok 60 min, warto jednak zarezerwować sobie
            trochę więcej czasu. Pakiet ważny jest 6 tygodni. Oferta family jest
            do wykorzystania przez wszystkich członków rodziny.
          </p>
        </div>
      </section>
      <section className={classNames('container', styles.pageContet)}>
        <h2>Fizjoterapia</h2>
        <div className={styles.belt}></div>

        <ul className={styles.personalTrainingsPriceList}>
          <li className='h4'>
            Terapia manualna (jednorazowa wizyta)
            <div className={styles.dots}>
              ......................................................................................................................................................................................................
            </div>
            <span>150 zł</span>
          </li>
          <li className='h4'>
            Pakiet 8 wizyt
            <div className={styles.dots}>
              ......................................................................................................................................................................................................
            </div>
            <span>1120 zł (140 zł / trening)</span>
          </li>
          <li className='h4'>
            Trening medyczny (60 min.)
            <div className={styles.dots}>
              ......................................................................................................................................................................................................
            </div>
            <span>140 zł</span>
          </li>
        </ul>
        <h2>Fizjoterapia uroginekologiczna</h2>
        <div className={styles.belt}></div>
        <ul className={styles.personalTrainingsPriceList}>
          <li className='h4'>
            Pierwsza wizyta (60 min.)
            <div className={styles.dots}>
              ......................................................................................................................................................................................................
            </div>
            <span>160 zł</span>
          </li>

          <li className='h4'>
            Kolejna wizyta (50 min.)
            <div className={styles.dots}>
              ......................................................................................................................................................................................................
            </div>
            <span>150 zł</span>
          </li>
        </ul>
        <h2>Odnowa biologiczna</h2>
        <div className={styles.belt}></div>
        <ul className={styles.personalTrainingsPriceList}>
          <li className='h4'>
            Masaż relaksacyjny całego ciała (50 min.)
            <div className={styles.dots}>
              ......................................................................................................................................................................................................
            </div>
            <span>130 zł</span>
          </li>

          <li className='h4'>
            Masaż częściowy (30 min.)
            <div className={styles.dots}>
              ......................................................................................................................................................................................................
            </div>
            <span>90 zł</span>
          </li>

          <li className='h4'>
            Masaż kamieniami (45 min.)
            <div className={styles.dots}>
              ......................................................................................................................................................................................................
            </div>
            <span>150 zł</span>
          </li>

          <li className='h4'>
            Bańki chińskie z masażem antycelulitowym (45 min.)
            <div className={styles.dots}>
              ......................................................................................................................................................................................................
            </div>
            <span>100 zł</span>
          </li>
        </ul>
      </section>
    </>
  );
};

export default PhysiotherapistPriceListTemplate;
