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
                <div className="container">
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
                                {data?.website.map(({ id, title, description, image }) => (
                                    <div className="col-sm-6 " key={id}>
                                        <Website title={title} description={description} image={image} />
                                    </div>

                                ))}
                            </div>
                        </div>

                        <div className="tab-pane fade" id="pills-admin" role="tabpanel" aria-labelledby="pills-admin-tab">
                            {data?.admin.map(({ id, title, description, image }, inx) => (
                                <article className="row align-items-center justify-content-between p-3 py-md-5" key={id}>
                                    <Admin title={title} description={description} image={image} pos={inx}/>
                                </article>
                            ))}
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