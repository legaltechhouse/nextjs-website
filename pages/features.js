import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Date from '../components/date';
import PageHeading from '../components/pageHeading';

export default function Features({ features }) {
    return (
        <Layout>
            <Head>
                <title> {`Features - ${siteTitle}`} </title>
            </Head>

            <PageHeading title="Features" />
            {features.map(({ id, title, description, image }) => (
                <article className="container col-xxl-8 px-4 py-5" key={id}>
                    <div className="row align-items-center justify-content-between">
                        {(id % 2 !== 0) && (
                            <div className="col-lg-5">
                                <img src={image} className="img-fluid rounded-3 mb-4 mb-lg-0" alt={title} />
                            </div>
                        )}
                        <div className="col-lg-6 p-lg-4">
                            <h2 className="display-6 mb-4">
                                {title}
                            </h2>
                            <p className="text-muted">{description}</p>
                        </div>

                        {(id % 2 === 0) && (
                            <div className="col-lg-5 order-md-first order-lg-last">
                                <img src={image} className="img-fluid rounded-3 mb-4 mb-lg-0" alt={title} />
                            </div>
                        )}
                    </div>
                </article>
            ))}

        </Layout>
    )

}

export async function getStaticProps() {
    const res = await fetch('https://60ce2bf891cc8e00178dcab6.mockapi.io/api/v1/features')
    const features = await res.json()

    return {
        props: {
            features,
        },
    }
}