import classNames from 'classnames';
import MedicalTrainingPageContent from 'components/MedicalTrainingPageContent/MedicalTrainingPageContent';
import MotorPreparationPageContet from 'components/MotorPreparationPageContet/MotorPreparationPageContet';
import PersonalTrainingPageContent from 'components/PersonalTrainingPageContent/PersonalTrainingPageContent';
import Image from 'next/image';
import { useState } from 'react';
import styles from './TrainingTrainigsPageTemplate.module.scss';

const TrainingTrainigsPageTemplate = () => {
  const [pageContent, setPageContent] = useState('trening personalny');

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
          <h2
            className={
              pageContent === 'trening personalny' ? styles.activeSection : ''
            }
          >
            Trening personalny
          </h2>
          <div className={styles.belt}></div>
          <h2
            className={
              pageContent === 'trening medyczny' ? styles.activeSection : ''
            }
          >
            Trening medyczny
          </h2>
          <div className={styles.belt}></div>
          <h2
            className={
              pageContent === 'przygotowanie motoryczne'
                ? styles.activeSection
                : ''
            }
          >
            Przygotowanie motoryczne
          </h2>
        </div>
        {pageContent === 'trening presonalny' && (
          <PersonalTrainingPageContent />
        )}
        {pageContent === 'trening medyczny' && <MedicalTrainingPageContent />}
        {pageContent === 'przygotowanie motoryczne' && (
          <MotorPreparationPageContet />
        )}
      </section>
    </>
  );
};

export default TrainingTrainigsPageTemplate;
