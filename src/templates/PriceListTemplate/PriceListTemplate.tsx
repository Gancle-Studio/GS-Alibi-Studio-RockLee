import classNames from 'classnames';
import Image from 'next/image';
import styles from './PriceListTemplate.module.scss';

const PriceListTemplate = () => {
  return (
    <>
      <section className={styles.landingSection}>
        <figure className={styles.landingImage}>
          <Image
            src={'/priceLandingImage.png'}
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
        <h2>Treningi personalne</h2>
        <div className={styles.belt}></div>
        <p className='small'>
          Chcemy abyś osiągnął z nami swój cel a regularność ćwiczeń stanowi
          połowę sukcesu.{' '}
        </p>
        <ul className={styles.personalTrainingsPriceList}>
          <li className='h4'>
            Pojedynczy trening/ konsultacja (60 min)
            <div className={styles.dots}>
              ......................................................................................................................................................................................................
            </div>
            <span>160 zł</span>
          </li>
          <li className='h4'>
            Trening dla dwóch osób (60 min)
            <div className={styles.dots}>
              ......................................................................................................................................................................................................
            </div>
            <span>170 zł</span>
          </li>
          <li className='h4'>
            Pakiet 4 treningów
            <div className={styles.dots}>
              ......................................................................................................................................................................................................
            </div>
            <span>600 zł (150 zł / trening)</span>
          </li>
          <li className='h4'>
            Pakiet 8 treningów
            <div className={styles.dots}>
              ......................................................................................................................................................................................................
            </div>
            <span>1120 zł (140 zł / trening)</span>
          </li>
          <li className='h4'>
            Pakiet 12 treningów
            <div className={styles.dots}>
              ......................................................................................................................................................................................................
            </div>
            <span>1560 zł (130 zł / trening)</span>
          </li>
          <li className='h4'>
            Pakiet family (16 treningów)
            <div className={styles.dots}>
              ......................................................................................................................................................................................................
            </div>
            <span>1920 zł (120 zł / trening)</span>
          </li>
        </ul>
        <h2>Trening medyczny</h2>
        <div className={styles.belt}></div>
        <p className='small'>
          Wylecz swoje kontuzje z naszymi wykwalifikowanymi trenerami. Treningów
          medycznych nie można łączyć w pakiety.
        </p>
        <ul className={styles.personalTrainingsPriceList}>
          <li className='h4'>
            Pojedynczy trening
            <div className={styles.dots}>
              ......................................................................................................................................................................................................
            </div>
            <span>140 zł</span>
          </li>
        </ul>
        <h2>Pakiet sport - przygotowanie motoryczne</h2>
        <div className={styles.belt}></div>
        <p className='small'>
          Przygotowanie do zawodów/ egzaminów - współpraca w zakresie
          przygotowania motorycznego, fizjoterapii, diety.
        </p>
        <h4 className={styles.offerForSportsmen}>
          OFERTA TYLKO DLA PROFESJONALNYCH SPORTOWCÓW 1M, 3M, 6 MC.
          <br /> CENA USTALANA INDYWIDUALNIE
        </h4>
      </section>
    </>
  );
};

export default PriceListTemplate;
