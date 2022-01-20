import Head from 'next/head';
import Link from 'next/link';
import useSWR from 'swr';
import { fetcher } from '../utlis/helpers';
import Layout, { siteTitle } from '../components/layout';
import PageHeading from '../components/pageHeading';

export default function Pricing() {

    const { data, error } = useSWR('/api/pricing', fetcher);

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    return (
        <Layout>
            <Head>
                <title> {`Pricing - ${siteTitle}`} </title>
            </Head>

            <PageHeading title="Pricing" />

            <section className="bg-light py-5">
                <div className="container my-5">
                    <div className="row gx-3 justify-content-center">
                        {data.map(({ id, plan, price, features }) => (
                            <article className="col-md-6 col-lg-4" key={id}>
                                <div className="card mb-5 mb-xl-0 shadow border-0">
                                    <div className="card-body p-5">
                                        <div className="small text-uppercase fw-bold text-muted">{plan}</div>
                                        <div className="mb-3">
                                            <span className="display-6 fw-bold">P{price}</span>
                                            <span className="text-muted">/ mo.</span>
                                        </div>
                                        <hr/>
                                        <span className="fw-bold h5 mb-3 d-inline-block">Website Features</span>
                                        <ul className="list-unstyled mb-4">
                                            {features.website.map((feature, idx) => (
                                                <li className="mb-2" key={idx}>
                                                    <i className="bi bi-check text-primary"></i>
                                                    {feature}
                                                </li>
                                            ))}
                                            </ul>
                                        <hr/>
                                        <span className="fw-bold h5 mb-3 d-inline-block">Admin Features</span>
                                        <ul className="list-unstyled mb-4">
                                            {features.admin.map((feature, idx) => (
                                                <li className="mb-2" key={idx}>
                                                    <i className="bi bi-check text-primary"></i>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="d-grid">
                                            <Link href="/contact?requestquote">
                                                <a className="btn btn-outline-primary">Request a Quote</a>
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