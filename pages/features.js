import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Date from '../components/date';
import PageHeading from '../components/pageHeading';

export default function Features({ articles }) {
    return (
        <Layout>
            <Head>
                <title> {`Features - ${siteTitle}`} </title>
            </Head>

            <PageHeading title="Features" />
            {articles.map(({ id, createdAt, title, description, image }) => (
                <article className="container col-xxl-8 px-4 py-5" key={id}>
                    <div className="row align-items-center justify-content-between">
                        {(id % 2 !== 0) && (
                            <div className="col-md-5">
                                <img src={image} className="img-fluid rounded-3 mb-4 mb-md-0" alt={title} />
                            </div>
                        )}
                        <div className="col-md-7 col-lg-6">
                            <h2 className="display-4 mb-4">
                                {title}<br />
                                <span className="d-block h6">
                                    <Date dateString={createdAt} />
                                </span>
                            </h2>
                            <p className="text-muted">{description}</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>

                        {(id % 2 === 0) && (
                            <div className="col-md-5">
                                <img src={image} className="img-fluid rounded-3 mb-4 mb-md-0" alt={title} />
                            </div>
                        )}
                    </div>
                </article>
            ))}

        </Layout>
    )

}

export async function getStaticProps() {
    const res = await fetch('https://60ce2bf891cc8e00178dcab6.mockapi.io/api/v1/articles')
    const articles = await res.json()

    return {
        props: {
            articles,
        },
    }
}