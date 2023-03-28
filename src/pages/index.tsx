import ArticlesSection from 'components/ArticlesSection/ArticlesSection';
import TrainingHomePageTemplate from 'templates/TrainingHomePageTemplate/TrainingHomePageTemplate';
import ContactForm from '../components/ContactForm/ContactForm';
import Footer from '../components/Footer/Footer';
import Nav from '../components/Nav/Nav';
import Icon, { IconType } from 'components/Icon/Icon';

export const articleTilesConfig = [
  {
    imgSrc: '/articlesImages/image1.png',
    title:
      'Jak się zdrowo odżywiać i o co warto zadbać aby utrzymać dobrą wagę.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere vulputate ex, ut vehicula purus vestibul'
  },
  {
    imgSrc: '/articlesImages/image2.png',
    title:
      'Jak się zdrowo odżywiać i o co warto zadbać aby utrzymać dobrą wagę.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere vulputate ex, ut vehicula purus vestibul'
  },
  {
    imgSrc: '/articlesImages/image3.png',
    title:
      'Jak się zdrowo odżywiać i o co warto zadbać aby utrzymać dobrą wagę.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere vulputate ex, ut vehicula purus vestibul'
  },
  {
    imgSrc: '/articlesImages/image3.png',
    title:
      'Jak się zdrowo odżywiać i o co warto zadbać aby utrzymać dobrą wagę.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere vulputate ex, ut vehicula purus vestibul'
  }
];

const Home = () => {
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
      <Nav page='TRAININGS' />
      <TrainingHomePageTemplate facilityTilesConfig={facilityTilesConfig} />
      <ContactForm />
      <ArticlesSection />
      <Footer />
    </>
  );
};

export default Home;
