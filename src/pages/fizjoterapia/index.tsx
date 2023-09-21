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
      <NextSeo
        title='Fizjoterapia, Fizjoterapia Uroginekologiczna oraz Odnowa Biologiczna w Katowicach'
        description='Zapraszamy do zapoznania się z naszym działem fizjoterapii! Oferujemy profesjonalne usługi fizjoterapeutyczne, które pomogą Ci w rehabilitacji, redukcji bólu i poprawie funkcjonalności. Nasz wykwalifikowany zespół fizjoterapeutów zapewni Ci indywidualne podejście i skuteczne metody terapeutyczne. Odzyskaj pełną sprawność i lepsze samopoczucie dzięki naszej fizjoterapii. Skontaktuj się z nami i umów na wizytę już dziś!'
        // canonical='https://www.alibistudio.pl/fizjoterapia'
      />
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
