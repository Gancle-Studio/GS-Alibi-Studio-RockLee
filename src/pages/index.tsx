import TrainingHomePageTemplate from 'templates/TrainingHomePageTemplate/TrainingHomePageTemplate';
import ContactForm from '../components/ContactForm/Form';
import Footer from '../components/Footer/Footer';
import Nav from '../components/Nav/Nav';

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
      icon: '1',
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
      icon: '2',
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
      icon: '3',
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
      icon: '4',
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
      <Nav />
      <TrainingHomePageTemplate facilityTilesConfig={facilityTilesConfig} />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;
