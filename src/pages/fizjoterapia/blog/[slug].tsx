import ContactForm from 'components/ContactForm/ContactForm';
import Footer from 'components/Footer/Footer';
import Nav from 'components/Nav/Nav';
import ArticlePageTemplate from 'templates/ArticlePageTemplate/ArticlePageTemplate';
import { createClient } from 'next-sanity';
import { useContext } from 'react';
import PageModeContext, { PageModeContextType } from 'contexts/PageModeContext';

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

  handleThemeChange('PHYSIO');

  return (
    <>
      <Nav page='BLOG' />
      <ArticlePageTemplate article={article} page={'PHYSIO'} />
      <ContactForm />
      <Footer />
    </>
  );
};

export default ArticlePage;

export const getStaticPaths = async () => {
  const paths = await sanityClient.fetch(`
    *[_type == "articles" && date < now()][].slug.current
  `);

  return {
    paths: paths.map((slug: string) => ({
      params: {
        slug
      }
    })),
    fallback: true
  };
};

export const getStaticProps = async (context: any) => {
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
