import styles from './PhysiotherapyFacilityTile.module.scss';

interface IPhysiotherapyFacilityTileProps {
  icon: JSX.Element;
  text: string;
}

const PhysiotherapyFacilityTile = ({
  text,
  icon
}: IPhysiotherapyFacilityTileProps) => {
  return (
    <div className={styles.facilityTile}>
      <div className={styles.icon}>{icon}</div>
      <h2>{text}</h2>
    </div>
  );
};

export default PhysiotherapyFacilityTile;
