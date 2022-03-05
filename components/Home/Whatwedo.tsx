export default function Whatwedo() {
  return (
    <section className="page-section" id="services">
      <div className="container">
        <div className="text-center section-heading-container">
          <h3 className="section-subheading text-muted">Learn about</h3>
          <h2 className="section-heading text-uppercase">What we do</h2>
        </div>
        <div className="row text-center">
          <a
            className="col-lg-3 col-sm-6"
            title="A mission for startups"
            href="/support-for-startups/"
          >
            <span className="fa-stack fa-4x">
              <i className="fas fa-circle fa-stack-2x text-primary"></i>
              <i className="far fa-star fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="my-3 text-dark">A mission for startups</h4>
            <p className="text-muted">
              French Tech helps all members of its ecosystem to create exchanges and help them grow.
            </p>
          </a>
          <a className="col-lg-3 col-sm-6" title="Get a French Tech Visa" href="/french-tech-visa/">
            <span className="fa-stack fa-4x">
              <i className="fas fa-circle fa-stack-2x text-primary"></i>
              <i className="far fa-compass fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="my-3 text-dark">Get a French Tech Visa</h4>
            <p className="text-muted">
              One of the latest initiatives to attract foreign talent to France is the introduction
              of the French Tech Visa.
            </p>
          </a>
          <a className="col-lg-3 col-sm-6" title="About the community fund" href="/community-fund/">
            <span className="fa-stack fa-4x">
              <i className="fas fa-circle fa-stack-2x text-primary"></i>
              <i className="far fa-money-bill-alt fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="my-3 text-dark">About the community fund</h4>
            <p className="text-muted">
              The French government earmarked put wind in the sails of French Tech community and
              ecosystem initiatives.
            </p>
          </a>
          <a className="col-lg-3 col-sm-6" title="Attend our events" href="/events/">
            <span className="fa-stack fa-4x">
              <i className="fas fa-circle fa-stack-2x text-primary"></i>
              <i className="far fa-calendar fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="my-3 text-dark">Attend our events</h4>
            <p className="text-muted">
              Upcoming events and shows in which the French Tech Tokyo is implicated.
            </p>
          </a>
        </div>
      </div>
    </section>
  )
}
