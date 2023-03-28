import ContactForm from 'components/ContactForm/ContactForm';
import Footer from 'components/Footer/Footer';
import Nav from 'components/Nav/Nav';
import PhysiotherapistBlogPageTemplate from 'templates/PhysiotherapistBlogPageTemplate/PhysiotherapistBlogPageTemplate';

const PhysiotherapistBlogPage = () => {
  return (
    <>
      <Nav page='PHYSIO' />
      <PhysiotherapistBlogPageTemplate />
      <ContactForm />
      <Footer />
    </>
  );
};

export default PhysiotherapistBlogPage;
