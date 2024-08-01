import linkedInIcon from '@images/icons/linkedIn-icon.svg';
import instagramIcon from '@images/icons/instagram-icon.svg';
import githubIcon from '@images/icons/github-icon.svg';

import styles from '@components/layout/Footer.module.css';

function Footer() {
  return (
    <footer className={styles['footer']}>
      <div className={styles['top_container']}>
        <div className={styles['portfolio_link']}>
          <b>See more projects at:</b>
          <a href="/">https.//josemrangel.com</a>
        </div>
        <div className={styles['social_media']}>
          <a className={styles['social_link']} href="/">
            <span>
              <img
                className={styles['social_image']}
                src={linkedInIcon}
                alt="LinkedIn icon link"
              />
            </span>
          </a>
          <a className={styles['social_link']} href="/">
            <span>
              <img
                className={styles['social_image']}
                src={instagramIcon}
                alt="Instagram icon link"
              />
            </span>
          </a>
          <a className={styles['social_link']} href="/">
            <span>
              <img
                className={styles['social_image']}
                src={githubIcon}
                alt="Github icon link"
              />
            </span>
          </a>
        </div>
      </div>
      <small className={styles['copyright']}>
        &copy;2024 All rights reserved. Designed and developed by Jose M.
        Rangel.
      </small>
    </footer>
  );
}

export default Footer;