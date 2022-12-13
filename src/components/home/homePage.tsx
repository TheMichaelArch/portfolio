import React from 'react'
import styles from './homePage.module.scss'

type HomePageProps = {

}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div className={styles.container}>
      <h1>My Portfolio</h1>
      <p>Welcome to my page</p>
      <p>Take a look around, it is not enormous!</p>
    </div>
  )
}

export default HomePage
