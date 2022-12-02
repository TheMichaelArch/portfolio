import React from 'react'
import styles from './contacts.module.scss'

type ContactsProps = {

}

const Contacts: React.FC<ContactsProps> = () => {
  return (
    <div className={styles.container}>
      Contacts
      <a href="https://www.linkedin.com/in/markus-mikael-maja/"> LinkedIn</a>
      Discord

    </div>
  )
}

export default Contacts
