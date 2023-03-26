import classNames from 'classnames';
import Image from 'next/image';
import ArticleTile from './ArticleTile/ArticleTile';
import FacilityTile from './FacilityTile/FacilityTile';
import styles from './openingSection.module.scss'
import Opinion from './Opinion/Opinion';

const TrainingHomePage = () => {
    const articleTilesConfig = [
        {
            imgSrc: '/articlesImages/image1.png',
            title: 'Jak się zdrowo odżywiać i o co warto zadbać aby utrzymać dobrą wagę.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere vulputate ex, ut vehicula purus vestibul'
        },
        {
            imgSrc: '/articlesImages/image2.png',
            title: 'Jak się zdrowo odżywiać i o co warto zadbać aby utrzymać dobrą wagę.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere vulputate ex, ut vehicula purus vestibul'
        },
        {
            imgSrc: '/articlesImages/image3.png',
            title: 'Jak się zdrowo odżywiać i o co warto zadbać aby utrzymać dobrą wagę.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere vulputate ex, ut vehicula purus vestibul'
        },
        {
            imgSrc: '/articlesImages/image3.png',
            title: 'Jak się zdrowo odżywiać i o co warto zadbać aby utrzymać dobrą wagę.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere vulputate ex, ut vehicula purus vestibul'
        }
    ];

    const facilityTilesConfig = [
        {
            icon: '1',
            title: 'Zapraszamy na kawę',
            text: <p>Wpadnij chwilkę przed treningiem lub zostań po, żeby odpocząć i porozmawiać o wszystkim i o niczym.
            <br/>
            <br/>
            U nas zawsze jest ktoś z kim można zamienić parę zdań.</p>
        },
        {
            icon: '2',
            title: 'Przyprowadź swojego psiaka',
            text: <p>W naszym studio na stałe mieszka Luna - nasz wspaniały psi kompan i czeka na towarzystwo Twojego psiaka. 
            Głaskanie i mizianie Twojej pociechy przez trenerów za darmo :)</p>
        },
        {
            icon: '3',
            title: 'Trening 1:1 z trenerem',
            text: <p>Trener jest w 100% skupiony na Tobie, układa plan pod Ciebie i dba o Twój rozwój.
            <br />
            <br />
            Chcesz schudnąć, poprawić siłę lub kondycję, zdrowo przybrać  na masie, przygotować się do zawodów? My Ci pomożemy!</p>
        },
        {
            icon: '4',
            title: 'Masaż z naszym fizjo po treningu',
            text: <p>Aby w pełni zadbać o regenerację po treningu i jeszcze lepsze efekty, zapraszamy do naszego fizjoterapeuty.</p>,
            link: true
        }
    ]
     return (
        <>
     <div className={classNames("container", styles.trainingHomePageContainer)}>
     <section className={styles.openingSection}>
        <div className={styles.textContainer}>
            <h1>Cześć, to właśnie <span className={styles.goldText}>tutaj</span> chciałeś trafić!</h1>
            <h3>
                W Alibi Studio zadbamy o <span className={styles.goldText}>Twoje zdrowie</span>. U nas potrenujesz 1:1 z trenerem personalnym, przygotujesz się do <span className={styles.goldText}>zawodów</span> (sporty walki, biegi i inne sporty), poprawisz <span className={styles.goldText}>kondycję i siłę</span>, a przede wszystkim <span className={styles.goldText}>zadbasz o swoje ciało</span> i będziesz się <span className={styles.goldText}>dobrze bawił</span>.
            </h3>
        </div>
        <div className={styles.imagesContainer}>
        <figure className={styles.biggerHomePageImage}>
          <Image
            src='/trainingHomePageImages/image1.png'
            alt='zdjęcie z treningu'
            layout='fill'
          />
        </figure>

        <div className={styles.smallerImages}>

        <figure className={styles.homePageImage}>
          <Image
            src='/trainingHomePageImages/image2.png'
            alt='zdjęcie z treningu'
            layout='fill'
          />
        </figure>

        <figure className={styles.homePageImage}>
          <Image
            src='/trainingHomePageImages/image3.png'
            alt='zdjęcie z treningu'
            layout='fill'
          />
        </figure>

        <figure className={styles.homePageImage}>
          <Image
            src='/trainingHomePageImages/image4.png'
            alt='zdjęcie z treningu'
            layout='fill'
          />
        </figure>
        </div>

        </div>
     </section>
     </div>
     <div className={styles.contactBelt}>
        <div className={classNames("container", styles.contactBeltContainer)}>
            <h4>ZADZWOŃ: +48 728 974 997</h4>
            <div className={styles.verticalBelt}></div>
            <h4>NAPISZ DO NAS: alibi@alibistudio.pl</h4>
        </div>
     </div>

     <div className={classNames("container", styles.trainingHomePageContainer)}>
     <section className={styles.faciliesSection}>
        <header>
            <h2>
            DOBRA ATMOSFERA JEST DLA NAS NAJWAŻNIEJSZA...
            </h2>
            </header>
        <main className={styles.facilityTilesContainer}>
            {facilityTilesConfig.map(facilityTile => <FacilityTile icon={facilityTile.icon} title={facilityTile.title} text={facilityTile.text} link={false || facilityTile.link}/>)}
        </main>
     </section>

     <section className={styles.infoSection}>
        <header>
            <h2>NASZE STUDIO NIE JEST TYLKO SIŁOWNIĄ. JEST TO DOM, W KTÓRYM KAŻDY Z WAS JEST MILE WIDZIANY 
                (ZWŁASZCZA NA TRENINGU  ;) )
            </h2>
        </header>
        <main className={styles.infoTileMain}>
            <div className={styles.infoTile}>
                <h4>W Alibi Studio nie obowiązują sztywne godziny otwarcia, zawsze umawiamy <span className={styles.goldText}>indywidualnie godziy treningów</span> tak aby dostosować je do <span className={styles.goldText}>Twoich potrzeb</span> i <span className={styles.goldText}>mozliwości</span>. Kameralna atmosfera oraz industrialny wystrój sprawią, że poczujesz się tutaj <span className={styles.goldText}>jak w domu</span>.</h4>
                <figure className={styles.infoImage}>
                    <Image
                        src='/trainingHomePageImages/image5.png'
                        alt='zdjęcie z treningu'
                        layout='fill'
                    />
                </figure>
            </div>

            <div className={styles.infoTile}>
                <figure className={styles.infoImage}>
                    <Image
                        src='/trainingHomePageImages/image6.png'
                        alt='zdjęcie z treningu'
                        layout='fill'
                    />
                </figure>
                <h4>Studio składa się z dwóch pomieszczeń. W jednym znajduje się sprzęt do <span className={styles.goldText}>treingu z obciązeniem</span>, w drugim natomiast świetnie wyposażona <span className={styles.goldText}>strefa cardio</span> z wielofunkcyjną bramą do ćwiczeń. Dodatkowo w okresie letnim prowadzimy również <span className={styles.goldText}>treningi na świezym powietrzu</span> w naszym ogródku. 
                Oprócz stref przeznaczonych do treningu i fizjoterapii, znajduje się tu również <span className={styles.goldText}>kącik relaksu</span>, w którym możesz <span className={styles.goldText}>napić się kawy</span> i <span className={styles.goldText}>omówić z trenerem swoje postępy</span> i <span className={styles.goldText}>cele treningowe</span> lub odpocząć po treningu przy koktajlu białkowym.
                </h4>
            </div>
        </main>
     </section>

        <section className={styles.imagesSection}>
            <main className={styles.imagesContainer}>
                <figure className={styles.img}>
                    <Image
                        src='/imagesSectionImages/image1.png'
                        alt='zdjęcie z treningu'
                        layout='fill'
                    />
                </figure>
                
                    <div className={styles.doubleImg}>
                        <figure className={styles.smallImg}>
                            <Image
                                src='/imagesSectionImages/image2.png'
                                alt='zdjęcie z treningu'
                                layout='fill'
                            />
                        </figure>

                        <figure className={styles.smallImg}>
                            <Image
                                src='/imagesSectionImages/image3.png'
                                alt='zdjęcie z treningu'
                                layout='fill'
                            />
                        </figure>
                    </div>

                <figure className={styles.img}>
                    <Image
                        src='/imagesSectionImages/image4.png'
                        alt='zdjęcie z treningu'
                        layout='fill'
                    />
                </figure>

                <div className={styles.doubleImg}>
                        <figure className={styles.smallImg}>
                            <Image
                                src='/imagesSectionImages/image5.png'
                                alt='zdjęcie z treningu'
                                layout='fill'
                            />
                        </figure>

                        <figure className={styles.smallImg}>
                            <Image
                                src='/imagesSectionImages/image6.png'
                                alt='zdjęcie z treningu'
                                layout='fill'
                            />
                        </figure>
                    </div>
            </main>
        </section>

        <section className={styles.opinionsSection}>
        <header className={styles.opinionsHeader}>
            <h2>OPINIE NASZYCH PODOPIECZNYCH
            <div className={styles.arrows}>
                <div className={styles.icon}></div>
                <div className={styles.icon}></div>
            </div>
            </h2>
        </header>
        <main>
            <Opinion opinion='Miejsce dla ciała i duszy! Cudowni ludzie, profesjonalni trenerzy, gorąco polecam!'
            author='Patrycja Kucharczyk'
            role='Podopieczna w Alibi Studio' />
        </main>
        </section>

     <section className={styles.articlesSection}>
        <header>
            <h2>CO U NAS SŁYCHAĆ...</h2>
        </header>
        <main className={styles.articleTilesContainer}>
        {articleTilesConfig.map(articleTile => <ArticleTile imgSrc={articleTile.imgSrc} title={articleTile.title} description={articleTile.description}/>)}
        </main>
     </section>
     </div>
     </>)
};

export default TrainingHomePage;