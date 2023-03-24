import { ReactElement } from 'react';
import styles from './FacilityTile.module.scss';

interface IFacilityTileProps {
  icon: string;
  title: string;
  text: ReactElement;
}

const FacilityTile = ({icon, title, text}: IFacilityTileProps) => {
   return <div className={styles.facilityTile}>
    <div className={styles.icon}>{icon}</div>
    <h3>{title}</h3>
    {text}
   </div>;
};

export default FacilityTile;