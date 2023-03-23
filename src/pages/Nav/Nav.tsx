import styles from './Nav.module.scss'
import { igIcon } from './igIcon';
import { fbIcon } from './fbIcon';
import Icon from './Icon/Icon';
import { IconType } from './Icon/Icons';
import Image from 'next/image';

const Nav = () => {
     return <nav className={styles.navContainer}>
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
        <ul className={styles.navLinks}>
            <li>FIZJOTERAPIA</li>
            <li>O NAS</li>
            <li>TRENINGI</li>
            <li>CENNIK</li>
            <li>BLOG</li>
            <li>KONTAKT</li>
            <li className={styles.icon}></li>
            <li className={styles.icon}></li>
        </ul>
     </nav>;
};

export default Nav;