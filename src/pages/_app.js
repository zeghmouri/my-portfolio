import Theme from '../styles/theme';
import Head from 'next/head'
const Image = '/images/mypic.jpg'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ZEGHMOURI - Full Stack Dev</title>
        <meta name="keywords" content="zeghmouri, Mohamed Amine, zaki, developer, ESI, engineer, frontend, reactjs, projects, portfolio, Algeria, Setif"/>
        <meta name="twitter:title" content="ZEGHMOURI - Full Stack Dev"/>
        <meta property="og:title" content="ZEGHMOURI - Full Stack Dev"/>
        <meta name="twitter:site" content="@zeghmouri"/>
        <meta name="twitter:creator" content="@zeghmouri"/>
        <meta property="og:site_name" content="Zeghmouri"/>
        <meta property="og:type" content="website"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:image" content={Image}/>
        <meta property="og:image" content={Image}/>
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
