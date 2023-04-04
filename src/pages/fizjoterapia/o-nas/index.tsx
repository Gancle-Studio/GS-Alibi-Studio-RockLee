import ArticlesSection from 'components/ArticlesSection/ArticlesSection';
import ContactForm from 'components/ContactForm/ContactForm';
import Footer from 'components/Footer/Footer';
import Nav from 'components/Nav/Nav';
import PageModeContext, { PageModeContextType } from 'contexts/PageModeContext';
import { useContext } from 'react';
import PhysiotherapyAboutPageTemplate from 'templates/PhysiotherapyAboutPageTemplate/PhysiotherapyAboutPageTemplate';

const PhysiotherapyAboutPage = () => {
  const { handleThemeChange } = useContext(
    PageModeContext
  ) as PageModeContextType;

  handleThemeChange('PHYSIO');

  const physiotherapistsConfig = [
    {
      imgSrc: '/personalTrainersImages/image4.png',
      name: 'Kasia Szlendak',
      services: 'fizjoterapia, masaże, trening medyczny',
      description: (
        <p>
          Chęć pomocy ludziom pchnął mnie do zaczęcia studiów
          fizjoterapeutycznych i po ich ukończeniu podejmując pracę w zawodzie
          zauważyłam, że sprawia mi to bardzo dużą radość.
          <br />
          <br />
          Później poznałam ekipę Alibi, Lila mnie wciągnęła w to przedsięwzięcie
          no i jestem :).
          <br />
          <br />
          Zajmuję się fizjoterapią, masażami, oraz treningami personalnymi.
          <br />
          <br />
          Kształcę się w specjalizacji uroginekologicznej, by pomagać
          szczególnie kobietom.
        </p>
      )
    }
  ];

  return (
    <>
      <Nav page='O NAS' />
      <PhysiotherapyAboutPageTemplate
        physiotherapistsConfig={physiotherapistsConfig}
      />
      <ContactForm />
      <ArticlesSection page={'PHYSIO'} />
      <Footer />
    </>
  );
};

export default PhysiotherapyAboutPage;
