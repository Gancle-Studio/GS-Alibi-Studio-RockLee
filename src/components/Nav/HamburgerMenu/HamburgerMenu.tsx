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
        <div className={styles.hamburgerMenu}>
          <div className={styles.navItem} onClick={onNavClick}>
            <Link href='/fizjoterapia'>FIZJOTERAPIA</Link>
          </div>

          <div className={styles.navItem} onClick={onNavClick}>
            <Link
              href={
                page === 'PHYSIO'
                  ? '/fizjoterapia/o-nas'
                  : '/nasze-treningi/o-nas'
              }
            >
              O NAS
            </Link>
          </div>

          <div className={styles.navItem} onClick={onNavClick}>
            <Link href='/nasze-treningi/trening-personalny'>TRENINGI</Link>
          </div>

          <div className={styles.navItem} onClick={onNavClick}>
            <Link
              href={
                page === 'PHYSIO'
                  ? '/fizjoterapia/cennik'
                  : '/nasze-treningi/cennik'
              }
            >
              CENNIK
            </Link>
          </div>

          <div className={styles.navItem} onClick={onNavClick}>
            <Link
              href={
                page === 'PHYSIO'
                  ? '/fizjoterapia/blog'
                  : '/nasze-treningi/blog'
              }
            >
              BLOG
            </Link>
          </div>

          <div className={styles.navItem} onClick={onNavClick}>
            <li>KONTAKT</li>
          </div>

          <div className={styles.navItem} onClick={onNavClick}>
            <Icon icon={IconType.Facebook} />
          </div>

          <div className={styles.navItem} onClick={onNavClick}>
            <Icon icon={IconType.Instagram} />
          </div>
        </div>
      )}
    </>
  );
}

export default HamburgerMenu;
