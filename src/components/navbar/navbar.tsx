import React from 'react'
import { Link } from 'react-router-dom'
import styles from './navbar.module.scss'


type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className={styles.container}>
      <Link to="/home" className={styles.navText}>Home </Link>
      <Link to="/aboutMe" className={styles.navText}>About Me</Link>
      <Link to="/contacts" className={styles.navText}>Contacts</Link>
    </nav>
  )
}

export default Navbar
