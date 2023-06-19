import ContactForm from 'components/ContactForm/ContactForm';
import Footer from 'components/Footer/Footer';
import Nav from 'components/Nav/Nav';
import PhysiotherapistBlogPageTemplate from 'templates/PhysiotherapistBlogPageTemplate/PhysiotherapistBlogPageTemplate';
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

const PhysiotherapistBlogPage = ({ articles }: any) => {
  const { handleThemeChange } = useContext(
    PageModeContext
  ) as PageModeContextType;

  handleThemeChange('PHYSIO');

  return (
    <>
      <NextSeo canonical={`https://www.alibistudio.pl/fizjoterapia/blog`} />
      <Nav page='BLOG' />
      <PhysiotherapistBlogPageTemplate articles={articles} />
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

export default PhysiotherapistBlogPage;
