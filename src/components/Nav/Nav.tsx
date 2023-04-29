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
            src={mode === 'PHYSIO' ? '/alibi_zdrowie.png' : '/alibi_studio.png'}
            alt='Gancle Studio - Footer'
            layout='fill'
          />
        </figure>
        <h4>
          <Link href={mode === 'PHYSIO' ? '/fizjoterapia' : '/nasze-treningi'}>
            {mode === 'PHYSIO' ? (
              <span>ALIBI ZDROWIE</span>
            ) : (
              <span>ALIBI STUDIO</span>
            )}
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
          <a
            href='https://www.facebook.com/profile.php?id=100086469343751'
            target='_blank'
            rel='norefferrer noopener'
          >
            <Icon icon={IconType.Facebook} />
          </a>
        </li>
        <li>
          <a
            href='https://www.instagram.com/alibi_studio/'
            target='_blank'
            rel='norefferrer noopener'
          >
            <Icon icon={IconType.Instagram} />
          </a>
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
        <a
          href='https://www.facebook.com/ALIBISTUDIOTRENINGU'
          target='_blank'
          rel='norefferrer noopener'
        >
          <Icon icon={IconType.Facebook} />
        </a>
      </li>
      <li>
        <a
          href='https://www.instagram.com/alibi_studio/'
          target='_blank'
          rel='norefferrer noopener'
        >
          <Icon icon={IconType.Instagram} />
        </a>
      </li>
    </ul>
  );
};

export default Nav;
