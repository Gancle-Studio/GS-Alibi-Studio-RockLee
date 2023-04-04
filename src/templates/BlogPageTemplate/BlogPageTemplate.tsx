import classNames from 'classnames';
import Image from 'next/image';
import styles from './BlogPageTemplate.module.scss';
import ArticleTile from 'components/ArticleTile/ArticleTile';
import Icon, { IconType } from 'components/Icon/Icon';
import getUUID from 'utility/getUUID';
import urlBuilder from '@sanity/image-url';
import { createClient } from 'next-sanity';

const sanityClient = createClient({
  projectId: 'mkxtoiab',
  dataset: 'production',
  apiVersion: '2022-03-25',
  useCdn: false
});

const BlogPageTemplate = ({ articles }: any) => {
  console.log(articles);
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
          {articles.map((article: any) => (
            <ArticleTile
              key={getUUID()}
              imgSrc={
                urlBuilder(sanityClient)
                  .image(article.mainImage.asset)
                  .url() as string
              }
              title={article.title}
              description={article.teaser}
              slug={article.slug.current}
              page={'TRAININGS'}
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
