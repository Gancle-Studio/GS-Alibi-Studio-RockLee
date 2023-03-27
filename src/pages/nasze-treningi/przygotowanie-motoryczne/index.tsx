import ArticlesSection from 'components/ArticlesSection/ArticlesSection';
import ContactForm from 'components/ContactForm/ContactForm';
import Footer from 'components/Footer/Footer';
import Nav from 'components/Nav/Nav';
import MotorPreparationPageTemplate from 'templates/MotorPreparationPageTemplate/MotorPreparationPageTemplate';

const MotorPreparationPage = () => {
  return (
    <>
      <Nav />
      <MotorPreparationPageTemplate />
      <ContactForm />
      <ArticlesSection />
      <Footer />
    </>
  );
};

export default MotorPreparationPage;
