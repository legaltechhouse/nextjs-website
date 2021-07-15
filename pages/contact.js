import Head from 'next/head';
import Link from 'next/link';

import Layout, { siteTitle } from '../components/layout';
import PageHeading from '../components/pageHeading';

export default function Contact({ contact }) {
    return (
        <Layout>
            <Head>
                <title> {`Contact - ${siteTitle}`} </title>
            </Head>

            <PageHeading title="Contact" />

            <section className="bg-light py-5">
                <div className="container px-5 my-5">
                    <p>email us</p>
                </div>
            </section>
        </Layout>
    )

}

// export async function getStaticProps() {
//     const res = await fetch('https://60ce2bf891cc8e00178dcab6.mockapi.io/api/v1/pricing')
//     const pricing = await res.json()

//     return {
//         props: {
//             pricing,
//         },
//     }
// }