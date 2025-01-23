import React from 'react';
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>

      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="/contact/emailIcon.png" alt="Email Icon" />
          <a href="upadhyayu901@gmail.com">upadhyayu901@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src="/contact/linkedinIcon.png"alt="Phone Icon" />
          <a href="https://www.linkedin.com/in/utkarsh-upadhyay-b2a93021b/">Utkarsh Upadhyay</a>
        </li>
        <li className={styles.link}>
          <img src="/contact/githubIcon.png" alt="Address Icon" />
          <a href="https://github.com/upadhyayu901">upadhyayu901</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;