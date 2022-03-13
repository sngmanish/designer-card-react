import React from "react";
import styles from "./Footer.module.css";
import twitterLogo from "../assets/Twitter-logo.png";
import githubLogo from "../assets/Github-logo.png";
import instaLogo from "../assets/Instagram-logo.png";
import freecodecampLogo from "../assets/freecodecamp-logo.png";
import linkedinLogo from "../assets/LinkedIn-logo.png";




export default function Footer() {
  const getYear = () =>  setDate(new Date().getFullYear())
  return (
    <footer className={styles.footer}>
      <div className={styles.socialMedia}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={styles.links}
          href="https://github.com/sngmanish"
        >
          <img
            src={githubLogo}
            alt="Click to open Manish's GitHub"
            className={styles.socialIcons}
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={styles.links}
          href="https://twitter.com/sngmanish"
        >
          <img
            src={twitterLogo}
            alt="Click to open Manish's Twitter"
            className={styles.socialIcons}
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={styles.links}
          href="https://www.instagram.com/sngmanish/"
        >
          <img
            src={instaLogo}
            alt="Click to open Manish's Instagram"
            className={styles.socialIcons}
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={styles.links}
          href="https://www.freecodecamp.org/fccbba00af4-0f49-4e41-bdf8-293a01198d23"
        >
          <img
            src={freecodecampLogo}
            alt="Click to open Manish's FreeCodeCamp Account"
            className={styles.socialIcons}
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={styles.links}
          href="https://www.linkedin.com/in/sngmanish/"
        >
          <img
            src={linkedinLogo}
            alt="Click to open Manish's LinkedIn"
            className={styles.socialIcons}
          />
        </a>
      </div>
      <p className= {styles.footerText}><strong>Made with ♥ by Manish Singh | Copyright © {new Date().getFullYear()}</strong></p>
    </footer>
  );
}

// function getYear()  {
//   return new Date().getFullYear();
// }
