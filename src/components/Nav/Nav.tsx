import styles from './Nav.module.scss';
import Image from 'next/image';
import Icon, { IconType } from 'components/Icon/Icon';
import classNames from 'classnames';
import Link from 'next/link';
import { useState } from 'react';
import useWindowSize from 'hooks/useWindowSize';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';

type pageType = 'PHYSIO' | 'TRAININGS';

interface INavProps {
  page: pageType;
}

const Nav = ({ page }: INavProps) => {
  const windowSize = useWindowSize();
  const [logoClicked, setLogoClicked] = useState(false);

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
          <Link href={page === 'PHYSIO' ? '/fizjoterapia' : '/nasze-treningi'}>
            ALIBI STUDIO
          </Link>
        </h4>
      </div>
      {windowSize.width >= 1024 && (
        <ul className={styles.navLinks}>
          <li>
            <Link href='/fizjoterapia'>FIZJOTERAPIA</Link>
          </li>
          <li>
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
          <li>
            <Link href='/nasze-treningi/trening-personalny'>TRENINGI</Link>
          </li>
          <li>
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
          <li>
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
          <li>KONTAKT</li>
          <li>
            <Icon icon={IconType.Facebook} />
          </li>
          <li>
            <Icon icon={IconType.Instagram} />
          </li>
        </ul>
      )}

      {windowSize.width < 1024 && (
        <div className={styles.hamburgerMenu}>
          <HamburgerMenu logoClicked={logoClicked} page={page} />
        </div>
      )}
    </nav>
  );
};

export default Nav;
