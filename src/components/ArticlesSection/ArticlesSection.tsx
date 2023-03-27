import classNames from 'classnames';
import ArticleTile from 'components/ArticleTile/ArticleTile';
import { articleTilesConfig } from 'pages';
import styles from './ArticlesSection.module.scss';

const ArticlesSection = () => {
  return (
    <section className={classNames('container', styles.articlesSection)}>
      <header>
        <h2>CO U NAS SŁYCHAĆ...</h2>
      </header>
      <main className={styles.articleTilesContainer}>
        {articleTilesConfig.map((articleTile) => (
          <ArticleTile
            imgSrc={articleTile.imgSrc}
            title={articleTile.title}
            description={articleTile.description}
          />
        ))}
      </main>
    </section>
  );
};

export default ArticlesSection;
