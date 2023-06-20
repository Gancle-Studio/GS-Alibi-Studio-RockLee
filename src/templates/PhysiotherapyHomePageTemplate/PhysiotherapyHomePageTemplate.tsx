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
                W Alibi Zdrowie specjalizujemy się w kompleksowej fizjoterapii,
                która jest dostępna dla osób w każdym wieku. Nasz doświadczony
                fizjoterapeuta zadba o Ciebie, przeprowadzając szczegółowy
                wywiad i dobierając odpowiednie metody terapeutyczne, które będą
                dopasowane do Twojego konkretnego problemu. Naszym celem jest
                zapewnienie Ci jak najlepszych efektów terapii.
                <br /> <br />
                Zabiegi fizjoterapii, które oferujemy, mają na celu zwalczanie
                bólu i stanów zapalnych, przywracanie sprawności po urazach,
                poprawę funkcjonowania narządów ruchu oraz wspomaganie układu
                krążenia, układu moczowego i trawiennego. Nasz wykwalifikowany
                fizjoterapeuta jest zaangażowany w Twoje zdrowie i pomoże Ci
                odzyskać pełną sprawność i dobre samopoczucie.
                <br /> <br />
                Przyjdź do Alibi Zdrowie i zaufaj naszemu profesjonalizmowi. Daj
                nam szansę pomóc Ci w poprawie Twojego zdrowia i jakości życia.
                {/* W Alibi Zdrowie prowadzimy zabiegi fizjoterapii dla osób w
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
                </ul> */}
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
                Oferujemy profesjonalną fizjoterapię uroginekologiczną,
                skupiającą się na profilaktyce, diagnostyce i kompleksowym
                leczeniu dysfunkcji mięśni dna miednicy oraz dolnych dróg
                moczowych. Nasz wykwalifikowany zespół terapeutów ma głęboką
                wiedzę i doświadczenie w obszarze kobiecych problemów
                zdrowotnych. Bez względu na wiek, nasze usługi są dostępne dla
                wszystkich kobiet, które borykają się z nietrzymaniem moczu,
                obniżeniem narządów rodnych, zaburzeniami proktologicznymi i
                innymi trudnościami związanymi z układem miednicy.
                <br /> <br />
                Opieramy się na indywidualnym podejściu do każdej pacjentki.
                Przeprowadzamy dokładny wywiad i diagnozę, aby zrozumieć Twoje
                potrzeby i cele. Następnie opracowujemy spersonalizowany plan
                terapeutyczny, wykorzystując różnorodne metody i techniki, które
                pomogą Ci poprawić kondycję mięśni dna miednicy, zwiększyć
                kontrolę nad nietrzymaniem moczu, redukować ból i przywrócić
                pełną funkcjonalność. Naszym celem jest zapewnienie Ci komfortu,
                wsparcia i skutecznej opieki w procesie rehabilitacji i poprawy
                jakości życia.
                {/* Fizjoterapia uroginekologiczna obejmuje profilaktykę,
                diagnostykę oraz leczenie dysfunkcji mięśni dna miednicy
                mniejszej i dolnych dróg moczowych. Terapia skupia się na w
                eliminacji problemów związanych z np. nietrzymaniem moczu,
                obniżeniem narządów rodnych, zaburzeniami proktologicznymi. Z
                fizjoterapii uroginekologicznej może skorzystać kobieta w każdym
                wieku. */}
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
                W naszej ofercie "Odnowy biologicznej" możesz skorzystać z
                relaksujących masażów, które pozwolą Ci odzyskać wewnętrzną
                harmonię i głęboki relaks. Nasi masażyści specjalizują się w
                masażu relaksacyjnym całego ciała, który przywróci Ci równowagę
                i uwolni od napięcia. Poprzez precyzyjne i delikatne techniki,
                zapewniamy Ci chwilę błogiego odprężenia i regeneracji.
                <br /> <br />
                Dodatkowo, oferujemy masaż częściowy, skupiający się na
                konkretnych obszarach ciała, które wymagają uwagi i złagodzenia
                napięcia. Nasz wykwalifikowany personel zadba o Twój komfort i
                zastosuje odpowiednie techniki, aby odprężyć i zrelaksować Twoje
                mięśnie. Ponadto, oferujemy masaż kamieniami, który wykorzystuje
                ciepłe kamienie do głębszego rozluźnienia mięśni i stymulacji
                krążenia. To wyjątkowe doświadczenie przyniesie Ci zarówno
                relaks jak i korzyści terapeutyczne dla całego ciała.
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
