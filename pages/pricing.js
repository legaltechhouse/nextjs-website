import Head from 'next/head';
import Link from 'next/link';

import Layout, { siteTitle } from '../components/layout';
import PageHeading from '../components/pageHeading';

export default function Features({ pricing }) {
    return (
        <Layout>
            <Head>
                <title> {`Features - ${siteTitle}`} </title>
            </Head>

            <PageHeading title="Pricing" />

            <section className="bg-light py-5">
                <div className="container px-5 my-5">
                    <div className="row gx-5 justify-content-center">
                        {pricing.map(({ id, plan, name, price, description }) => (
                            <article className="col-lg-6 col-xl-4" key={id}>
                                <div className="card mb-5 mb-xl-0 shadow border-0">
                                    <div className="card-body p-5">
                                        <div className="small text-uppercase fw-bold text-muted">{plan}</div>
                                        <div className="mb-3">
                                            <span className="display-6 fw-bold">P{price}</span>
                                            <span className="text-muted">/ mo.</span>
                                        </div>
                                        <h2 className="h6">{name}</h2>
                                        <p className="text-muted mb-4">{description}</p>

                                        <div className="d-grid">
                                            <Link href="/">
                                                <a className="btn btn-outline-primary">Choose plan</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    )

}

export async function getStaticProps() {
    const res = await fetch('https://60ce2bf891cc8e00178dcab6.mockapi.io/api/v1/pricing')
    const pricing = await res.json()

    return {
        props: {
            pricing,
        },
    }
}