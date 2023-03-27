import ContactForm from 'components/ContactForm/ContactForm';
import Footer from 'components/Footer/Footer';
import Nav from 'components/Nav/Nav';
import BlogPageTemplate from 'templates/BlogPageTemplate/BlogPageTemplate';

const Blog = () => {
  return (
    <>
      <Nav />
      <BlogPageTemplate />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Blog;
