import Image from 'next/image';
import styles from './ChoicePageTemplate.module.scss';

const ChoicePageTemplate = () => {
  return (
    <main className={styles.choicePage}>
      <section className={styles.trainings}>
        <figure className={styles.trainingsImage}>
          <Image
            src='/choicePageImages/trainingsChoiceImage.jpg'
            alt='zdjęcie części treningowej'
            layout='fill'
          />
        </figure>
      </section>
      <div className={styles.divider}></div>
      <section className={styles.physio}>
        <figure className={styles.physioImage}>
          <Image
            src='/choicePageImages/physioChoiceImage.jpg'
            alt='zdjęcie części fizjoterapii'
            layout='fill'
          />
        </figure>
      </section>
    </main>
  );
};

export default ChoicePageTemplate;
