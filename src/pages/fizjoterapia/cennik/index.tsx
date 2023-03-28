import ArticlesSection from 'components/ArticlesSection/ArticlesSection';
import ContactForm from 'components/ContactForm/ContactForm';
import Footer from 'components/Footer/Footer';
import Nav from 'components/Nav/Nav';
import PhysiotherapistPriceListTemplate from 'templates/PhysiotherapistPriceListTemplate/PhysiotherapistPriceListTemplate';

const PhysiotherapistPriceList = () => {
  return (
    <>
      <Nav />
      <PhysiotherapistPriceListTemplate />
      <ContactForm />
      <ArticlesSection />
      <Footer />
    </>
  );
};

export default PhysiotherapistPriceList;
