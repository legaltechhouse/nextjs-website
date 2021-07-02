import Head from 'next/head';
//import Image from 'next/image';
import styles from './layout.module.css';

const name = 'Welcome to Legaltech House';
export const siteTitle = 'Legaltech House';

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Legaltech house coming soon"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Istok+Web:wght@700&display=swap" rel="stylesheet" />
            </Head>

            <main className={styles.container}>{children}</main>

        </>
    )

}