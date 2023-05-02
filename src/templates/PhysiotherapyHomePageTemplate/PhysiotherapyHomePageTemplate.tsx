import classNames from 'classnames';
import Icon, { IconType } from 'components/Icon/Icon';
import Opinion from 'components/Opinion/Opinion';
import PhysiotherapyFacilityTile from 'components/PhysiotherapyFacilityTile/PhysiotherapyFacilityTile';
import Image from 'next/image';
import Link from 'next/link';
import getUUID from 'utility/getUUID';
import styles from './PhysiotherapyHomePageTemplate.module.scss';
import Gallery from 'components/Gallery/Gallery';

interface IPhysiotherapyHomePageTemplateProps {
  physiotherapyFacilityTilesConfig: {
    icon: JSX.Element;
    text: string;
  }[];
}

const PhysiotherapyHomePageTemplate = ({
  physiotherapyFacilityTilesConfig
}: IPhysiotherapyHomePageTemplateProps) => {
  return (
    <>
      <div
        className={classNames('container', styles.trainingHomePageContainer)}
      >
        <section className={styles.openingSection}>
          <div className={styles.textContainer}>
            <h1>
              Cześć, to właśnie <span className={styles.goldText}>tutaj</span>{' '}
              chciałeś trafić!
            </h1>
            <h3>
              W Alibi Zdrowie pracują doświadczeni fizjoterapeuci, którzy
              posiadają nie tylko wiedzę, ale i umiejętności praktyczne, by
              zapewnić Ci skuteczną pomoc.
              <br />
              <br />
              Zapraszamy!
            </h3>
          </div>
          <div className={styles.imagesContainer}>
            <figure className={styles.biggerHomePageImage}>
              <Image
                src='/physiotherapyHomePageImages/image1.png'
                alt='zdjęcie z treningu'
                fill
              />
            </figure>

            <div className={styles.smallerImages}>
              <figure className={styles.homePageImage}>
                <Image
                  src='/physiotherapyHomePageImages/image2.png'
                  alt='zdjęcie z treningu'
                  fill
                />
              </figure>

              <figure className={styles.homePageImage}>
                <Image
                  src='/physiotherapyHomePageImages/image3.png'
                  alt='zdjęcie z treningu'
                  fill
                />
              </figure>

              <figure className={styles.homePageImage}>
                <Image
                  src='/physiotherapyHomePageImages/image4.png'
                  alt='zdjęcie z treningu'
                  fill
                />
              </figure>
            </div>
          </div>
        </section>
      </div>
      <div className={styles.contactBelt}>
        <div className={classNames('container', styles.contactBeltContainer)}>
          <Link href='tel:728-974-997'>
            <h4>ZADZWOŃ: +48 728 974 997</h4>
          </Link>
          <div className={styles.verticalBelt}></div>
          <Link href='mailto:zdrowie@alibistudio.pl'>
            <h4>NAPISZ DO NAS: zdrowie@alibistudio.pl</h4>
          </Link>
        </div>
      </div>

      <div
        className={classNames('container', styles.trainingHomePageContainer)}
      >
        <section className={styles.faciliesSection}>
          <header>
            <h2>TO SIĘ POPRAWI W TWOIM ŻYCIU PO WIZYTACH U NAS</h2>
          </header>
          <main className={styles.facilityTilesContainer}>
            {physiotherapyFacilityTilesConfig.map((facilityTile) => (
              <PhysiotherapyFacilityTile
                key={getUUID()}
                text={facilityTile.text}
                icon={facilityTile.icon}
              />
            ))}
          </main>
        </section>

        <section className={styles.infoSection}>
          <header>
            <h2>NASZE ZABIEGI</h2>
          </header>
          <main className={styles.infoTileMain}>
            <div className={styles.infoTile}>
              <div className={styles.infoImageContainer}>
                <div className={styles.imgText}>
                  <h3>FIZJOTERAPIA</h3>
                </div>
                <figure className={styles.infoImage}>
                  <Image
                    src='/physiotherapyHomePageImages/image5.png'
                    alt='zdjęcie z treningu'
                    layout='fill'
                  />
                </figure>
              </div>

              <h4>
                W Alibi Zdrowie prowadzimy zabiegi fizjoterapii dla osób w
                każdym wieku. Nasz fizjoterapeuta przeprowadzi z Tobą
                szczegółowy wywiad oraz dobierze metody pracy dopasowane pod
                Twój problem tak, aby terapia przyniosła jak najlepsze efekty.
                <br /> <br />
                <ul className='h4'>
                  Zabiegi fizjoterapii pomogą:
                  <li>zwalczyć ból i stany zapalne,</li>
                  <li>wrócić do sprawności sprzed urazu,</li>
                  <li>usprawnić funkcjonowanie narządów ruchu,</li>
                  <li>
                    poprawić działanie układu krążenia, układu moczowego oraz
                    trawiennego.
                  </li>
                </ul>
              </h4>
            </div>

            <div className={styles.infoTile}>
              <div className={styles.infoImageContainer}>
                <div className={styles.imgText}>
                  <h3>FIZJOTERAPIA UROGINEKOLOGICZNA</h3>
                </div>
                <figure className={styles.infoImage}>
                  <Image
                    src='/physiotherapyHomePageImages/image6.png'
                    alt='zdjęcie z treningu'
                    layout='fill'
                  />
                </figure>
              </div>

              <h4>
                Fizjoterapia uroginekologiczna obejmuje profilaktykę,
                diagnostykę oraz leczenie dysfunkcji mięśni dna miednicy
                mniejszej i dolnych dróg moczowych. Terapia skupia się na w
                eliminacji problemów związanych z np. nietrzymaniem moczu,
                obniżeniem narządów rodnych, zaburzeniami proktologicznymi. Z
                fizjoterapii uroginekologicznej może skorzystać kobieta w każdym
                wieku.
              </h4>
            </div>

            <div className={styles.infoTile}>
              <div className={styles.infoImageContainer}>
                <div className={styles.imgText}>
                  <h3>
                    ODNOWA
                    <br /> BIOLOGICZNA
                  </h3>
                </div>
                <figure className={styles.infoImage}>
                  <Image
                    src='/physiotherapyHomePageImages/image7.png'
                    alt='zdjęcie z treningu'
                    layout='fill'
                  />
                </figure>
              </div>

              <h4>
                Nasze studio oferuje również zabiegi odnowy biologicznej.
                <br /> <br />
                Czujesz że potrzebujesz relaksu i rozluźnienia? Przyjdź do nas
                na masaż gorącymi kamieniami czy bańką chińską.
              </h4>
            </div>
          </main>
        </section>

        <Gallery
          bigImages={[
            {
              src: '/physioHomepageGallerySectionImages/image1.png',
              alt: 'zdjęcie z treningu'
            },
            {
              src: '/physioHomepageGallerySectionImages/image4.png',
              alt: 'zdjęcie z treningu'
            }
          ]}
          smallImages={[
            {
              src: '/physioHomepageGallerySectionImages/image2.png',
              alt: 'zdjęcie z treningu'
            },
            {
              src: '/physioHomepageGallerySectionImages/image3.png',
              alt: 'zdjęcie z treningu'
            },
            {
              src: '/physioHomepageGallerySectionImages/image5.png',
              alt: 'zdjęcie z treningu'
            },
            {
              src: '/physioHomepageGallerySectionImages/image6.png',
              alt: 'zdjęcie z treningu'
            }
          ]}
        />

        <section className={styles.opinionsSection}>
          <header className={styles.opinionsHeader}>
            <h2>
              OPINIE NASZYCH PODOPIECZNYCH
              <div className={styles.arrows}>
                <div className={styles.icon}>
                  <Icon icon={IconType.GoldArrowLeft} />
                </div>
                <div className={styles.icon}>
                  <Icon icon={IconType.GoldArrowRight} />
                </div>
              </div>
            </h2>
          </header>
          <main>
            <Opinion
              opinion='Miejsce dla ciała i duszy! Cudowni ludzie, profesjonalni trenerzy, gorąco polecam!'
              author='Patrycja Kucharczyk'
              role='Podopieczna w Alibi Studio'
            />
          </main>
        </section>
      </div>
    </>
  );
};

export default PhysiotherapyHomePageTemplate;
