import ArticlesSection from 'components/ArticlesSection/ArticlesSection';
import ContactForm from 'components/ContactForm/ContactForm';
import Footer from 'components/Footer/Footer';
import Nav from 'components/Nav/Nav';
import PageModeContext, { PageModeContextType } from 'contexts/PageModeContext';
import { useContext } from 'react';
import PriceListTemplate from 'templates/PriceListTemplate/PriceListTemplate';

const PriceList = () => {
  const { handleThemeChange } = useContext(
    PageModeContext
  ) as PageModeContextType;

  handleThemeChange('TRAININGS');

  return (
    <>
      <Nav page='CENNIK' />
      <PriceListTemplate />
      <ContactForm />
      <ArticlesSection page={'TRAININGS'} />
      <Footer />
    </>
  );
};

export default PriceList;
