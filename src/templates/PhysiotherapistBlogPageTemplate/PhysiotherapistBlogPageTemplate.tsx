import classNames from 'classnames';
import ArticleTile from 'components/ArticleTile/ArticleTile';
import Icon, { IconType } from 'components/Icon/Icon';
import Image from 'next/image';
import { articleTilesConfig } from 'pages';
import getUUID from 'utility/getUUID';
import styles from './PhysiotherapistBlogPageTemplate.module.scss';

const PhysiotherapistBlogPageTemplate = () => {
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
          <h1>Zobacz co u nas słychać</h1>
        </div>
      </section>
      <section className='container'>
        <main className={styles.articleTilesContainer}>
          {articleTilesConfig.map((articleTile) => (
            <ArticleTile
              key={getUUID()}
              imgSrc={articleTile.imgSrc}
              title={articleTile.title}
              description={articleTile.description}
            />
          ))}
        </main>
      </section>
    </>
  );
};

export default PhysiotherapistBlogPageTemplate;
