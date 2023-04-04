import styles from './Nav.module.scss';
import Image from 'next/image';
import Icon, { IconType } from 'components/Icon/Icon';
import classNames from 'classnames';
import Link from 'next/link';
import { useContext, useState } from 'react';
import useWindowSize from 'hooks/useWindowSize';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';
import PageModeContext, { PageModeContextType } from 'contexts/PageModeContext';

type PageType = 'HOME' | 'TRENING' | 'O NAS' | 'CENNIK' | 'BLOG';

interface INavProps {
  page: PageType;
}

const Nav = ({ page }: INavProps) => {
  const windowSize = useWindowSize();
  const [logoClicked, setLogoClicked] = useState(false);
  const { mode } = useContext(PageModeContext) as PageModeContextType;

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
        <h4>
          <Link href={mode === 'PHYSIO' ? '/fizjoterapia' : '/nasze-treningi'}>
            ALIBI STUDIO
          </Link>
        </h4>
      </div>
      {windowSize.width >= 1024 && getNavItems(mode, page)}

      {windowSize.width < 1024 && (
        <div className={styles.hamburgerMenu}>
          <HamburgerMenu logoClicked={logoClicked} page={page} />
        </div>
      )}
    </nav>
  );
};

const getNavItems = (
  mode: 'TRAININGS' | 'PHYSIO',
  page: PageType
): JSX.Element => {
  if (mode === 'PHYSIO') {
    return (
      <ul className={styles.navLinks}>
        <li>
          <Link href='/nasze-treningi'>TRENING</Link>
        </li>
        <li className={page === 'O NAS' ? styles.activeNavItem : ''}>
          <Link href='/fizjoterapia/o-nas'>O NAS</Link>
        </li>
        <li className={page === 'CENNIK' ? styles.activeNavItem : ''}>
          <Link href='/fizjoterapia/cennik'>CENNIK</Link>
        </li>
        <li className={page === 'BLOG' ? styles.activeNavItem : ''}>
          <Link href='/fizjoterapia/blog'>BLOG</Link>
        </li>
        <li>KONTAKT</li>
        <li>
          <Icon icon={IconType.Facebook} />
        </li>
        <li>
          <Icon icon={IconType.Instagram} />
        </li>
      </ul>
    );
  }
  return (
    <ul className={styles.navLinks}>
      <li>
        <Link href='/fizjoterapia'>FIZJOTERAPIA</Link>
      </li>
      <li className={page === 'O NAS' ? styles.activeNavItem : ''}>
        <Link href='/nasze-treningi/o-nas'>O NAS</Link>
      </li>
      <li className={page === 'TRENING' ? styles.activeNavItem : ''}>
        <Link href='/nasze-treningi/trening-personalny'>TRENINGI</Link>
      </li>
      <li className={page === 'CENNIK' ? styles.activeNavItem : ''}>
        <Link href='/nasze-treningi/cennik'>CENNIK</Link>
      </li>
      <li className={page === 'BLOG' ? styles.activeNavItem : ''}>
        <Link href='/nasze-treningi/blog'>BLOG</Link>
      </li>
      <li
        onClick={() => {
          const contactEl = document.querySelector('#contact');
          if (contactEl) {
            contactEl.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        KONTAKT
      </li>
      <li>
        <Icon icon={IconType.Facebook} />
      </li>
      <li>
        <Icon icon={IconType.Instagram} />
      </li>
    </ul>
  );
};

export default Nav;
