import ArticlesSection from 'components/ArticlesSection/ArticlesSection';
import ContactForm from 'components/ContactForm/ContactForm';
import Footer from 'components/Footer/Footer';
import Nav from 'components/Nav/Nav';
import PageModeContext, { PageModeContextType } from 'contexts/PageModeContext';
import { NextSeo } from 'next-seo';
import { useContext } from 'react';
import PriceListTemplate from 'templates/PriceListTemplate/PriceListTemplate';

const PriceList = () => {
  const { handleThemeChange } = useContext(
    PageModeContext
  ) as PageModeContextType;

  handleThemeChange('TRAININGS');

  return (
    <>
      <NextSeo
        title='Sprawdź Nasze Atrakcyjne Ceny Treningów Personalnych'
        description='Zapoznaj się z naszym cennikiem treningów! Oferujemy różnorodne programy treningowe, takie jak trening personalny, przygotowanie motoryczne i trening medyczny. Skontaktuj się z nami, aby uzyskać szczegółowe informacje na temat naszych usług i cen. Wybierz odpowiedni plan dla siebie i rozpocznij swoją drogę do lepszej kondycji!'
        // canonical='https://www.alibistudio.pl/nasze-treningi/cennik'
      />
      <Nav page='CENNIK' />
      <PriceListTemplate />
      <ContactForm />
      <ArticlesSection page={'TRAININGS'} />
      <Footer />
    </>
  );
};

export default PriceList;
