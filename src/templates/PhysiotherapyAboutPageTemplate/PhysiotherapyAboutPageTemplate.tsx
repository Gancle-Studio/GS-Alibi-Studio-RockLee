import classNames from 'classnames';
import PersonalTrainerDescription from 'components/PersonalTrainerDescription/PersonalTrainerDescription';
import Image from 'next/image';
import styles from './PhysiotherapyAboutPageTemplate.module.scss';

interface IPhysiotherapyAboutPageTemplateProps {
  physiotherapistsConfig: {
    imgSrc: string;
    name: string;
    services: string;
    description: JSX.Element;
  }[];
}

const PhysiotherapyAboutPageTemplate = ({
  physiotherapistsConfig
}: IPhysiotherapyAboutPageTemplateProps) => {
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
          <h1>To oni zadbają o Twoje zdrowie</h1>
        </div>
      </section>
      <section
        className={classNames('container', styles.personalTrainersContainer)}
      >
        {physiotherapistsConfig.map((physiotherapist) => (
          <PersonalTrainerDescription
            imgSrc={physiotherapist.imgSrc}
            name={physiotherapist.name}
            services={physiotherapist.services}
            description={physiotherapist.description}
          />
        ))}
      </section>
    </>
  );
};

export default PhysiotherapyAboutPageTemplate;
