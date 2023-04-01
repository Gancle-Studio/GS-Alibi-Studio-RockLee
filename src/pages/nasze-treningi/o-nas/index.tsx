import ArticlesSection from 'components/ArticlesSection/ArticlesSection';
import ContactForm from 'components/ContactForm/ContactForm';
import Footer from 'components/Footer/Footer';
import Nav from 'components/Nav/Nav';
import TrainingAboutPageTemplate from 'templates/TrainingAboutPageTemplate/TrainingAboutPageTemplate';

const AboutPage = () => {
  const personaleTrainersConfig = [
    {
      imgSrc: '/personalTrainersImages/image1.png',
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
      <Nav page='TRAININGS' />
      <TrainingAboutPageTemplate
        personaleTrainersConfig={personaleTrainersConfig}
      />
      <ContactForm />
      <ArticlesSection />
      <Footer />
    </>
  );
};

export default AboutPage;
