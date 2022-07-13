import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Skills from './skills'
import Contact from './contact'
import Resume from './resume'
import Main from './home'

export default function Home() {

  return (
    <div>
      <Head>
        <title>Rafael de Siqueira</title>
        <meta name="description" content="Developer website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Main/>
      <Skills/>
      <Resume/>
      <Contact/>
      <Footer/>
    </div>
  )
}
