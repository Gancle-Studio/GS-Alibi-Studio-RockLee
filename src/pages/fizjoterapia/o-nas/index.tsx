import ArticlesSection from 'components/ArticlesSection/ArticlesSection';
import ContactForm from 'components/ContactForm/ContactForm';
import Footer from 'components/Footer/Footer';
import Nav from 'components/Nav/Nav';
import PageModeContext, { PageModeContextType } from 'contexts/PageModeContext';
import { NextSeo } from 'next-seo';
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
    },
    {
      imgSrc: '/personalTrainersImages/image5.jpg',
      name: 'Maciej Jędrysiak',
      services: 'fizjoterapia, masaże',
      description: (
        <>
          <p>
            Cześć z tej strony Maciej.
            <br />
            <br />
            Od 2021 roku licencjonowany masażysta oraz już niedługo absolwent
            Śląskiego Uniwersytetu Medycznego na kierunku Fizjoterapia.
            <br />
            <br />
            Specjalizuje się głównie w fizjoterapii ortopedycznej oraz
            sportowej.
            <br />
            W swojej pracy opieram się przede wszystkim na terapii manualnej
            oraz treningu funkcjonalnym.
            <br />
            <br />
            Staram się ciągle poszerzać swoje horyzonty oraz zbierać
            doświadczenie biorąc udział w wielu kursach takich jak :
          </p>
          <ul>
            <li>
              {' '}
              Rekonstrukcja ACL – kompleksowo o diagnostyce, operacji,
              postępowaniu fizjoterapeutycznym i ocenie motorycznej ( Bieruń-
              Galen Rehabilitacja, 2023)
            </li>
            <li>
              Kurs Masaż Tkanek Głębokich i techniki rozluźniania
              mięśniowo-powięziowego, I i II Moduł (Ostrowiec Świętokrzyski,
              2022)
            </li>
            <li>
              Kurs Funkcjonalna Terapia Manualna I i II Moduł (Ostrowiec
              Świętokrzyski, 2022)
            </li>
            <li>Kurs Functional Movement Screen (Warszawa,2021)</li>
            <li>Kurs Fascial Distortion Model Taping</li>
            <li>Technik masażysta </li>
          </ul>
          <br />
          <br />
          <p>
            Świadomość pozytywnego wpływu aktywności fizycznej na jakość życia,
            skłania mnie w wolnym czasie do korzystania z uroków górskich wypraw
            oraz krajoznawczych wycieczek rowerowych w gronie znajomych.
          </p>
        </>
      )
    },
    {
      imgSrc: '/personalTrainersImages/image7.jpg',
      name: 'Patrycja Zaporowska',
      services: 'fizjoterapia, masaże',
      description: (
        <>
          <p>
            Jestem absolwentką Akademii Wychowania Fizycznego w Katowicach na
            kierunku fizjoterapia.
            <br />
            <br />
            Doświadczenie zdobywałam głównie z pacjentami ortopedycznymi,
            bólowymi i ze sportowcami, co utwierdziło mnie w przekonaniu, że
            indywidualna praca z pacjentem, która łączy terapię manualną z
            ruchem jest czymś w czym się odnajduję i w tym kierunku chciałabym
            się rozwijać.
          </p>
        </>
      )
    }
  ];

  return (
    <>
      <NextSeo canonical='https://www.alibistudio.pl/fizjoterapia/o-nas' />
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
