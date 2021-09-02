import { useEffect } from 'react';
import Head from 'next/head';
import useSWR from 'swr';
import { fetcher } from '../utlis/helpers';
import Admin from '../components/features/admin';
import Website from '../components/features/website';
import Layout, { siteTitle } from '../components/layout';
import PageHeading from '../components/pageHeading';

export default function Features() {
    const { data, error } = useSWR('/api/features', fetcher);

    useEffect(() => {
        import('bootstrap/js/dist/tab');
    });

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    return (
        <Layout>
            <Head>
                <title> {`Features - ${siteTitle}`} </title>
            </Head>

            <PageHeading title="Features" caption="Why Choose Us" />


            <section className="py-5">
                <div className="container px-5">
                    <ul className="nav nav-tabs justify-content-center mb-5" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-website-tab" data-bs-toggle="pill" data-bs-target="#pills-website" type="button" role="tab" aria-controls="pills-website" aria-selected="true">Website</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-admin-tab" data-bs-toggle="pill" data-bs-target="#pills-admin" type="button" role="tab" aria-controls="pills-admin" aria-selected="false">Admin</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">

                        <div className="tab-pane fade show active" id="pills-website" role="tabpanel" aria-labelledby="pills-website-tab">
                            <div className="row text-center">
                                {data?.website.map(({ id, title, description }) => (
                                    <div className="col-md-6 col-lg-4" key={id}>
                                        <Website title={title} description={description} />
                                    </div>

                                ))}
                            </div>
                        </div>

                        <div className="tab-pane fade" id="pills-admin" role="tabpanel" aria-labelledby="pills-admin-tab">
                            <div className="row">
                                {data?.admin.map(({ id, title, description }) => (
                                    <div className="col-md-6" key={id}>
                                        <Admin title={title} description={description} />
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </Layout>
    )

}


// export async function getStaticProps() {
//     const res = await fetch('https://60ce2bf891cc8e00178dcab6.mockapi.io/api/v1/features')
//     const features = await res.json()

//     return {
//         props: {
//             features,
//         },
//     }
// }