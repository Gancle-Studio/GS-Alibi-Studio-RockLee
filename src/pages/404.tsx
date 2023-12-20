// pages/404.js

import Link from 'next/link';
import styles from './ErrorPage.module.scss'; // Załóżmy, że masz styl CSS
import Nav from 'components/Nav/Nav';
import classNames from 'classnames';

export default function Custom404() {
  return (
    <>
      <Nav page='HOME' />
      <div className={classNames('container', styles.errorPage)}>
        <h1>Ups! Nie możemy znaleźć tej strony.</h1>
        <p>
          Możliwe, że link, którego szukasz, został zmieniony lub strona została
          usunięta.
        </p>

        <Link className={styles.link} href='/'>
          <span className={styles.errorLink}>Wróć na stronę główną </span>
        </Link>
      </div>
    </>
  );
}
