import React from 'react'
import styles from './aboutMe.module.scss'

type AboutMeProps = {

}

const AboutMe: React.FC<AboutMeProps> = () => {
  return (
    <div className={styles.container}>
      <h1>About Me</h1>
      <div className={styles.container2}>
        <p>My name is Markus Mikael Maja</p>
      </div>
      <p className={styles.paragraph}>I am an enthusiastic about coding, creating working software and games.
        I also quite often dive into studying why or how code works or how it is used in different applications.</p>
      <p className={styles.paragraph}>Since world of coding is a never seizing in terms of development and innovation, I am always attempting to find and 
        learn new information about different codes. Including the pros and cons of the possible languages used.</p>
      <div className={styles.container2}>
        <p>
          I attempt to be as creative as possible and come up with solutions, 
          specially about optimizing functions. Since I think and believe that optimization has become less and less the focus for 
          many developers/coders, since hardware is advancing at a rapid phase and 
          the processing speeds have increased tremendously.
        </p>
      </div>
      <p>I also intent to upload all my testing and small applications to my <a href="https://github.com/TheMichaelArch" target="_blank" rel="noopener noreferrer">GitHub</a></p>
      <div className={styles.container2}>
        <p>List of learned languages:</p>
          <ul>
            <li>C</li>
            <li>C++</li>
            <li>Lua</li>
            <li>C#</li>
            <li>Python</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>TypeScript</li>
            <li>JavaScript</li>
          </ul>
      </div>
    </div>
    
    
  )
  
}

export default AboutMe
