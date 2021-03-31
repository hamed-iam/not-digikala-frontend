import styles from '../styles/Header.module.css';
import Link from 'next/link';
const Header = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a>
          <img src="/dk.png" />
        </a>
      </Link>
      <ul className={styles.links}>
        <Link href="/">
          <a>
            <li>Home</li>
          </a>
        </Link>
        <li>Login</li>
        <li>About</li>
      </ul>
    </nav>
  );
};

export default Header;
