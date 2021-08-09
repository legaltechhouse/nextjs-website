import NavBar from './navBar';
import { siteTitle } from '../components/layout';

export default function Footer() {
    return (
        <>
            <section className="call-to-action border-bottom bg-dark text-white text-center" id="signup">
                <div className="container position-relative">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <h2 className="mb-4">Join Our Mailing List</h2>
                            <p>Subscribe to keep up to date with our latest features and exclusive subscriber-only content</p>
                            <form className="form-subscribe" id="contactFormFooter" data-sb-form-api-token="API_TOKEN">

                                <div className="row">
                                    <div className="col">
                                        <input className="form-control form-control-lg" id="emailAddressBelow" type="email" placeholder="Email Address" data-sb-validations="required,email" data-sb-can-submit="no" />
                                        <div className="invalid-feedback text-white" data-sb-feedback="emailAddressBelow:required">Email Address is required.</div>
                                        <div className="invalid-feedback text-white" data-sb-feedback="emailAddressBelow:email">Email Address Email is not valid.</div>
                                    </div>
                                    <div className="col-auto"><button className="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Subscribe</button></div>
                                </div>
                                <div className="d-none" id="submitSuccessMessage">
                                    <div className="text-center mb-3">
                                        <div className="fw-bolder">Form submission successful!</div>
                                        <p>To activate this form, sign up at</p>
                                        <a className="text-white" href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                    </div>
                                </div>
                                <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="bg-dark text-white py-5">
                <div className="container">
                    <div className="row text-center align-items-center">
                        <div className="col-12 col-lg-2 text-lg-left">
                            {siteTitle}
                        </div>

                        <div className="col mt-4 mt-lg-0 text-center">
                            <ul className="nav justify-content-center">
                                <NavBar />
                            </ul>

                        </div>

                        <div className="col-12 col-lg-2 mt-4 mt-lg-0 text-lg-right">
                            <a href="#" className="mx-2"><i className="fs-5 bi-facebook" aria-hidden="true"></i></a>
                            <a href="#" className="mx-2"><i className="fs-5 bi-linkedin" aria-hidden="true"></i></a>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col text-center">
                            <small className="text-muted">© 2021 {siteTitle}</small>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}