import styles from '../styles/Footer.module.css';
import { GrInstagram } from 'react-icons/gr';
import { GoMarkGithub } from 'react-icons/go';
import { FaLinkedinIn } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.name}>
        © Hamed Ghazali - {new Date().getFullYear()}
      </div>
      <ul className={styles.links}>
        <li>
          <a href="https://www.instagram.com/hamed_iam/" target="_blank">
            <GrInstagram className={styles.instagram} />
          </a>
        </li>
        <li>
          <a href="https://github.com/hamed-iam" target="_blank">
            <GoMarkGithub className={styles.github} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/hamed-ghazali/" target="_blank">
            <FaLinkedinIn className={styles.linkedin} />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
