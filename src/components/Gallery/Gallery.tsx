import styles from './Gallery.module.scss';
import Image from 'next/image';
import getUUID from 'utility/getUUID';

interface IGalleryProps {
  bigImages: { src: string; alt: string }[];
  smallImages: { src: string; alt: string }[];
}

const Gallery = ({ bigImages, smallImages }: IGalleryProps) => {
  return (
    <section className={styles.gallery}>
      <div>
        <figure className={styles.bigImage}>
          <Image src={bigImages[0].src} alt={bigImages[0].alt} layout='fill' />
        </figure>
      </div>
      {[0, 1].map((index) => (
        <div>
          <figure key={getUUID()} className={styles.smallImg}>
            <Image
              src={smallImages[index].src}
              alt={smallImages[index].alt}
              layout='fill'
            />
          </figure>
        </div>
      ))}
      <div>
        <figure className={styles.bigImage}>
          <Image
            src={bigImages[1].src || ''}
            alt={bigImages[1].alt || ''}
            layout='fill'
          />
        </figure>
      </div>
      {[2, 3].map((index) => (
        <div>
          <figure key={getUUID()} className={styles.smallImg}>
            <Image
              src={smallImages[index].src}
              alt={smallImages[index].alt}
              layout='fill'
            />
          </figure>
        </div>
      ))}
    </section>
  );
};

export default Gallery;
