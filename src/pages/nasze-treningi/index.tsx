import ArticlesSection from 'components/ArticlesSection/ArticlesSection';
import TrainingHomePageTemplate from 'templates/TrainingHomePageTemplate/TrainingHomePageTemplate';
import ContactForm from '../../components/ContactForm/ContactForm';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import Icon, { IconType } from 'components/Icon/Icon';
import { useContext } from 'react';
import PageModeContext, { PageModeContextType } from 'contexts/PageModeContext';
import { NextSeo } from 'next-seo';

const TrainingsHomePage = () => {
  const { handleThemeChange } = useContext(
    PageModeContext
  ) as PageModeContextType;

  handleThemeChange('TRAININGS');

  const facilityTilesConfig = [
    {
      icon: <Icon icon={IconType.Coffe} />,
      title: 'Zapraszamy na kawę',
      text: (
        <p>
          Wpadnij chwilkę przed treningiem lub zostań po, żeby odpocząć i
          porozmawiać o wszystkim i o niczym.
          <br />
          <br />U nas zawsze jest ktoś z kim można zamienić parę zdań.
        </p>
      )
    },
    {
      icon: <Icon icon={IconType.Paw} />,
      title: 'Przyprowadź swojego psiaka',
      text: (
        <p>
          W naszym studio na stałe mieszka Luna - nasz wspaniały psi kompan i
          czeka na towarzystwo Twojego psiaka. Głaskanie i mizianie Twojej
          pociechy przez trenerów za darmo :)
        </p>
      )
    },
    {
      icon: <Icon icon={IconType.Solo} />,
      title: 'Trening 1:1 z trenerem',
      text: (
        <p>
          Trener jest w 100% skupiony na Tobie, układa plan pod Ciebie i dba o
          Twój rozwój.
          <br />
          <br />
          Chcesz schudnąć, poprawić siłę lub kondycję, zdrowo przybrać na masie,
          przygotować się do zawodów? My Ci pomożemy!
        </p>
      )
    },
    {
      icon: <Icon icon={IconType.Physio} />,
      title: 'Masaż z naszym fizjo po treningu',
      text: (
        <p>
          Aby w pełni zadbać o regenerację po treningu i jeszcze lepsze efekty,
          zapraszamy do naszego fizjoterapeuty.
        </p>
      ),
      link: true
    }
  ];

  return (
    <>
      <NextSeo
        title='Profesjonalny Trening Personalny, Medyczny i Przygotowanie Motoryczne Sportowców w Katowicach'
        description='Odkryj nasze różnorodne treningi: trening personalny, trening medyczny, trening przygotowania motorycznego. Doskonała oferta dla osób szukających profesjonalnego podejścia i efektywnych treningów. Zacznij dbać o swoje zdrowie już teraz!'
        canonical='https://www.alibistudio.pl/nasze-treningi'
      />
      <Nav page='HOME' />
      <TrainingHomePageTemplate facilityTilesConfig={facilityTilesConfig} />
      <ContactForm />
      <ArticlesSection page={'TRAININGS'} />
      <Footer />
    </>
  );
};

export default TrainingsHomePage;
