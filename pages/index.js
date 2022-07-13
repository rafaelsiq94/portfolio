import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Skills from './skills'
import Contact from './contact'
import Resume from './resume'
import Main from './home'
import useTranslation from 'next-translate/useTranslation';

export default function Home() {
  let { t } = useTranslation();

  return (
    <div>
      <Head>
        <title>Rafael de Siqueira</title>
        <meta name="description" content="Generated by create next app" />
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
