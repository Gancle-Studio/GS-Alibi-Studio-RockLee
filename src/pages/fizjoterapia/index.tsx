import ArticlesSection from 'components/ArticlesSection/ArticlesSection';
import ContactForm from 'components/ContactForm/ContactForm';
import Footer from 'components/Footer/Footer';
import Icon, { IconType } from 'components/Icon/Icon';
import Nav from 'components/Nav/Nav';
import PageModeContext, { PageModeContextType } from 'contexts/PageModeContext';
import { NextSeo } from 'next-seo';
import { useContext } from 'react';
import PhysiotherapyHomePageTemplate from 'templates/PhysiotherapyHomePageTemplate/PhysiotherapyHomePageTemplate';

const PhysiotherapyHomePage = () => {
  const { handleThemeChange } = useContext(
    PageModeContext
  ) as PageModeContextType;

  handleThemeChange('PHYSIO');

  const physiotherapyFacilityTilesConfig = [
    {
      text: 'Przywrócenie równowagi biologicznej',
      icon: <Icon icon={IconType.Balance} />
    },
    {
      text: 'Zwiększenie odporności i redukcja stresu',
      icon: <Icon icon={IconType.Calm} />
    },
    {
      text: 'Poprawa samopoczucia i jakości snu',
      icon: <Icon icon={IconType.HappyHeart} />
    },
    {
      text: 'Lepsza regeneracja po udanym treningu',
      icon: <Icon icon={IconType.Bic} />
    }
  ];
  return (
    <>
      <NextSeo canonical='https://www.alibistudio.pl/fizjoterapia' />
      <Nav page='HOME' />
      <PhysiotherapyHomePageTemplate
        physiotherapyFacilityTilesConfig={physiotherapyFacilityTilesConfig}
      />
      <ContactForm />
      <ArticlesSection page={'PHYSIO'} />
      <Footer />
    </>
  );
};

export default PhysiotherapyHomePage;
