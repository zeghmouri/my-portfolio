import Theme from '../styles/theme';
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ZEGHMOURI - Full Stack Dev</title>
        <meta name="keywords" content="zeghmouri, Mohamed Amine, zaki, developer, ESI, engineer, frontend, reactjs, projects, portfolio, Algeria, Setif"/>
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
