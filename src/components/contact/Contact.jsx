import React from 'react';
import styles from "./Contact.module.css";
import { getImageUrl } from '../../utils'

const Contact = () => {
  return <footer id="contact" className={styles.container}>
    <div className={styles.text}>
        <h2>
            Contact
            </h2>
            <p>
                Feel free to reach out!
                 </p>
 
                </div>

                <ul className={styles.links}> 
                    <li className={styles.link}><img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
                    <a href="https://mail.google.com/mail/u/0/#inbox">upadhyau901@gmail.com</a>
                    </li>

                    <li className={styles.link}><img src={getImageUrl("contact/githubIcon.png")} alt="GitHub Icon" />
                    <a href="https://github.com/upadhyayu901">upadhyau901</a>
                    </li>

                    <li className={styles.link}><img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn Icon" />
                    <a href="https://www.linkedin.com/in/utkarsh-upadhyay-b2a93021b/">Utkarsh Upadhyay</a>
                    </li>
                </ul>
  </footer>
}

export default Contact
