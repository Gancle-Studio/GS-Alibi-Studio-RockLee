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
      <NextSeo
        title='Blog o Fizjoterapii i Zdrowym Stylu Życia - Katowice Ligota'
        description='Witaj na naszym blogu! Tutaj znajdziesz ciekawe artykuły i porady dotyczące treningu, zdrowia i aktywnego stylu życia. Nasz zespół ekspertów regularnie publikuje nowe treści, które pomogą Ci poszerzyć wiedzę i inspirują do działania. Przeczytaj nasze wpisy, dowiedz się więcej i zacznij wprowadzać pozytywne zmiany w swoim życiu!'
        canonical={`https://www.alibistudio.pl/fizjoterapia/blog`}
      />
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
