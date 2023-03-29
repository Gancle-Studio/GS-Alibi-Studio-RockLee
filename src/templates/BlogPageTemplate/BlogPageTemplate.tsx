import classNames from 'classnames';
import Image from 'next/image';
import styles from './BlogPageTemplate.module.scss';
import { articleTilesConfig } from 'pages';
import ArticleTile from 'components/ArticleTile/ArticleTile';
import Icon, { IconType } from 'components/Icon/Icon';
import getUUID from 'utility/getUUID';

const BlogPageTemplate = () => {
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
          <h1>Zobacz co dla Ciebie przygotowaliśmy</h1>
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
        <div className={styles.paginationContainer}>
          <div className={styles.icon}>
            <Icon icon={IconType.GoldArrowLeft} />
          </div>
          <div className={styles.pagination}></div>
          <div className={styles.icon}>
            <Icon icon={IconType.GoldArrowRight} />
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPageTemplate;
