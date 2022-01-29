import Layout from '../components/Layout'

export default function Index() {
  return (
    <Layout>
      <header className="masthead">
        <div className="container">
          <div className="masthead-heading text-uppercase">French Tech Tokyo</div>
          <div className="masthead-subheading text-uppercase">
            A bridge for startups between Japan and France
          </div>
          <a className="btn btn-primary btn-lg text-uppercase" href="">
            About the community fund
          </a>
        </div>
      </header>
    </Layout>
  )
}
