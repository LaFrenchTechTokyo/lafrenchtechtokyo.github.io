export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand" href="#page-top">
          <img src="assets/img/navbar-logo.png" alt="..." />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu<i className="fas fa-bars ms-1"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#services">
                What we do
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">
                Who we are
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                Our Community
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#team">
                Our events
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Get involved
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
