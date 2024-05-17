import React from "react";

import styles from "./About.module.css";
import profile2 from "../../../assets/about/profile2.png";
import cursorIcon from "../../../assets/about/cursorIcon.png";
import serverIcon from "../../../assets/about/serverIcon.png";
import uiIcon from "../../../assets/about/uiIcon.png";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={profile2}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Student Developer</h3>
              <p>
                I'm interesting in learning new technologies and building websites!
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={serverIcon} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Y2 Computer Science Student</h3>
              <p>
              I'm interesting in learning new technologies and building websites!
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={uiIcon} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
              I'm interesting in learning new technologies and building websites!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
