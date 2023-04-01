import classNames from 'classnames';
import Image from 'next/image';
import styles from './PhysiotherapistPriceListTemplate.module.scss';

const PhysiotherapistPriceListTemplate = () => {
  return (
    <>
      <section className={styles.landingSection}>
        <figure className={styles.landingImage}>
          <Image
            src={'/aboutPageLandingImage.png'}
            alt='zdjęcie trenera personalnego'
            layout='fill'
          />
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
            Terapia manualna (50 min.)
            .................................................................
            <span>120 zł</span>
          </li>
          <li className='h4'>
            Trening medyczny (60 min.)
            ..................................................................
            <span>120 zł</span>
          </li>
        </ul>
        <h2>TFizjoterapia uroginekologiczna</h2>
        <div className={styles.belt}></div>
        <ul className={styles.personalTrainingsPriceList}>
          <li className='h4'>
            Pierwsza wizyta (60 min.)
            .......................................................................
            <span>160 zł</span>
          </li>

          <li className='h4'>
            Kolejna wizyta (50 min.)
            ..........................................................................
            <span>150 zł</span>
          </li>
        </ul>
        <h2>Odnowa biologiczna</h2>
        <div className={styles.belt}></div>
        <ul className={styles.personalTrainingsPriceList}>
          <li className='h4'>
            Masaż relaksacyjny całego ciała (45 min.)
            .....................................
            <span>120 zł</span>
          </li>

          <li className='h4'>
            Masaż częściowy (30 min.)
            .....................................................................
            <span>70 zł</span>
          </li>

          <li className='h4'>
            Masaż kamieniami (50 min.)
            .................................................................
            <span>150 zł</span>
          </li>

          <li className='h4'>
            Bańki chińskie z masażem antycelulitowym (45 min.) .................
            <span>100 zł</span>
          </li>
        </ul>
      </section>
    </>
  );
};

export default PhysiotherapistPriceListTemplate;