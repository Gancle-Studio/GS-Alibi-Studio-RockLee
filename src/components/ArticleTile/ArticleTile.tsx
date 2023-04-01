import classNames from 'classnames';
import Icon, { IconType } from 'components/Icon/Icon';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ArticleTile.module.scss';

interface IArtcileTileProps {
  imgSrc: string;
  title: string;
  description: string;
  slug: string;
  page: string;
}

const ArticleTile = ({
  imgSrc,
  title,
  description,
  slug,
  page
}: IArtcileTileProps) => {
  return (
    <Link
      href={
        page === 'PHYSIO'
          ? `/fizjoterapia/blog/${slug}`
          : `/nasze-treningi/blog/${slug}`
      }
    >
      <div className={styles.articleTile}>
        <figure className={styles.articleTileImg}>
          <Image src={imgSrc} alt='zdjęcie z treningu' layout='fill' />
          <div className={styles.iconContainer}>
            <div className={styles.icon}>
              <Icon icon={IconType.GrayArrowRight} />
            </div>
          </div>
        </figure>
        <p className={styles.articleTileTitle}>{title}</p>
        <p className={classNames('small', styles.articleTileDescription)}>
          {description}
        </p>
      </div>
    </Link>
  );
};

export default ArticleTile;
