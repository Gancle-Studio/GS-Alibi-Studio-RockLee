import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import styles from './PersonalTrainingPageTemplate.module.scss';
import commonStyles from '../trainingPage.module.scss';

const PersonalTrainingPageTemplate = () => {
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
          <h2 className={styles.activeSection}>
            <Link href='/nasze-treningi/trening-personalny'>
              Trening personalny
            </Link>
          </h2>
          <div className={styles.belt}></div>
          <h2>
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
        <main className={commonStyles.personalTrainingPageContetContainer}>
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
            {/* <div className={commonStyles.images}>
              <figure className={commonStyles.img}>
                <Image
                  src={'/aboutPageLandingImage.png'}
                  alt='zdjęcie trenera personalnego'
                  layout='fill'
                />
              </figure>
              <div className={commonStyles.smallImages}>
                <figure className={commonStyles.img}>
                  <Image
                    src={'/aboutPageLandingImage.png'}
                    alt='zdjęcie trenera personalnego'
                    layout='fill'
                  />
                </figure>
                <figure className={commonStyles.img}>
                  <Image
                    src={'/aboutPageLandingImage.png'}
                    alt='zdjęcie trenera personalnego'
                    layout='fill'
                  />
                </figure>
                <figure className={commonStyles.img}>
                  <Image
                    src={'/aboutPageLandingImage.png'}
                    alt='zdjęcie trenera personalnego'
                    layout='fill'
                  />
                </figure>
              </div>
            </div> */}
          </div>

          {/* <div className={commonStyles.gallery}>
            <figure className={commonStyles.verticalImg}>
              <Image
                src={'/aboutPageLandingImage.png'}
                alt='zdjęcie trenera personalnego'
                layout='fill'
              />
            </figure>
            <figure className={commonStyles.img}>
              <Image
                src={'/aboutPageLandingImage.png'}
                alt='zdjęcie trenera personalnego'
                layout='fill'
              />
            </figure>
            <figure className={commonStyles.img}>
              <Image
                src={'/aboutPageLandingImage.png'}
                alt='zdjęcie trenera personalnego'
                layout='fill'
              />
            </figure>
            <figure className={commonStyles.verticalImg}>
              <Image
                src={'/aboutPageLandingImage.png'}
                alt='zdjęcie trenera personalnego'
                layout='fill'
              />
            </figure>
            <figure className={commonStyles.img}>
              <Image
                src={'/aboutPageLandingImage.png'}
                alt='zdjęcie trenera personalnego'
                layout='fill'
              />
            </figure>
            <figure className={commonStyles.img}>
              <Image
                src={'/aboutPageLandingImage.png'}
                alt='zdjęcie trenera personalnego'
                layout='fill'
              />
            </figure>

            <figure className={commonStyles.verticalImg}>
              <Image
                src={'/aboutPageLandingImage.png'}
                alt='zdjęcie trenera personalnego'
                layout='fill'
              />
            </figure>
            <figure className={commonStyles.img}>
              <Image
                src={'/aboutPageLandingImage.png'}
                alt='zdjęcie trenera personalnego'
                layout='fill'
              />
            </figure>
            <figure className={commonStyles.img}>
              <Image
                src={'/aboutPageLandingImage.png'}
                alt='zdjęcie trenera personalnego'
                layout='fill'
              />
            </figure>
            <figure className={commonStyles.verticalImg}>
              <Image
                src={'/aboutPageLandingImage.png'}
                alt='zdjęcie trenera personalnego'
                layout='fill'
              />
            </figure>
            <figure className={commonStyles.img}>
              <Image
                src={'/aboutPageLandingImage.png'}
                alt='zdjęcie trenera personalnego'
                layout='fill'
              />
            </figure>
            <figure className={commonStyles.img}>
              <Image
                src={'/aboutPageLandingImage.png'}
                alt='zdjęcie trenera personalnego'
                layout='fill'
              />
            </figure>
          </div> */}
        </main>
      </section>
    </>
  );
};

export default PersonalTrainingPageTemplate;
