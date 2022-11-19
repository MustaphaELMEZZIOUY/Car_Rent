import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

function MyApp({ Component, pageProps }: AppProps) {

  return <>
    <header>
      <NavBar />
    </header>
    <main className={styles.main}>
      <Component {...pageProps} />
    </main>
    <Footer />
  </>
}

export default MyApp
