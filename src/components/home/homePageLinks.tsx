import React from 'react'
import styles from './homePage.module.scss'

type HomePageLinksProps = {

    
}

const HomePageLinks: React.FC<HomePageLinksProps> = () => {
  return (
    <div className={styles.container2}>
      <a href="https://github.com/TheMichaelArch" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://www.linkedin.com/in/markus-mikael-maja/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </div>
  )
}

export default HomePageLinks
