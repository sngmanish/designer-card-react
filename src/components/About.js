import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <main className={styles.about}>
      <h2 className={styles.header}>About</h2>
      <p className={styles.texts}>
        I am an Full-stack dev  who loves building things.
        I am Interest in making things simple and automating daily tasks. 
        I try to keep up with security and best practices,
         and am always looking for new things to learn.
      </p>
    </main>
  );
}
