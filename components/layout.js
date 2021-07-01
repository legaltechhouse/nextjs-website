import Head from 'next/head';
//import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Header from './header';
import Footer from './footer';

export const siteTitle = 'Legal Tech House';

export default function Layout({ children, home }) {
    return (
        <>
            <Head>
                {/* <IE10 and below only */}
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta
                    name="description"
                    content="Legaltech house landing page"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&Cormorant+Garamond:wght@600&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css" />

            </Head>

            <Header />
            {/* <header className={styles.header}>
                {home ? (
                    <>
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/">
                                <a className={utilStyles.colorInherit}>{name}</a>
                            </Link>
                        </h2>
                    </>
                )}
            </header> */}
            <main>{children}</main>
            {/* {!home && (
                    <div>
                        <Link href="/">
                            <a>← Back to home</a>
                        </Link>
                    </div>
                )} */}
                <Footer/>
        </>
    )

}