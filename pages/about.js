import Head from 'next/head';

import Layout, { siteTitle } from '../components/layout';
import PageHeading from '../components/pageHeading';

export default function AboutUs() {
    return (
        <Layout>
            <Head>
                <title> {`About Us - ${siteTitle}`} </title>
            </Head>

            <PageHeading title="About Us" caption="Why Choose Us" />

            <section className="bg-light py-5">
                <div className="container px-5 my-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-8">
                            <p class="leads fw-normals mb-5">LegalTechHouse strives to be a dedicated technology partner for small, medium and large size law firms by providing them with state of the art responsive websites and back office.</p>

                            <p class="leads fw-normals mb-5">Our websites come with a features packed dashboard that gives access to tools for content creation, social media engagement, contact management, email marketing, day to day matters management and much more.</p>


                            <p class="leads fw-normals mb-5">With a combined experience of over 18 years in web development and software as a service, we are constantly working with our clients to create features that will help them enhance their law firm business productivity and marketing.</p>

                            <p class="leads fw-normal">Our vision is to provide a one-stop platform to help every law firm create a professional online presence with powerful easy to use technologies to support their operations.</p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )

}
