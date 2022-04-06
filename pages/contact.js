import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout, { siteTitle } from '../components/layout';
import ContactForm from '../components/contacts/contact-form';
import ContactDetails from '../components/contacts/contact-details';
import QuotationForm from '../components/contacts/quotation-form';
import PageHeading from '../components/pageHeading';

export default function Contact() {

    const router = useRouter();
    const { requestquote } = router.query;
    const [requestQuote, setrequestQuote] = useState(requestquote);
    const [activeContactBtn, setActiveContactBtn] = useState('active');
    const [activeContactTab, setActiveContactTab] = useState('show active');
    const [activeRequestBtn, setActiveRequestBtn] = useState('');
    const [activeRequestTab, setActiveRequestTab] = useState('');

    useEffect(() => {
        import('bootstrap/js/dist/tab');
        if (requestquote) {
            setrequestQuote(requestquote);
            setActiveContactBtn('');
            setActiveContactTab('');
            setActiveRequestBtn('active');
            setActiveRequestTab('show active');
        }
    }, [router]);
    const resetPath = (path) => {
        router.replace(router.pathname, path);
    }
    return (
        <Layout>
            <Head>
                <title>{`Contact - ${siteTitle}`}</title>
            </Head>

            <PageHeading title="Contact" />

            <section className="bg-light py-5">
                <div className="container px-xl-5 my-lg-5">
                    <ul className="nav nav-tabs justify-content-center" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className={`nav-link ${activeContactBtn}`} id="pills-contacts-tab" data-bs-toggle="pill" data-bs-target="#pills-contacts" type="button" role="tab" aria-controls="pills-contacts" aria-selected="true" onClick={() => resetPath('/contact')}>contacts</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className={`nav-link ${activeRequestBtn}`} id="pills-quotation-tab" data-bs-toggle="pill" data-bs-target="#pills-quotation" type="button" role="tab" aria-controls="pills-quotation" aria-selected="false" onClick={() => resetPath('/contact?requestquote=950')}>Request A Quote</button>
                        </li>
                    </ul>
                    <div className="tab-content p-3 p-md-5 bg-white" id="pills-tabContent">

                        <div className={`tab-pane fade ${activeContactTab}`} id="pills-contacts" role="tabpanel" aria-labelledby="pills-contacts-tab">
                            <div className="row">
                                <div className="col-lg-4 col-xl-6">
                                    <ContactDetails />
                                </div>
                                <div className="col-lg-8 col-xl-6">
                                    <ContactForm />
                                </div>
                            </div>
                        </div>

                        <div className={`tab-pane fade ${activeRequestTab}`} id="pills-quotation" role="tabpanel" aria-labelledby="pills-quotation-tab">
                            <QuotationForm price={requestQuote} />
                        </div>
                    </div>

                </div>
            </section>
        </Layout>
    )

}
