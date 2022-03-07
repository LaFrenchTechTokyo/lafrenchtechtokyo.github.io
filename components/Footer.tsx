import styles from './Footer.module.scss'

const year = new Date().getFullYear()
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <div className="container">Copyright © {year} La French Tech Tokyo</div>
      </div>
    </footer>
  )
}
