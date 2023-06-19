import ArticlesSection from 'components/ArticlesSection/ArticlesSection';
import ContactForm from 'components/ContactForm/ContactForm';
import Footer from 'components/Footer/Footer';
import Nav from 'components/Nav/Nav';
import PageModeContext, { PageModeContextType } from 'contexts/PageModeContext';
import { NextSeo } from 'next-seo';
import { useContext } from 'react';
import MedicalTrainigPageTemplate from 'templates/MedicalTrainigPageTemplate/MedicalTrainigPageTemplate';

const MedicalTrainingPage = () => {
  const { handleThemeChange } = useContext(
    PageModeContext
  ) as PageModeContextType;

  handleThemeChange('TRAININGS');

  return (
    <>
      <NextSeo canonical='https://www.alibistudio.pl/nasze-treningi/trening-medyczny' />
      <Nav page='TRENING' />
      <MedicalTrainigPageTemplate />
      <ContactForm />
      <ArticlesSection page={'TRAININGS'} />
      <Footer />
    </>
  );
};

export default MedicalTrainingPage;
