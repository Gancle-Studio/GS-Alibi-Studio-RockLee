import classNames from 'classnames';
import ArticleTile from 'components/ArticleTile/ArticleTile';
import FacilityTile from 'components/FacilityTile/FacilityTile';
import Opinion from 'components/Opinion/Opinion';
import Image from 'next/image';
import styles from './TrainingHomePageTemplate.module.scss';
import Icon, { IconType } from 'components/Icon/Icon';
import getUUID from 'utility/getUUID';
import { useContext } from 'react';
import PageModeContext, { PageModeContextType } from 'contexts/PageModeContext';
import Link from 'next/link';
import Gallery from 'components/Gallery/Gallery';

interface ITrainingHomePageTemplateProps {
  facilityTilesConfig: {
    icon: JSX.Element;
    title: string;
    text: JSX.Element;
    link?: boolean;
  }[];
}

const TrainingHomePageTemplate = ({
  facilityTilesConfig
}: ITrainingHomePageTemplateProps) => {
  const { mode } = useContext(PageModeContext) as PageModeContextType;

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
              W Alibi Studio zadbamy o{' '}
              <span className={styles.goldText}>Twoje zdrowie</span>. U nas
              potrenujesz 1:1 z trenerem personalnym, przygotujesz się do{' '}
              <span className={styles.goldText}>zawodów</span> (sporty walki,
              biegi i inne sporty), poprawisz{' '}
              <span className={styles.goldText}>kondycję i siłę</span>, a przede
              wszystkim{' '}
              <span className={styles.goldText}>zadbasz o swoje ciało</span> i
              będziesz się <span className={styles.goldText}>dobrze bawił</span>
              .
            </h3>
          </div>
          <div className={styles.imagesContainer}>
            <figure className={styles.biggerHomePageImage}>
              <Image
                src='/trainingHomePageImages/image1.png'
                alt='zdjęcie z treningu'
                layout='fill'
              />
            </figure>

            <div className={styles.smallerImages}>
              <figure className={styles.homePageImage}>
                <Image
                  src='/trainingHomePageImages/image2.png'
                  alt='zdjęcie z treningu'
                  layout='fill'
                />
              </figure>

              <figure className={styles.homePageImage}>
                <Image
                  src='/trainingHomePageImages/image3.png'
                  alt='zdjęcie z treningu'
                  layout='fill'
                />
              </figure>

              <figure className={styles.homePageImage}>
                <Image
                  src='/trainingHomePageImages/image4.png'
                  alt='zdjęcie z treningu'
                  layout='fill'
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
          <Link href='mailto:alibi@alibistudio.pl'>
            <h4>NAPISZ DO NAS: alibi@alibistudio.pl</h4>
          </Link>
        </div>
      </div>

      <div
        className={classNames('container', styles.trainingHomePageContainer)}
      >
        <section className={styles.faciliesSection}>
          <header>
            <h2>DOBRA ATMOSFERA JEST DLA NAS NAJWAŻNIEJSZA...</h2>
          </header>
          <main className={styles.facilityTilesContainer}>
            {facilityTilesConfig.map((facilityTile) => (
              <FacilityTile
                key={getUUID()}
                icon={facilityTile.icon}
                title={facilityTile.title}
                text={facilityTile.text}
                link={false || facilityTile.link}
              />
            ))}
          </main>
        </section>

        <section className={styles.infoSection}>
          <header>
            <h2>NASZE STUDIO NIE JEST TYLKO SIŁOWNIĄ ...</h2>
          </header>
          <main className={styles.infoTileMain}>
            <div className={styles.infoTile}>
              <h4>
                <span className={styles.goldText}>
                  JEST TO DOM, W KTÓRYM KAŻDY Z WAS JEST MILE WIDZIANY
                  (ZWŁASZCZA NA TRENINGU ;) )
                </span>
                <br />
                <br />W Alibi Studio nie obowiązują sztywne godziny otwarcia,
                zawsze umawiamy{' '}
                <span className={styles.goldText}>
                  indywidualnie godziny treningów
                </span>{' '}
                tak aby dostosować je do{' '}
                <span className={styles.goldText}>Twoich potrzeb</span> i{' '}
                <span className={styles.goldText}>możliwości</span>. Kameralna
                atmosfera oraz industrialny wystrój sprawią, że poczujesz się
                tutaj <span className={styles.goldText}>jak w domu</span>.
              </h4>
              <figure className={styles.infoImage}>
                <Image
                  src='/trainingHomePageImages/image5.png'
                  alt='zdjęcie z treningu'
                  layout='fill'
                  style={{ objectPosition: '0 -10px' }}
                />
              </figure>
            </div>

            <div className={styles.infoTile}>
              <figure className={styles.infoImage}>
                <Image
                  src='/trainingHomePageImages/image6.png'
                  alt='zdjęcie z treningu'
                  layout='fill'
                />
              </figure>
              <h4>
                Studio składa się z dwóch pomieszczeń. W jednym znajduje się
                sprzęt do{' '}
                <span className={styles.goldText}>treingu z obciążeniem</span>,
                w drugim natomiast świetnie wyposażona{' '}
                <span className={styles.goldText}>strefa cardio</span> z
                wielofunkcyjną bramą do ćwiczeń. Dodatkowo w okresie letnim
                prowadzimy również{' '}
                <span className={styles.goldText}>
                  treningi na świeżym powietrzu
                </span>{' '}
                w naszym ogródku. Oprócz stref przeznaczonych do treningu i
                fizjoterapii, znajduje się tu również{' '}
                <span className={styles.goldText}>kącik relaksu</span>, w którym
                możesz <span className={styles.goldText}>napić się kawy</span> i{' '}
                <span className={styles.goldText}>
                  omówić z trenerem swoje postępy
                </span>{' '}
                i <span className={styles.goldText}>cele treningowe</span> lub
                odpocząć po treningu przy koktajlu białkowym.
              </h4>
            </div>
          </main>
        </section>
        <Gallery
          bigImages={[
            {
              src: '/trainingsHomepageGallerySectionImages/image1.png',
              alt: 'zdjęcie z treningu'
            },
            {
              src: '/trainingsHomepageGallerySectionImages/image4.png',
              alt: 'zdjęcie z treningu'
            }
          ]}
          smallImages={[
            {
              src: '/trainingsHomepageGallerySectionImages/image2.png',
              alt: 'zdjęcie z treningu'
            },
            {
              src: '/trainingsHomepageGallerySectionImages/image3.png',
              alt: 'zdjęcie z treningu'
            },
            {
              src: '/trainingsHomepageGallerySectionImages/image5.png',
              alt: 'zdjęcie z treningu'
            },
            {
              src: '/trainingsHomepageGallerySectionImages/image6.png',
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

export default TrainingHomePageTemplate;
