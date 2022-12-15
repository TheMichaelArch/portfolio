import React from 'react'
import styles from './homePage.module.scss'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'


type HomePageLinksProps = {

    
}

const HomePageLinks: React.FC<HomePageLinksProps> = () => {
  return (
    <div className={styles.container2}>
      <a href="https://github.com/TheMichaelArch" target="_blank" rel="noopener noreferrer"><BsGithub color='#ffffff' size={30}/></a>
      <a href="https://www.linkedin.com/in/markus-mikael-maja/" target="_blank" rel="noopener noreferrer"><BsLinkedin color='#ffffff' size={30}/></a>
    </div>
  )
}

export default HomePageLinks
