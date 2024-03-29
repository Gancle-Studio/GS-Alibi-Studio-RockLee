import classNames from 'classnames';
import ArticleTile from 'components/ArticleTile/ArticleTile';
import getUUID from 'utility/getUUID';
import styles from './ArticlesSection.module.scss';
import { createClient } from 'next-sanity';
import { useEffect, useState } from 'react';
import urlBuilder from '@sanity/image-url';

const sanityClient = createClient({
  projectId: 'mkxtoiab',
  dataset: 'production',
  apiVersion: '2022-03-25',
  useCdn: false
});

interface IArticleSectionProps {
  page: string;
}

const ArticlesSection = ({ page }: IArticleSectionProps) => {
  const [articles, setAtricles] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const articlesData: any = await sanityClient.fetch(
        `
        *[
          _type == "articles"
        ][] {
        _id,
        date,
        mainImage,
        title,
        teaser,
        slug
      }
      `,
        {}
      );
      setAtricles(articlesData.slice(0, 4));
    };

    fetchData();
  }, []);

  return (
    <section className={classNames('container', styles.articlesSection)}>
      <header>
        <h2>CO U NAS SŁYCHAĆ...</h2>
      </header>
      <main className={styles.articleTilesContainer}>
        {articles.map((article: any) => {
          return (
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
              page={page}
            />
          );
        })}
      </main>
    </section>
  );
};

export default ArticlesSection;
