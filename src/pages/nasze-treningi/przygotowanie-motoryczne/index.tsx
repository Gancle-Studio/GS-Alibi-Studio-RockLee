import ArticlesSection from 'components/ArticlesSection/ArticlesSection';
import ContactForm from 'components/ContactForm/ContactForm';
import Footer from 'components/Footer/Footer';
import Nav from 'components/Nav/Nav';
import PageModeContext, { PageModeContextType } from 'contexts/PageModeContext';
import { NextSeo } from 'next-seo';
import { useContext } from 'react';
import MotorPreparationPageTemplate from 'templates/MotorPreparationPageTemplate/MotorPreparationPageTemplate';

const MotorPreparationPage = () => {
  const { handleThemeChange } = useContext(
    PageModeContext
  ) as PageModeContextType;

  handleThemeChange('TRAININGS');

  return (
    <>
      <NextSeo
        title='Specjalistyczne Treningi Motoryczne dla Sportowców w Katowicach'
        description='Przygotuj się do trenowania sportów walki dzięki naszemu programowi przygotowania motorycznego! Indywidualne podejście, profesjonalne wsparcie i skuteczne treningi. Popraw swoją siłę, wytrzymałość i technikę, aby być gotowym na wyzwania w sportach walki. Zacznij już teraz i podnieś swój poziom umiejętności na nowy poziom!'
        canonical='https://www.alibistudio.pl/nasze-treningi/przygotowanie-motoryczne'
      />
      <Nav page='TRENING' />
      <MotorPreparationPageTemplate />
      <ContactForm />
      <ArticlesSection page={'TRAININGS'} />
      <Footer />
    </>
  );
};

export default MotorPreparationPage;
