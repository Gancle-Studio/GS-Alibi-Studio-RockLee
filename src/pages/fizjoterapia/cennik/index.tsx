import ArticlesSection from 'components/ArticlesSection/ArticlesSection';
import ContactForm from 'components/ContactForm/ContactForm';
import Footer from 'components/Footer/Footer';
import Nav from 'components/Nav/Nav';
import PageModeContext, { PageModeContextType } from 'contexts/PageModeContext';
import { NextSeo } from 'next-seo';
import { useContext } from 'react';
import PhysiotherapistPriceListTemplate from 'templates/PhysiotherapistPriceListTemplate/PhysiotherapistPriceListTemplate';

const PhysiotherapistPriceList = () => {
  const { handleThemeChange } = useContext(
    PageModeContext
  ) as PageModeContextType;

  handleThemeChange('PHYSIO');

  return (
    <>
      <NextSeo canonical='https://www.alibistudio.pl/fizjoterapia/cennik' />
      <Nav page='CENNIK' />
      <PhysiotherapistPriceListTemplate />
      <ContactForm />
      <ArticlesSection page={'PHYSIO'} />
      <Footer />
    </>
  );
};

export default PhysiotherapistPriceList;
