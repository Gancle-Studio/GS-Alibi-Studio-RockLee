import classNames from 'classnames';
import Image from 'next/image';
import styles from './PersonalTrainerDescription.module.scss';

interface IPersonalTrainerDescriptionProps {
  imgSrc: string;
  alt: string;
  name: string;
  services: string;
  description: JSX.Element;
}

const PersonalTrainerDescription = ({
  imgSrc,
  alt,
  name,
  services,
  description
}: IPersonalTrainerDescriptionProps) => {
  return (
    <div className={styles.personContainer}>
      <figure className={styles.personImg}>
        <Image src={imgSrc} alt={alt} layout='fill' />
      </figure>
      <div className={styles.content}>
        <h2>{name}</h2>
        <div className={styles.belt}></div>
        <p className={classNames('small', styles.services)}>{services}</p>
        {description}
      </div>
    </div>
  );
};

export default PersonalTrainerDescription;
