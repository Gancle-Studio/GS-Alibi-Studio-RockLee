import styles from './HamburgerMenu.module.scss';
import { Sling as Hamburger } from 'hamburger-react';
import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import Icon, { IconType } from 'components/Icon/Icon';
import PageModeContext, { PageModeContextType } from 'contexts/PageModeContext';

type PageType = 'HOME' | 'TRENING' | 'O NAS' | 'CENNIK' | 'BLOG';

interface IHamburgerMenuProps {
  logoClicked: boolean;
  page: PageType;
}

function HamburgerMenu({ logoClicked, page }: IHamburgerMenuProps) {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] =
    useState<boolean>(false);
  const { mode } = useContext(PageModeContext) as PageModeContextType;

  useEffect(() => {
    document.body.style.overflow = isHamburgerMenuOpen ? 'hidden' : 'inherit';
  }, [isHamburgerMenuOpen]);

  useEffect(() => {
    setIsHamburgerMenuOpen(false);
  }, [logoClicked]);

  const onNavClick = () => {
    setIsHamburgerMenuOpen(false);
  };

  return (
    <>
      <div className={styles.hamburgerMenuIcon}>
        <Hamburger
          toggled={isHamburgerMenuOpen}
          toggle={setIsHamburgerMenuOpen}
        />
      </div>

      {isHamburgerMenuOpen &&
        getNavItems(mode, page, onNavClick, setIsHamburgerMenuOpen)}
    </>
  );
}

const getNavItems = (
  mode: 'TRAININGS' | 'PHYSIO',
  page: PageType,
  onNavClick: () => void,
  setIsHamburgerMenuOpen: (isHamburgerMenuOpen: boolean) => void
): JSX.Element => {
  if (mode === 'PHYSIO') {
    return (
      <ul className={styles.hamburgerMenu}>
        <li className={styles.navItem} onClick={onNavClick}>
          <Link href='/nasze-treningi'>TRENING</Link>
        </li>

        <li className={styles.navItem} onClick={onNavClick}>
          <Link href='/fizjoterapia/o-nas'>O NAS</Link>
        </li>

        <li className={styles.navItem} onClick={onNavClick}>
          <Link href='/fizjoterapia/cennik'>CENNIK</Link>
        </li>

        <li className={styles.navItem} onClick={onNavClick}>
          <Link href='/fizjoterapia/blog'>BLOG</Link>
        </li>

        <li
          className={styles.navItem}
          onClick={() => {
            setIsHamburgerMenuOpen(false);
            const contactEl = document.querySelector('#contact');
            if (contactEl) {
              contactEl.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          KONTAKT
        </li>

        <li className={styles.navItem} onClick={onNavClick}>
          <a
            href='https://www.facebook.com/profile.php?id=100086469343751'
            target='_blank'
            rel='norefferrer noopener'
          >
            <Icon icon={IconType.Facebook} />
          </a>
        </li>

        <li className={styles.navItem} onClick={onNavClick}>
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
    <ul className={styles.hamburgerMenu}>
      <li className={styles.navItem} onClick={onNavClick}>
        <Link href='/fizjoterapia'>FIZJOTERAPIA</Link>
      </li>

      <li className={styles.navItem} onClick={onNavClick}>
        <Link href='/nasze-treningi/o-nas'>O NAS</Link>
      </li>

      <li className={styles.navItem} onClick={onNavClick}>
        <Link href='/nasze-treningi/trening-personalny'>TRENINGI</Link>
      </li>

      <li className={styles.navItem} onClick={onNavClick}>
        <Link href='/nasze-treningi/cennik'>CENNIK</Link>
      </li>

      <li className={styles.navItem} onClick={onNavClick}>
        <Link href='/nasze-treningi/blog'>BLOG</Link>
      </li>

      <li
        className={styles.navItem}
        onClick={() => {
          setIsHamburgerMenuOpen(false);
          const contactEl = document.querySelector('#contact');
          if (contactEl) {
            contactEl.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        KONTAKT
      </li>

      <li className={styles.navItem} onClick={onNavClick}>
        <a
          href='https://www.facebook.com/ALIBISTUDIOTRENINGU'
          target='_blank'
          rel='norefferrer noopener'
        >
          <Icon icon={IconType.Facebook} />
        </a>
      </li>

      <li className={styles.navItem} onClick={onNavClick}>
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

export default HamburgerMenu;
