import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import Layout, { siteTitle } from '../components/layout';
import ContactForm from '../components/contacts/contact-form';
import ContactDetails from '../components/contacts/contact-details';
import QuotationForm from '../components/contacts/quotation-form';
import PageHeading from '../components/pageHeading';

export default function Contact() {
    useEffect(() => {
        import('bootstrap/js/dist/tab');
    });
    return (
        <Layout>
            <Head>
                <title> {`Contact - ${siteTitle}`} </title>
            </Head>

            <PageHeading title="Contact" />

            <section className="bg-light py-5">
                <div className="container px-5 my-5">
                    <ul className="nav nav-tabs justify-content-center mb-5" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-contacts-tab" data-bs-toggle="pill" data-bs-target="#pills-contacts" type="button" role="tab" aria-controls="pills-contacts" aria-selected="true">contacts</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-quotation-tab" data-bs-toggle="pill" data-bs-target="#pills-quotation" type="button" role="tab" aria-controls="pills-quotation" aria-selected="false">Request A Quote</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">

                        <div className="tab-pane fade show active" id="pills-contacts" role="tabpanel" aria-labelledby="pills-contacts-tab">
                            <div className="row">
                                <div className="col-lg-4 col-xl-6">
                                    <ContactDetails />
                                </div>
                                <div className="col-lg-8 col-xl-6">
                                    <ContactForm />
                                </div>
                            </div>
                        </div>

                        <div className="tab-pane fade" id="pills-quotation" role="tabpanel" aria-labelledby="pills-quotation-tab">
                            <div className="row gx-5 justify-content-center">
                                <div className="col-lg-8 col-xl-6">
                                    <QuotationForm />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </Layout>
    )

}
