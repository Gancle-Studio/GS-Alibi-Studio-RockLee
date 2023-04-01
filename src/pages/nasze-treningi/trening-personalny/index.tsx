import ArticlesSection from 'components/ArticlesSection/ArticlesSection';
import ContactForm from 'components/ContactForm/ContactForm';
import Footer from 'components/Footer/Footer';
import Nav from 'components/Nav/Nav';
import PersonalTriningPageTemplate from 'templates/PersonalTriningPageTemplate/PersonalTriningPageTemplate';

const PersonalTrainingPage = () => {
  return (
    <>
      <Nav page='TRAININGS' />
      <PersonalTriningPageTemplate />
      <ContactForm />
      <ArticlesSection />
      <Footer />
    </>
  );
};

export default PersonalTrainingPage;
