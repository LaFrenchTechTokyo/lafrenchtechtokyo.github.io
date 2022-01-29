import Footer from './Footer'
import Meta from './meta'
import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Navbar />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
