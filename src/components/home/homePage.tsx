import React from 'react'
import styles from './homePage.module.scss'

type HomePageProps = {

}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div className={styles.container}>
      <h1>Header</h1>
      <p>Welcome to my Home page</p>
      <p>--</p>
    </div>
  )
}

export default HomePage
