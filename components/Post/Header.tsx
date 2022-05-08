import styles from './Header.module.scss'

export default function Header({ title, coverImage, date, author }) {
  return (
    <div
      className={styles.cover}
      style={{
        backgroundImage: `url(${coverImage})`,
      }}
    >
      <div className={`${styles.container} container`}>
        <h1 className={styles.title}>{title}</h1>
      </div>
    </div>
  )
}
