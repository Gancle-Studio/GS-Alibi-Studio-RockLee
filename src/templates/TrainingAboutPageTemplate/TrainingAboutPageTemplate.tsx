import classNames from 'classnames';
import PersonalTrainerDescription from 'components/PersonalTrainerDescription/PersonalTrainerDescription';
import Image from 'next/image';
import styles from './TrainingAboutPageTemplate.module.scss';

interface ITrainingAboutPageTemplateProps {
  personaleTrainersConfig: {
    imgSrc: string;
    name: string;
    services: string;
    description: JSX.Element;
  }[];
}

const TrainingAboutPageTemplate = ({
  personaleTrainersConfig
}: ITrainingAboutPageTemplateProps) => {
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
          <h1>To oni zadbają o Twój rozwój</h1>
        </div>
      </section>
      <section
        className={classNames('container', styles.personalTrainersContainer)}
      >
        {personaleTrainersConfig.map((personaleTrainer) => (
          <PersonalTrainerDescription
            imgSrc={personaleTrainer.imgSrc}
            name={personaleTrainer.name}
            services={personaleTrainer.services}
            description={personaleTrainer.description}
          />
        ))}
      </section>
    </>
  );
};

export default TrainingAboutPageTemplate;
