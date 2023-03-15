/** @format */

import Head from 'next/head';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import Content from '@/components/Content';
import Main from '@/components/Main';
import Text from '@/components/Text';
import styles from '@/styles/Text.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Kyle Klus | Website</title>
        <meta
          name="description"
          content="Website of Kyle Klus."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="manifest" href="/manifest.webmanifest"></link>
        <link rel="manifest" href="/manifest.json"></link>
        <link
          rel="shortcut icon"
          href="/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <Header />
      <Main>
        <div id={'top'}></div>
        <Content>
          <br />
          <br />
          <br />
          <br />
          <div className={styles.slideInWrapper}>
            <p className={[styles.xxLarge, styles.left, styles.slideInRight].join(' ')}>Hi, I am Kyle!</p>
            <br />
            <br />
            <p className={[styles.xLarge, styles.right, styles.slideInLeft].join(' ')}>I am a computer science student,</p>
            <p className={[styles.large, styles.left, styles.slideInRight].join(' ')}>a passionate cook,</p>
            <br />
            <br />
            <p className={[styles.xxLarge, styles.left, styles.slideInRight].join(' ')}>a frontend developer,</p>
            <br />
            <p className={[styles.xLarge, styles.center, styles.slideInLeft].join(' ')}>a woodworking hobbyist</p>
            <br />
            <p className={[styles.large, styles.right, styles.slideInLeft].join(' ')}>and overall a DIY lover.</p>
          </div>
        </Content>
        <Footer />
      </Main>
    </>
  );
}
