import classNames from 'classnames';
import Image from 'next/image';
import styles from './ArticleTile.module.scss'

interface IArtcileTileProps {
  imgSrc: string;
  title: string;
  description: string;
}

const ArticleTile = ({imgSrc, title, description} : IArtcileTileProps) => {
   return <div className={styles.articleTile}>
    <figure className={styles.articleTileImg}>
          <Image
            src={imgSrc}
            alt='zdjęcie z treningu'
            layout='fill'
          />
          <div className={styles.iconContainer}>
            <div className={styles.icon}></div>
          </div>
        </figure>
        <p className={styles.articleTileTitle}>{title}</p>
        <p className={classNames('small', styles.articleTileDescription)}>{description}</p>
   </div>;
};

export default ArticleTile;