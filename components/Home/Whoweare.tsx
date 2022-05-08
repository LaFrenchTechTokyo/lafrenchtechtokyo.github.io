import Link from 'next/link'

export default function Whoweare() {
  return (
    <section className="page-section bg-light" id="portfolio">
      <div className="container">
        <div className="text-center section-heading-container">
          <h3 className="section-subheading text-muted">Meet the team</h3>
          <h2 className="section-heading text-uppercase">Who we are</h2>
          <div className="section-text text-muted">
            The French Tech Tokyo is the hub of the French Tech scene based in Tokyo and Japan,
            bringing together companies, startups, investors, events and organizations.
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="portfolio-item">
              <Link href="/our-vision">
                <a className="portfolio-link">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src="/assets/img/French_Tech_Tokyo_Our_Vision-640x400.png"
                    alt="French Tech Tokyo Vision"
                  />
                </a>
              </Link>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Our Vision</div>
                <div className="portfolio-caption-subheading text-muted">
                  We want to help entrepreneurs based in Japan, to succeed and have a better
                  understanding of the Japanese startup ecosystem.
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="portfolio-item">
              <Link href="/our-team">
                <a className="portfolio-link">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src="/assets/img/French-Tech-Team-640x400.jpeg"
                    alt="French Tech Tokyo Team"
                  />
                </a>
              </Link>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Our Team</div>
                <div className="portfolio-caption-subheading text-muted">
                  Meet the fine folks that helps keep the trains running.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
