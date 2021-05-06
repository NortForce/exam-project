import React from 'react'
import { Link } from 'react-router-dom'
import CONSTANTS from 'constants.js'
import Logo from 'components/Logo'
import styles from './AuthPageHeader.module.scss'

const AuthPagesHeader = ({ path, name }) => {
  return (
    <section className={styles.header}>
      <Logo src={`${CONSTANTS.STATIC_IMAGES_PATH}logo.png`} alt='logo' />
      <Link to={path} className={styles.linkContainer}>
        <span>{name}</span>
      </Link>
    </section>
  )
}

export default AuthPagesHeader
