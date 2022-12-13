import React from 'react'
import styles from './aboutMe.module.scss'

type AboutMeProps = {

}

const AboutMe: React.FC<AboutMeProps> = () => {
  return (
    <div className={styles.container}>
      <h1>About Me</h1>
      <p>I am an enthusiastic about coding, creating working software and games.
        I also quite often dive into studying why or how code works or how it is used in different applications.
        Since world of coding is a never seizing in terms of development and innovation, I am always attempting to find and 
        learn new information about different codes. Including the pros and cons of the possible language.</p>
      <p className={styles.container2}>I attempt to be as creative as possible and come up with solutions, 
      specially about optimizing functions. Since I think and believe that optimization has become less and less the focus for 
      many developers/coders, since hardware is advancing at a rapid phase and 
      the processing speeds have increased tremendously.</p>
    </div>
  )
}

export default AboutMe
