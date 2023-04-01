import classNames from 'classnames';
import ArticleBody from 'components/ArticleBody/ArticleBody';
import Icon, { IconType } from 'components/Icon/Icon';
import Image from 'next/image';
import styles from './ArticlePageTemplate.module.scss';
import urlBuilder from '@sanity/image-url';
import { createClient } from 'next-sanity';
import Link from 'next/link';

const sanityClient = createClient({
  projectId: 'mkxtoiab',
  dataset: 'production',
  apiVersion: '2022-03-25',
  useCdn: false
});

const ArticlePageTemplate = ({ article, page }: any) => {
  const { title, mainImage, date, content } = article;

  if (!article) {
    return null;
  }

  console.log(content);

  return (
    <article className={classNames('container', styles.articleContainer)}>
      <h1>{title}</h1>

      <div className={styles.dateAndIcons}>
        <p>{date}</p>
        <div className={styles.icons}>
          <div className={styles.icon}>
            <Icon icon={IconType.Copy} />
          </div>

          <div className={styles.icon}>
            <Icon icon={IconType.Facebook} />
          </div>

          <div className={styles.icon}>
            <Icon icon={IconType.Instagram} />
          </div>
        </div>
      </div>

      <figure className={styles.mainImg}>
        <Image
          src={urlBuilder(sanityClient).image(mainImage.asset).url() as string}
          alt='główne zdjęcie artykułu'
          layout='fill'
        />
      </figure>
      <div className={styles.content}>
        <ArticleBody body={content} />
      </div>
      <p className={styles.back}>
        <Link
          href={
            page === 'TRAININGS' ? '/nasze-treningi/blog' : '/fizjoterapia/blog'
          }
        >
          Powrót do artykułów
        </Link>
      </p>
    </article>
  );
};

export default ArticlePageTemplate;
