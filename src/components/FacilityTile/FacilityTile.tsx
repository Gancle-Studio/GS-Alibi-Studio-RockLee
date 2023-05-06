import { ReactElement } from 'react';
import styles from './FacilityTile.module.scss';
import Link from 'next/link';

interface IFacilityTileProps {
  icon: JSX.Element;
  title: string;
  text: ReactElement;
  link?: boolean;
}

const FacilityTile = ({ icon, title, text, link }: IFacilityTileProps) => {
  return (
    <div className={styles.facilityTile}>
      <div className={styles.icon}>{icon}</div>
      <h3>{title}</h3>
      {text}
      {link && (
        <div className={styles.linkContainer}>
          <Link href='/fizjoterapia' className={styles.link}>
            Dowiedz się więcej
          </Link>
        </div>
      )}
    </div>
  );
};

export default FacilityTile;
