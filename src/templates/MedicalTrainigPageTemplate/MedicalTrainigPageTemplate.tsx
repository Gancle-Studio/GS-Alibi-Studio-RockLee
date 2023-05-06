import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import styles from './MedicalTrainigPageTemplate.module.scss';
import commonStyles from '../trainingPage.module.scss';
import Gallery from 'components/Gallery/Gallery';

const MedicalTrainigPageTemplate = () => {
  return (
    <>
      <section className={styles.landingSection}>
        <figure className={styles.landingImage}>
          <Image
            src={'/trainingsLanding.png'}
            alt='zdjęcie trenera personalnego'
            layout='fill'
          />
        </figure>
        <div className={classNames('container', styles.textContainer)}>
          <h1>Zobacz co dla Ciebie przygotowaliśmy</h1>
        </div>
      </section>
      <section className={classNames('container', styles.pageContet)}>
        <div className={styles.chooseBelt}>
          <h2>
            <Link href='/nasze-treningi/trening-personalny'>
              Trening personalny
            </Link>
          </h2>
          <div className={styles.belt}></div>
          <h2 className={styles.activeSection}>
            <Link href='/nasze-treningi/trening-medyczny'>
              Trening medyczny
            </Link>
          </h2>
          <div className={styles.belt}></div>
          <h2>
            <Link href='/nasze-treningi/przygotowanie-motoryczne'>
              Przygotowanie motoryczne
            </Link>
          </h2>
        </div>

        <main className={commonStyles.medicalTrainingPageContetContainer}>
          <h3>Czy dam sobie radę?</h3>
          <div className={commonStyles.belt}></div>
          <div className={commonStyles.textAndImages}>
            <h4 className={commonStyles.text}>
              Jeśli tylko nie masz przeciwwskazań od lekarza to TAK, dasz radę!
              <br />
              <br />
              Pamiętaj, że każdy kiedyś był na początku tej drogi. W razie
              problemów zdrowotnych dodatkowo zawsze możesz liczyć na pomoc
              fizjoterapeuty, którego gabinet również znajduje się w naszym
              studio.
              <br />
              <br />
              Prowadzimy też przygotowanie motoryczne w sportach walki dla
              sportowców amatorskich i zawodowych chcących poprawić swoje
              wyniki.
              <br />
              <br />
              W razie kontuzji treningi łączymy z pracą u fizjoterapeuty.
              <br />
              <br />
              Więcej informacji na ten temat znajdziesz w zakładce przygotowanie
              motoryczne.
            </h4>
            <div className={commonStyles.images}>
              <figure className={commonStyles.img}>
                <Image
                  src={'/trainings/medical/image1.png'}
                  alt='zdjęcie trenera personalnego'
                  layout='fill'
                />
              </figure>
              <div className={commonStyles.smallImages}>
                <figure className={commonStyles.img}>
                  <Image
                    src={'/trainings/medical/image2.png'}
                    alt='zdjęcie trenera personalnego'
                    layout='fill'
                  />
                </figure>
                <figure className={commonStyles.img}>
                  <Image
                    src={'/trainings/medical/image3.png'}
                    alt='zdjęcie trenera personalnego'
                    layout='fill'
                  />
                </figure>
                <figure className={commonStyles.img}>
                  <Image
                    src={'/trainings/medical/image4.png'}
                    alt='zdjęcie trenera personalnego'
                    layout='fill'
                  />
                </figure>
              </div>
            </div>
          </div>

          <section className={styles.galleries}>
            <Gallery
              bigImages={[
                {
                  src: '/trainings/medical/image5.png',
                  alt: 'zdjęcie z treningu'
                },
                {
                  src: '/trainings/medical/image6.png',
                  alt: 'zdjęcie z treningu'
                }
              ]}
              smallImages={[
                {
                  src: '/trainings/medical/image7.png',
                  alt: 'zdjęcie z treningu'
                },
                {
                  src: '/trainings/medical/image8.png',
                  alt: 'zdjęcie z treningu'
                },
                {
                  src: '/trainings/medical/image9.png',
                  alt: 'zdjęcie z treningu'
                },
                {
                  src: '/trainings/medical/image10.png',
                  alt: 'zdjęcie z treningu'
                }
              ]}
            />
          </section>

          <div
            className={classNames(commonStyles.textAndImages, styles.elastic)}
          >
            <h3>Elastyczne podejście</h3>
            <div className={commonStyles.belt}></div>
            <div className={commonStyles.textAndImages}>
              <h4 className={commonStyles.text}>
                Głównym założeniem tej formy treningu jest zwiększenie kontroli
                ciała poprzez ćwiczenia angażujące całe łańcuchy mięśniowe, a
                nie tylko wyizolowane mięśnie.
                <br />
                <br />
                Podstawą treningu medycznego są właściwe proporcje między
                mobilnością, a koordynacją, która jest niezbędna nie tylko do
                przywrócenia pełnej sprawności, ale także zmniejszenia ryzyka
                późniejszej kontuzji.
                <br />
                <br />
                <ul>
                  Celem treningu medycznego jest :
                  <li>
                    przygotowanie organizmu do powrotu do czynności dnia <br />
                    codziennego (np. po kontuzji),
                  </li>
                  <li>
                    przygotowanie organizmu do powrotu do uprawianej przed
                    kontuzją aktywności sportowej,
                  </li>
                  <li>zwiększenie efektywności treningu sportowego,</li>
                  <li>
                    poprawa techniki potrzebnej do uprawiania ulubionej
                    dyscypliny.
                  </li>
                </ul>
              </h4>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default MedicalTrainigPageTemplate;
