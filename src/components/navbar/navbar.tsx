import React from 'react'
import { Link } from 'react-router-dom'
import styles from './navbar.module.scss'

type NavbarProps = {

}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className={styles.container}>
      <Link to="/" className={styles.navText}>Home </Link>
      <Link to="/first" className={styles.navText}>My First Component </Link>
    </nav>
  )
}

export default Navbar
