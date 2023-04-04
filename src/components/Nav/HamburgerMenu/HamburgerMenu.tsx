import styles from './HamburgerMenu.module.scss';
import { Sling as Hamburger } from 'hamburger-react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Icon, { IconType } from 'components/Icon/Icon';

function HamburgerMenu({ logoClicked, page }: any) {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

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

      {isHamburgerMenuOpen && (
        <ul className={styles.hamburgerMenu}>
          <li className={styles.navItem} onClick={onNavClick}>
            <Link href='/fizjoterapia'>FIZJOTERAPIA</Link>
          </li>

          <li className={styles.navItem} onClick={onNavClick}>
            <Link
              href={
                page === 'PHYSIO'
                  ? '/fizjoterapia/o-nas'
                  : '/nasze-treningi/o-nas'
              }
            >
              O NAS
            </Link>
          </li>

          <li className={styles.navItem} onClick={onNavClick}>
            <Link href='/nasze-treningi/trening-personalny'>TRENINGI</Link>
          </li>

          <li className={styles.navItem} onClick={onNavClick}>
            <Link
              href={
                page === 'PHYSIO'
                  ? '/fizjoterapia/cennik'
                  : '/nasze-treningi/cennik'
              }
            >
              CENNIK
            </Link>
          </li>

          <li className={styles.navItem} onClick={onNavClick}>
            <Link
              href={
                page === 'PHYSIO'
                  ? '/fizjoterapia/blog'
                  : '/nasze-treningi/blog'
              }
            >
              BLOG
            </Link>
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
            <Icon icon={IconType.Facebook} />
          </li>

          <li className={styles.navItem} onClick={onNavClick}>
            <Icon icon={IconType.Instagram} />
          </li>
        </ul>
      )}
    </>
  );
}

export default HamburgerMenu;
