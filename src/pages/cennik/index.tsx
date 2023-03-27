import ArticlesSection from 'components/ArticlesSection/ArticlesSection';
import ContactForm from 'components/ContactForm/ContactForm';
import Footer from 'components/Footer/Footer';
import Nav from 'components/Nav/Nav';
import PriceListTemplate from 'templates/PriceListTemplate/PriceListTemplate';

const PriceList = () => {
  return (
    <>
      <Nav />
      <PriceListTemplate />
      <ContactForm />
      <ArticlesSection />
      <Footer />
    </>
  );
};

export default PriceList;
