import Icon, { IconType } from 'components/Icon/Icon';
import Image from 'next/image';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoAndIcons}>
        <div className={styles.logo}>
          <figure
            className={styles.logo}
            onClick={() => {
              window.location.href = '/';
            }}
          >
            <Image
              src='/alibi_studio.png'
              alt='Gancle Studio - Footer'
              layout='fill'
            />
          </figure>
          <h4>ALIBI STUDIO</h4>
        </div>
        <div className={styles.icons}>
          <div className={styles.icon}>
            <Icon icon={IconType.Facebook} />
          </div>
          <div className={styles.icon}>
            <Icon icon={IconType.Instagram} />
          </div>
        </div>
      </div>
      <ul className={styles.footerLinks}>
        <li className='p'>
          ul. Radomska 1 <br /> 40-757 Katowice
        </li>
        <li className='p'>tel: +48 728 974 997 </li>
        <li className='p'>e-mail: alibi@alibistudio.pl</li>
        <li className='p'>projekt i wykonanie: gancle-studio.pl</li>
      </ul>
    </footer>
  );
};

export default Footer;
