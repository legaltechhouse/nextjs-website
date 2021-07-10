import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Date from '../components/date';
import PageHeading from '../components/pageHeading';

export default function Features({ pricing }) {
    return (
        <Layout>
            <Head>
                <title> {`Features - ${siteTitle}`} </title>
            </Head>

            <PageHeading title="Pricing" />
            
            <section className="bg-gray py-5 border-bottom">
            <div className="container">
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                {pricing.map(({ id, name, price, description }) => (
                    <article className="col" key={id}>
                        <div className="card mb-4 rounded-3 shadow-sm">

                            <div className="card-header py-3">
                                <h4 className="my-0 fw-normal">{name}</h4>
                            </div>
                            <div className="card-body">

                                <h1 className="card-title pricing-card-title">{price}<small className="text-muted fw-light">/mo</small></h1>
                                <p className="text-muted">{description}</p>
                                <a href="#" className="w-100 btn btn-lg btn-outline-primary">Sign up</a>
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