import Head from 'next/head';
import Link from 'next/link';

import Layout, { siteTitle } from '../components/layout';
import Date from '../components/date';
import PageHeading from '../components/pageHeading';
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default function Blog({ allPostsData }) {
    return (
        <Layout>
            <Head>
                <title> {`Blog - ${siteTitle}`} </title>
            </Head>

            <PageHeading title="Blog" />

            {/* Blog preview section */}

            <section className="py-5">
                <div className="container px-5">
                    <div className="row gx-5">
                        {allPostsData.map(({ id, date, title, description }) => (
                            <article className="col-lg-4 mb-5" key={id}>
                                <div className="card h-100 shadow border-0">
                                    <Link href={`/posts/${id}`}>
                                        <a>
                                            <img src="https://dummyimage.com/600x350/ced4da/6c757d" className="card-img-top" alt={title} />
                                        </a>
                                    </Link>
                                    <div className="card-body p-4">
                                        <div className="badge bg-primary bg-gradient rounded-pill mb-2">News</div>

                                        <Link href={`/posts/${id}`}>
                                            <a className="text-decoration-none link-dark stretched-link">
                                                <h2 className="h5 card-title mb-3">
                                                    {title}<br />
                                                    <span className="d-block h6">

                                                    </span>
                                                </h2>
                                            </a>
                                        </Link>
                                        <p className="card-text mb-0">{description}</p>
                                    </div>
                                    <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                                        <div className="small">
                                            <div className="text-muted"><Date dateString={date} /> &middot; 6 min read</div>
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
