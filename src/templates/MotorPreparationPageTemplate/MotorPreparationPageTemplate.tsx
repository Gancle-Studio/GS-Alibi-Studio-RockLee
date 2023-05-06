import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import styles from './MotorPreparationPageTemplate.module.scss';
import commonStyles from '../trainingPage.module.scss';
import Gallery from 'components/Gallery/Gallery';

const MotorPreparationPageTemplate = () => {
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
          <h2>
            <Link href='/nasze-treningi/trening-medyczny'>
              Trening medyczny
            </Link>
          </h2>
          <div className={styles.belt}></div>
          <h2 className={styles.activeSection}>
            <Link href='/nasze-treningi/przygotowanie-motoryczne'>
              Przygotowanie motoryczne
            </Link>
          </h2>
        </div>

        <main>
          <main className={commonStyles.personalTrainingPageContetContainer}>
            <h3>Czy dam sobie radę?</h3>
            <div className={commonStyles.belt}></div>
            <div className={commonStyles.textAndImages}>
              <h4 className={commonStyles.text}>
                Jeśli tylko nie masz przeciwwskazań od lekarza to TAK, dasz
                radę!
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
                Więcej informacji na ten temat znajdziesz w zakładce
                przygotowanie motoryczne.
              </h4>
              <div className={styles.textAddition}>
                <h3>Panuj nad swoim ciałem</h3>
                <h3 className={styles.marginBottom50}>
                  Popraw siłę, szybkość i wytrzymałość
                </h3>
                <div className={commonStyles.images}>
                  <figure className={commonStyles.img}>
                    <Image
                      src={'/trainings/motor/image1.png'}
                      alt='zdjęcie trenera personalnego'
                      layout='fill'
                    />
                  </figure>
                  <div className={commonStyles.smallImages}>
                    <figure className={commonStyles.img}>
                      <Image
                        src={'/trainings/motor/image2.png'}
                        alt='zdjęcie trenera personalnego'
                        layout='fill'
                      />
                    </figure>
                    <figure className={commonStyles.img}>
                      <Image
                        src={'/trainings/motor/image3.png'}
                        alt='zdjęcie trenera personalnego'
                        layout='fill'
                      />
                    </figure>
                    <figure className={commonStyles.img}>
                      <Image
                        src={'/trainings/motor/image4.png'}
                        alt='zdjęcie trenera personalnego'
                        layout='fill'
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>

            <section className={styles.galleries}>
              <Gallery
                bigImages={[
                  {
                    src: '/trainings/motor/image5.png',
                    alt: 'zdjęcie z treningu'
                  },
                  {
                    src: '/trainings/motor/image6.png',
                    alt: 'zdjęcie z treningu'
                  }
                ]}
                smallImages={[
                  {
                    src: '/trainings/motor/image9.png',
                    alt: 'zdjęcie z treningu'
                  },
                  {
                    src: '/trainings/motor/image10.png',
                    alt: 'zdjęcie z treningu'
                  },
                  {
                    src: '/trainings/motor/image11.png',
                    alt: 'zdjęcie z treningu'
                  },
                  {
                    src: '/trainings/motor/image12.png',
                    alt: 'zdjęcie z treningu'
                  }
                ]}
              />
              <Gallery
                bigImages={[
                  {
                    src: '/trainings/motor/image7.png',
                    alt: 'zdjęcie z treningu'
                  },
                  {
                    src: '/trainings/motor/image8.png',
                    alt: 'zdjęcie z treningu'
                  }
                ]}
                smallImages={[
                  {
                    src: '/trainings/motor/image13.png',
                    alt: 'zdjęcie z treningu'
                  },
                  {
                    src: '/trainings/motor/image14.png',
                    alt: 'zdjęcie z treningu'
                  },
                  {
                    src: '/trainings/motor/image15.png',
                    alt: 'zdjęcie z treningu'
                  },
                  {
                    src: '/trainings/motor/image16.png',
                    alt: 'zdjęcie z treningu'
                  }
                ]}
              />
            </section>
          </main>
        </main>
      </section>
    </>
  );
};

export default MotorPreparationPageTemplate;
