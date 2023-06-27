import ContactForm from 'components/ContactForm/ContactForm';
import Footer from 'components/Footer/Footer';
import Nav from 'components/Nav/Nav';
import ArticlePageTemplate from 'templates/ArticlePageTemplate/ArticlePageTemplate';
import { createClient } from 'next-sanity';
import { useContext } from 'react';
import PageModeContext, { PageModeContextType } from 'contexts/PageModeContext';
import { NextSeo } from 'next-seo';

const sanityClient = createClient({
  projectId: 'mkxtoiab',
  dataset: 'production',
  apiVersion: '2022-03-25',
  useCdn: false
});

const ArticlePage = ({ article }: any) => {
  const { handleThemeChange } = useContext(
    PageModeContext
  ) as PageModeContextType;

  handleThemeChange('TRAININGS');

  return (
    <>
      <NextSeo
        title={article.title}
        description={article.teaser}
        canonical={`https://www.alibistudio.pl/nasze-treningi/blog/${article.slug.current}`}
      />
      <Nav page='BLOG' />
      <ArticlePageTemplate article={article} page={'TRAININGS'} />
      <ContactForm />
      <Footer />
    </>
  );
};

export default ArticlePage;

export const getServerSideProps = async (context: any) => {
  const { slug = '' } = context.params;
  const article = await sanityClient.fetch(
    `
  *[
    _type == "articles" && date <= now() && slug.current == $slug
  ][0] {
    _id,
    content,
    date,
    mainImage,
    title,
    teaser,
    slug
  }
  `,
    { slug }
  );

  return {
    props: {
      article
    }
  };
};
