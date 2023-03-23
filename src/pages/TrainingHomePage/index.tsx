import classNames from 'classnames';
import Image from 'next/image';
import styles from './openingSection.module.scss'

const TrainingHomePage = () => {
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
     </>)
};

export default TrainingHomePage;