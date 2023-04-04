import ArticlesSection from 'components/ArticlesSection/ArticlesSection';
import ContactForm from 'components/ContactForm/ContactForm';
import Footer from 'components/Footer/Footer';
import Nav from 'components/Nav/Nav';
import PageModeContext, { PageModeContextType } from 'contexts/PageModeContext';
import { useContext } from 'react';
import MedicalTrainigPageTemplate from 'templates/MedicalTrainigPageTemplate/MedicalTrainigPageTemplate';

const MedicalTrainingPage = () => {
  const { handleThemeChange } = useContext(
    PageModeContext
  ) as PageModeContextType;

  handleThemeChange('TRAININGS');

  return (
    <>
      <Nav page='TRENING' />
      <MedicalTrainigPageTemplate />
      <ContactForm />
      <ArticlesSection />
      <Footer />
    </>
  );
};

export default MedicalTrainingPage;
