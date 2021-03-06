import Link from 'next/link'
import styles from './Hero.module.scss'

export default function Hero() {
  return (
    <header className="masthead">
      <div className="container">
        <div className="masthead-heading text-uppercase">French Tech Tokyo</div>
        <div className="masthead-subheading text-uppercase">
          <h1>A bridge for startups between Japan and France</h1>
        </div>
        <a className="btn btn-primary btn-lg text-uppercase" href="">
          About the community fund
        </a>
      </div>
    </header>
  )
}
