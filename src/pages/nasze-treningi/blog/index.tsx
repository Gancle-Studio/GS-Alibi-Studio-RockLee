import ContactForm from 'components/ContactForm/ContactForm';
import Footer from 'components/Footer/Footer';
import Nav from 'components/Nav/Nav';
import BlogPageTemplate from 'templates/BlogPageTemplate/BlogPageTemplate';
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

const Blog = ({ articles }: any) => {
  const { handleThemeChange } = useContext(
    PageModeContext
  ) as PageModeContextType;

  handleThemeChange('TRAININGS');

  return (
    <>
      <NextSeo canonical='https://www.alibistudio.pl/nasze-treningi/blog' />
      <Nav page='BLOG' />
      <BlogPageTemplate articles={articles} />
      <ContactForm />
      <Footer />
    </>
  );
};

export const getServerSideProps = async () => {
  const articles = await sanityClient.fetch(
    `
  *[
    _type == "articles" && date <= now()
  ][] {
    _id,
    teaser,
    mainImage,
    title,
    slug
  }
  `,
    {}
  );

  return {
    props: {
      articles
    }
  };
};

export default Blog;
