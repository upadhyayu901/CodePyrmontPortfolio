import React from 'react'
import { getImageUrl } from '../../utils'

import styles from "./Hero.module.css";

const Hero = () => {
  return <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Utkarsh</h1>
    <p className={styles.description}>I'm a Software Engineer with a knack for Front-End Development</p>
    <a href="mailto: upadhyayu901@gmail.com" className={styles.contactBtn}>Contact Me</a>
  </div>
  <img src={getImageUrl("/hero/UtkarshHero.png")} alt="Hero Image of me" className={styles.heroImg}/>
    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur}/>
  </section>
}

export default Hero
