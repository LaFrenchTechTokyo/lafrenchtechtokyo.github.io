import Link from 'next/link'

export default function Community() {
  return (
    <section className="page-section" id="about">
      <div className="container">
        <div className="text-center section-heading-container">
          <h3 className="section-subheading text-muted">La French Tech Ecosystem</h3>
          <h2 className="section-heading text-uppercase">Our Community</h2>
        </div>
        <div className="row text-center equal">
          <div className="col-4">
            <div className="h4">Members</div>
            <img className="img-fluid" src="/assets/img/group.png" alt="" />
            <p className="text-muted">
              Members are those who have expressed an interest in La French Tech Tokyo. They are
              welcome to freely join La French Tech Tokyo's events and are kept informed through the
              newsletter and social media presence.
            </p>
            <a
              className="btn btn-primary align-self-end"
              href="https://slack.lafrenchtechtokyo.jp"
              target="_blank"
              rel="noreferrer"
            >
              Join our community on Slack
            </a>
          </div>
          <div className="col-4">
            <div className="h4">Certified Members</div>
            <img className="img-fluid" src="/assets/img/medal-2.png" alt="" />
            <p className="text-muted">
              Startups who, by supporting in various way La French Tech Tokyo activities, will be
              associated to the brand and receive support from us in their goal to gain more
              visibility in the ecosystem.
            </p>
            <a
              className="btn btn-primary align-self-end"
              href="https://forms.gle/h2zBRzPGK1uooCN59"
              target="_blank"
              rel="noreferrer"
            >
              Become a certified member
            </a>
          </div>
          <div className="col-4">
            <div className="h4">Partners</div>
            <img className="img-fluid" src="/assets/img/partner.png" alt="" />
            <p className="text-muted mb-auto">
              Partners are local corporations, accelerators or institutions who wish to collaborate
              with La French Tech Tokyo with the main goal to improve the local entrepreneurial
              ecosystem.
            </p>
            <Link href="/become-a-partner/">
              <a className="btn btn-primary align-self-end justify-self-end">Become a partner</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
