import styles from './Nav.module.scss';
import Image from 'next/image';
import Icon, { IconType } from 'components/Icon/Icon';
import classNames from 'classnames';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav className={classNames('container', styles.navContainer)}>
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
        <li>
          <Link href='/nasze-treningi/o-nas'>O NAS</Link>
        </li>
        <li>
          <Link href='/nasze-treningi/trening-personalny'>TRENINGI</Link>
        </li>
        <li>CENNIK</li>
        <li>BLOG</li>
        <li>KONTAKT</li>
        <li>
          <Icon icon={IconType.Facebook} />
        </li>
        <li>
          <Icon icon={IconType.Instagram} />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
