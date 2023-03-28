import ArticlesSection from 'components/ArticlesSection/ArticlesSection';
import ContactForm from 'components/ContactForm/ContactForm';
import Footer from 'components/Footer/Footer';
import Icon, { IconType } from 'components/Icon/Icon';
import Nav from 'components/Nav/Nav';
import PhysiotherapyHomePageTemplate from 'templates/PhysiotherapyHomePageTemplate/PhysiotherapyHomePageTemplate';

const PhysiotherapyHomePage = () => {
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
      <Nav page='PHYSIO' />
      <PhysiotherapyHomePageTemplate
        physiotherapyFacilityTilesConfig={physiotherapyFacilityTilesConfig}
      />
      <ContactForm />
      <ArticlesSection />
      <Footer />
    </>
  );
};

export default PhysiotherapyHomePage;
