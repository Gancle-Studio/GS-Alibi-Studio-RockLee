import Image from 'next/image';
import styles from './ChoicePageTemplate.module.scss';
import Icon, { IconType } from 'components/Icon/Icon';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import PageModeContext, { PageModeContextType } from 'contexts/PageModeContext';

const ChoicePageTemplate = () => {
  const router = useRouter();

  const { handleThemeChange } = useContext(
    PageModeContext
  ) as PageModeContextType;

  const handleClick = (e: any, _mode: 'TRAININGS' | 'PHYSIO', path: string) => {
    e.preventDefault();
    handleThemeChange(_mode);
    router.push(path);
  };

  return (
    <main className={styles.choicePage}>
      <header className={styles.header}>
        <Icon icon={IconType.AlibiChoiceLogo} />
        <h1>ALIBI STUDIO</h1>
      </header>
      <section className={styles.trainings}>
        <div onClick={(e) => handleClick(e, 'TRAININGS', '/nasze-treningi')}>
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
        </div>
      </section>
      <div className={styles.divider}></div>
      <section className={styles.physio}>
        <div onClick={(e) => handleClick(e, 'PHYSIO', '/fizjoterapia')}>
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
        </div>
      </section>
    </main>
  );
};

export default ChoicePageTemplate;
