import ContactForm from 'components/ContactForm/ContactForm';
import Footer from 'components/Footer/Footer';
import Nav from 'components/Nav/Nav';
import PhysiotherapistBlogPageTemplate from 'templates/PhysiotherapistBlogPageTemplate/PhysiotherapistBlogPageTemplate';
import { createClient } from 'next-sanity';

const sanityClient = createClient({
  projectId: 'mkxtoiab',
  dataset: 'production',
  apiVersion: '2022-03-25',
  useCdn: false
});

const PhysiotherapistBlogPage = ({ articles }: any) => {
  return (
    <>
      <Nav page='PHYSIO' />
      <PhysiotherapistBlogPageTemplate articles={articles} />
      <ContactForm />
      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  const articles = await sanityClient.fetch(
    `
  *[
    _type == "articles" && date <= now()
  ][] {
    _id,
    teaser,
    mainImage,
    title
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
