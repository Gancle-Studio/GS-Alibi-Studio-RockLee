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
      <NextSeo
        title='Cennik Skutecznych Zabiegów Fizjoterapeutycznych w Katowicach Ligocie'
        description='Zapraszamy do zapoznania się z naszym cennikiem fizjoterapii! Oferujemy różnorodne usługi fizjoterapeutyczne, dostosowane do Twoich indywidualnych potrzeb. Skontaktuj się z nami, aby uzyskać szczegółowe informacje na temat naszych usług i cen. Nasz zespół fizjoterapeutów pomoże Ci w rehabilitacji, redukcji bólu i poprawie funkcjonalności. Wybierz naszą fizjoterapię i odzyskaj pełną sprawność dzięki naszemu profesjonalnemu podejściu i skutecznym metodom terapeutycznym!'
        canonical='https://www.alibistudio.pl/fizjoterapia/cennik'
      />
      <Nav page='CENNIK' />
      <PhysiotherapistPriceListTemplate />
      <ContactForm />
      <ArticlesSection page={'PHYSIO'} />
      <Footer />
    </>
  );
};

export default PhysiotherapistPriceList;
