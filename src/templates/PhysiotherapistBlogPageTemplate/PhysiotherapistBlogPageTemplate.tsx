import classNames from 'classnames';
import ArticleTile from 'components/ArticleTile/ArticleTile';
import Icon, { IconType } from 'components/Icon/Icon';
import Image from 'next/image';
import getUUID from 'utility/getUUID';
import styles from './PhysiotherapistBlogPageTemplate.module.scss';
import urlBuilder from '@sanity/image-url';
import { createClient } from 'next-sanity';

const sanityClient = createClient({
  projectId: 'mkxtoiab',
  dataset: 'production',
  apiVersion: '2022-03-25',
  useCdn: false
});

const PhysiotherapistBlogPageTemplate = ({ articles }: any) => {
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
            />
          ))}
        </main>
      </section>
    </>
  );
};

export default PhysiotherapistBlogPageTemplate;
