import ContactForm from './ContactForm/Form';
import Footer from './Footer/Footer';
import Nav from './Nav/Nav';
import TrainingHomePage from './TrainingHomePage';

const Home = () => {
  return (
    <>
      <Nav />
      <TrainingHomePage />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;
