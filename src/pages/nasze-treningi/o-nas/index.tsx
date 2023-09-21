import ArticlesSection from 'components/ArticlesSection/ArticlesSection';
import ContactForm from 'components/ContactForm/ContactForm';
import Footer from 'components/Footer/Footer';
import Nav from 'components/Nav/Nav';
import PageModeContext, { PageModeContextType } from 'contexts/PageModeContext';
import { NextSeo } from 'next-seo';
import { useContext } from 'react';
import TrainingAboutPageTemplate from 'templates/TrainingAboutPageTemplate/TrainingAboutPageTemplate';

const AboutPage = () => {
  const { handleThemeChange } = useContext(
    PageModeContext
  ) as PageModeContextType;

  handleThemeChange('TRAININGS');

  const personaleTrainersConfig = [
    {
      imgSrc: '/personalTrainersImages/image1.png',
      alt: 'Lila Bienek - trener personalny, przygotowanie motoryczne sportowców',
      name: 'Lila Bienek',
      services:
        'szefowa, trening siłowy, przygotowanie motoryczne w sportach walki',
      description: (
        <p>
          Na siłowni na której zaczynałam swoją przygodę z treningiem zamiast
          rączki do wyciągu przyspawana była kierownica od roweru.
          <br />
          <br />
          Było to 20 lat temu i od tamtego czasu trening siłowy towarzyszy mi
          cały czas. Jestem bardzo szczęśliwa, że udało mi się z mojej pasji
          stworzyć takie miejsce.
          <br />
          <br />
          Lubię ćwiczyć ale lubię też odpoczywać. Uważam, że najważniejsze to
          czuć się ze sobą dobrze i tą ideologią staram się zarażać w moim
          studio.
          <br />
          <br />
          Ukończyłam studia na kierunku Rekreacja i turystyka. Przez kolejne
          kilkanaście lat odbyłam wiele kursów i szkoleń, dzięki którym ciągle
          jestem na bieżąco z obecną wiedzą treningową.
        </p>
      )
    },
    {
      imgSrc: '/personalTrainersImages/image2.png',
      alt: 'Adam Pinocy - trener personalny, trening medyczny, przygotowanie motoryczne sportowców, dietetyk',
      name: 'Adam Pinocy',
      services: 'trening siłowy, trening medyczny',
      description: (
        <p>
          Jestem pasjonatem sportu i bez ruchu nie wyobrażam sobie życia.
          <br />
          <br />
          Na przestrzeni wielu lat trenowałem różne dyscypliny sportowe – od
          poziomu amatorskiego do profesjonalnego, więc mam spore doświadczenie
          ze sportowcami.
          <br />
          <br />
          Odkąd jednak trafiłem na siłownię priorytety się zmieniły i odkryłem
          moją nową miłość – trening siłowy. Ten impuls zainspirował mnie do
          edukacji w tej dziedzinie i teraz mogę się przedstawić jako
          licencjonowany trener personalny i dietetyk ze stopniem magisterskim,
          absolwent dwóch kierunków na Katowickim AWF, oraz wielu kursów
          niezależnych.
          <br />
          <br />
          Specjalizuję się przede wszystkim w treningu siłowym, treningu
          medycznym, oraz dbam o ruch kobiet w ciąży i po porodzie
        </p>
      )
    },
    {
      imgSrc: '/personalTrainersImages/image3.png',
      alt: 'Bartek Golik - trener personalny, przygotowanie motoryczne sportowców',
      name: 'Bartek Golik',
      services: 'trening siłowy, przygotowanie motoryczne sportowców',
      description: (
        <p>
          Sport pasjonował mnie od dziecka. Już jako nastolatek grałem już w
          piłkę nożną w Akademii KS Rozwój Katowice.
          <br />
          <br />
          Z biegiem czasu zacząłem interesować się również treningiem siłowym.
          Ukończyłem w tym kierunku różne szkolenia i nadal śledzę ciekawostki i
          badania na ten temat.
          <br />
          <br />
          Skończyłem również kursy specjalizujące się w przygotowaniu
          motorycznym sportowców. Aktualnie jestem również Trenerem bramkarzy w
          Akademii Rozwój Katowice, oraz zawodnikiem tego klubu.
          <br />
          <br />
          Uwielbiam prowadzić treningi i zawsze czekam na Was z ogromem
          pozytywnej energii. Specjalizuje się w treningu personalnym i
          przygotowaniu motorycznym sportowców różnych dyscyplin.
        </p>
      )
    },
    {
      imgSrc: '/personalTrainersImages/image6.jpg',
      alt: 'Daniel Patla - trener personalny, kalistenika',
      name: 'Daniel Patla',
      services: 'trening personalny, kalistenika',
      description: (
        <p>
          Aktywność fizyczna jest w moim sercu odkąd pamiętam.
          <br />
          <br />
          Już jako 8-latek uczęszczałem w zawodach tenisa stłowego oraz
          biegowych.
          <br />
          Z czasem moją uwagę przyciagnął trening z własną masą ciała oraz sport
          zwany Street-Workout, w tym też sie specjalizuję.
          <br />
          <br />
          Odbyłem wiele kursów i szkoleń związanych ściśle z tym tematem oraz
          przeczytałem sporo książek i wciąż staram się poszerzać swoją wiedzą.
          <br />
          <br />
          Jeśli chcesz poznać możliwości jakimi dysponuje twoje ciało to
          zapraszam, będziemy razem działać!
        </p>
      )
    },
    {
      imgSrc: '/personalTrainersImages/image4.png',
      alt: 'Kasia Szlendak - trener personalny i fizjoterapeuta - trening personalny, trening medyczny, fizjoterapia, fizjoterapia uroginekologiczna, odnowa biologiczna',
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
      <NextSeo
        title='Doświadczeni Trenerzy Personalni w Katowicach Ligocie'
        description='Witaj w naszym treningowym świecie! Jesteśmy zespołem doświadczonych trenerów, specjalizujących się w różnych dziedzinach. Zapewniamy indywidualne podejście, profesjonalne wsparcie i skuteczne treningi zdrowotne. Nasza lista trenerów obejmuje ekspertów z dziedziny treningu personalnego, treningu medycznego oraz przygotowania motorycznego. Wybierz nas i rozpocznij swoją drogę do osiągnięcia najlepszych wyników!'
        // canonical='https://www.alibistudio.pl/nasze-treningi/o-nas'
      />
      <Nav page='O NAS' />
      <TrainingAboutPageTemplate
        personaleTrainersConfig={personaleTrainersConfig}
      />
      <ContactForm />
      <ArticlesSection page={'TRAININGS'} />
      <Footer />
    </>
  );
};

export default AboutPage;
