import { ReactElement } from 'react';
import styles from './FacilityTile.module.scss';

interface IFacilityTileProps {
  icon: string;
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
          <p className={styles.link}>Dowiedz się więcej</p>
        </div>
      )}
    </div>
  );
};

export default FacilityTile;
