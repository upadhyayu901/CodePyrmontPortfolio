import React from 'react'
import styles from "./About.module.css";
import { getImageUrl } from '../../utils';

const About = () => {
  return <section className={styles.container} id="about">
    
        <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
    <img src={getImageUrl("about/about.png")} alt="me sitting with a laptop" className={styles.aboutImg}/>
    <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
    <div className={styles.aboutItemText}>
        <h3>Software Engineering Student</h3>
        <p>I'm pursuing a Bachelor's Of Engineering (Software) at the University Of Technology Sydney (UTS)</p>
    </div>
    </li>

    <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
    <div className={styles.aboutItemText}>
        <h3>Front-End Developer</h3>
        <p>I'm a Front-End Developer with experience in building responsive and optimized sites</p>
    </div>
    </li>
    </ul>
    </div>
  </section>
}

export default About
