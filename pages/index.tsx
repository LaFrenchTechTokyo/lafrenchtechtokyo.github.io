import Layout from '../components/Layout'
import Hero from '../components/Home/Hero'
import Whatwedo from '../components/Home/Whatwedo'
import Whoweare from '../components/Home/Whoweare'
import Community from '../components/Home/Community'
// import Team from '../components/Home/Team'
import Contact from '../components/Home/Contact'

export default function Index() {
  return (
    <Layout>
      <Hero />
      <Whatwedo />
      <Whoweare />
      <Community />
      {/* <Team /> */}
      {/* <Contact /> */}
    </Layout>
  )
}
