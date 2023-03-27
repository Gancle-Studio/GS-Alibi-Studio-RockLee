import ArticlesSection from 'components/ArticlesSection/ArticlesSection';
import ContactForm from 'components/ContactForm/ContactForm';
import Footer from 'components/Footer/Footer';
import Nav from 'components/Nav/Nav';
import TrainingTrainigsPageTemplate from 'templates/TrainingTrainigsPageTemplate/TrainingTrainigsPageTemplate';

const TrainingsPage = () => {
  return (
    <>
      <Nav />
      <TrainingTrainigsPageTemplate />
      <ContactForm />
      <ArticlesSection />
      <Footer />
    </>
  );
};

export default TrainingsPage;
