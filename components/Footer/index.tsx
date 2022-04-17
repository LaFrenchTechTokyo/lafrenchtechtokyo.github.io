import styles from './index.module.scss'
import FollowUs from './FollowUs'

const year = new Date().getFullYear()
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <FollowUs />
      <div className={styles.info}>
        <div className="container">Copyright © {year} La French Tech Tokyo</div>
      </div>
    </footer>
  )
}
