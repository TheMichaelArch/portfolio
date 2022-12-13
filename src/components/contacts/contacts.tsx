import React from 'react'
import styles from './contacts.module.scss'

type ContactsProps = {

}

const Contacts: React.FC<ContactsProps> = () => {
  return (
    <div className={styles.container}>
      <h1>Contacts</h1>
      <a href="https://www.linkedin.com/in/markus-mikael-maja/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <p> Discord: [Markus Maja#3230] </p>
      <p> Gmail: maja.markus.mikael@gmail.com </p>

    </div>
  )
}

export default Contacts
