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
  if (!article) {
    return null;
  }

  const { title, mainImage, date, content } = article;

  return (
    <article className={classNames('container', styles.articleContainer)}>
      <h1>{title}</h1>

      <div className={styles.dateAndIcons}>
        <p>Opublikowano: {date}</p>
        <div className={styles.icons}>
          <div
            className={styles.icon}
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
            }}
          >
            <Icon icon={IconType.Copy} />
          </div>

          <div className={styles.icon}>
            <a
              href='https://www.facebook.com/ALIBISTUDIOTRENINGU'
              target='_blank'
              rel='norefferrer noopener'
            >
              <Icon icon={IconType.Facebook} />
            </a>
          </div>

          <div className={styles.icon}>
            <a
              href='https://www.instagram.com/alibi_studio/'
              target='_blank'
              rel='norefferrer noopener'
            >
              <Icon icon={IconType.Instagram} />
            </a>
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
