import ArticlesSection from 'components/ArticlesSection/ArticlesSection';
import ContactForm from 'components/ContactForm/ContactForm';
import Footer from 'components/Footer/Footer';
import Nav from 'components/Nav/Nav';
import MedicalTrainigPageTemplate from 'templates/MedicalTrainigPageTemplate/MedicalTrainigPageTemplate';

const MedicalTrainingPage = () => {
  return (
    <>
      <Nav />
      <MedicalTrainigPageTemplate />
      <ContactForm />
      <ArticlesSection />
      <Footer />
    </>
  );
};

export default MedicalTrainingPage;
