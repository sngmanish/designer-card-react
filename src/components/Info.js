import React from "react";
import styles from "./Info.module.css";
import ProfilePicture from "../assets/Profile_Picture.jpg";
import emailLogo from "../assets/Email-logo.png";

export default function Info() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img
          className={styles.avatar}
          src={ProfilePicture}
          alt="Manish Singh"
        />
      </header>
      <div className={styles.bio}>
        <h1 className={styles.name}>Manish Singh</h1>
        <p className={styles.title}>Artsy Full Stack Developer</p>
        <p className={styles.small}>Website: <a href="http://manishsng.com/">manishsng.com</a></p>
        <div className={styles.contacts}>
          
          <a 
          target="_blank"
          rel="noopener noreferrer"
          className= {styles.email}
          href="mailto:manish.bk07@gmail.com">
          <button><img className={styles.icons} src={emailLogo} alt="" /><span >CONTACT ME</span></button>
          </a>
         
        </div>
      </div>
    </div>
  );
}


//  <a
// target="_blank"
// rel="noopener noreferrer"
// className={`${styles.links} ${styles.linkedin}`}
// href="https://www.linkedin.com/in/sngmanish/"
// >
// <img className={styles.icons} src={linkendinLogo} alt="" />
// LinkedIn
// </a>
