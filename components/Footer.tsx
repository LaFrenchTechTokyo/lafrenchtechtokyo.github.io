import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <div className="container">
          Copyright © 2022 La French Tech Tokyo
        </div>
      </div>
    </footer>
  )
}
