import styles from './Footer.module.scss'
import Logo from '../../assets/icons/logo.svg';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <p className={styles.copyright}>&#169; 2023 Next.js Blog - Do not sell my personal information</p>
    </div>
  )
}