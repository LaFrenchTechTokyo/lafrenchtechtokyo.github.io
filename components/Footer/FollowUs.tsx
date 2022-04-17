import styles from './FollowUs.module.scss'

export default function FollowUs() {
  return (
    <div className={styles.connect}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-md-2 col-sm-6 offset-md-0">
            <div className={styles.subscribe}>
              <h5 className="follow-heading">Join our Newsletter</h5>
              <form
                noValidate
                target="_blank"
                className=""
                name="mc-embedded-subscribe-form"
                id="mc-embedded-subscribe-form"
                method="post"
                action="https://lafrenchtech.us19.list-manage.com/subscribe/post?u=d6e1fd1348d210a27a61dfd37&amp;id=813862e4f2"
              >
                <input
                  type="text"
                  placeholder="Enter your e-mail address"
                  id="mce-EMAIL"
                  className={styles.subs_input + ' me-1'}
                  name="EMAIL"
                />
                <input
                  type="submit"
                  className={styles.subs_button}
                  value="Subscribe"
                  name="subscribe"
                />
              </form>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className={styles.social}>
              <h5 className="follow-heading">Follow Us</h5>
              <div className="footer-social-icons">
                <a
                  target="_blank"
                  href="https://twitter.com/frenchtechjapan"
                  title="Twitter"
                  rel="noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  target="_blank"
                  href="https://www.facebook.com/page.FrenchTechTokyo/"
                  title="facebook"
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/french-tech-tokyo"
                  title="linkedin"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  target="_blank"
                  href="https://slack.lafrenchtechtokyo.jp"
                  title="Slack"
                  rel="noreferrer"
                >
                  <i className="fab fa-slack"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
