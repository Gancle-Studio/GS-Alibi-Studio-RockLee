import Image from 'next/image';
import styles from './ChoicePageTemplate.module.scss';
import Icon, { IconType } from 'components/Icon/Icon';
import Link from 'next/link';

const ChoicePageTemplate = () => {
  return (
    <main className={styles.choicePage}>
      <header className={styles.header}>
        <Icon icon={IconType.AlibiChoiceLogo} />
        <p>ALIBI STUDIO</p>
      </header>
      <section className={styles.trainings}>
        <Link href='/nasze-treningi'>
          <figure className={styles.trainingsImage}>
            <Image
              src='/choicePageImages/trainingsChoiceImage.jpeg'
              alt='zdjęcie części treningowej'
              layout='fill'
            />
          </figure>
          <div className={styles.trainingsShadow}>
            <div>
              <h2>TRENUJ Z NAMI</h2>
              <p>Treningi personalne</p>
              <p>Treningi medyczne</p>
              <p>Przygotowanie motoryczne dla sportowców</p>
            </div>
          </div>
        </Link>
      </section>
      <div className={styles.divider}></div>
      <section className={styles.physio}>
        <Link href='/fizjoterapia'>
          <figure className={styles.physioImage}>
            <Image
              src='/choicePageImages/physioChoiceImage.jpeg'
              alt='zdjęcie części fizjoterapii'
              layout='fill'
            />
          </figure>
          <div className={styles.physioShadow}>
            <div>
              <h2>POPRAW SWOJE ZDROWIE</h2>
              <p>Masaże</p>
              <p>Fizjoterapia</p>
              <p>Fizjoterapia uroginekologiczna</p>
            </div>
          </div>
        </Link>
      </section>
    </main>
  );
};

export default ChoicePageTemplate;
