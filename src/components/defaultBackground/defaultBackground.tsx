import React from 'react'
import styles from './defaultBackground.module.scss'


type DefaultBackgroundProps = {

}

const DefaultBackground: React.FC<DefaultBackgroundProps> = () => {
  return (
    <div className={styles.container}>
      <img src='.src\assets\graphicsIceberg.jpg' ></img>
    </div>
  )
}

export default DefaultBackground
