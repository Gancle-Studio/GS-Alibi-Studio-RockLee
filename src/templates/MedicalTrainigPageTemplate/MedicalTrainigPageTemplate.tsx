import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import styles from './MedicalTrainigPageTemplate.module.scss';

const MedicalTrainigPageTemplate = () => {
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
      </section>
    </>
  );
};

export default MedicalTrainigPageTemplate;
