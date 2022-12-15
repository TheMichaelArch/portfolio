import React from 'react'
import styles from './contacts.module.scss'

type ContactsProps = {

}

const Contacts: React.FC<ContactsProps> = () => {
  return (
    <div className={styles.container}>
      <h1>Contacts</h1>
      <a href="https://www.linkedin.com/in/markus-mikael-maja/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <p> Discord: [M&#97;rkus M&#97;j&#97;#3230] </p>
      <a href="mailto:m&#97;j&#97;.m&#97;rkus.mik&#97;el@gm&#97;il.com">Email me</a>
      <p> m&#97;j&#97;.m&#97;rkus.mik&#97;el@gm&#97;il.com </p>

    </div>
  )
}

export default Contacts
