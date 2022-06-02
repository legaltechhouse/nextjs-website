import NavBar from './navBar';
import { siteTitle } from '../components/layout';
import { useState } from "react";

export default function Footer() {
    // States for contact form fields

    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");

    //   Form validation state
    const [errors, setErrors] = useState({});

    //   Setting button text on form submission
    const [buttonText, setButtonText] = useState("Subscribe");

    // Setting success or failure messages states
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);

    // Validation check method
    const handleValidation = () => {
        let tempErrors = {};
        let isValid = true;

        if (fullname.length <= 0) {
            tempErrors["fullname"] = true;
            isValid = false;
        }
        if (email.length <= 0) {
            tempErrors["email"] = true;
            isValid = false;
        }

        setErrors({ ...tempErrors });
        console.log("errors", errors);
        return isValid;
    };

    //   Handling form submit

    const handleSubmit = async (e) => {
        e.preventDefault();

        let isValidForm = handleValidation();

        if (isValidForm) {
            setButtonText("Sending");
            const res = await fetch("/api/subscribe", {
                body: JSON.stringify({
                    email,
                    fullname,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
            });

            const { error } = await res.json();
            if (error) {
                console.log(error);
                setShowSuccessMessage(false);
                setShowFailureMessage(true);
                setButtonText("Subscribe");
                return;
            }
            setFullname("");
            setEmail("");
            setShowSuccessMessage(true);
            setShowFailureMessage(false);
            setButtonText("Subscribe");
        }
        console.log(fullname, email);
    };
    return (
        <>
            <section className="call-to-action border-bottom border-transparent bg-dark text-white text-center" id="signup">
                <div className="container position-relative">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <h2 className="mb-4">Join Our Mailing List</h2>
                            <p>Subscribe to keep up to date with our latest features</p>
                            <form className="form-subscribe d-nodne" id="contactFormFooter" onSubmit={handleSubmit}>

                                <div className="row">
                                    <div className="col-sm">
                                        <input className="form-control form-control-lg text-center text-sm-start" type="text" placeholder="Name"
                                            value={fullname}
                                            onChange={(e) => {
                                                setFullname(e.target.value);
                                            }} />
                                    </div>
                                    <div className="col-sm">
                                        <input className="form-control form-control-lg text-center text-sm-start" type="email" placeholder="Email Address"
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                            }} />
                                    </div>
                                    <div className="col col-sm-auto d-grid gap-2 mx-auto mt-1 mt-sm-0">
                                        <button className="btn btn-primary btn-lg" id="submitButton" type="submit">{buttonText}</button>
                                    </div>
                                </div>
                                <div className={showSuccessMessage ? '' : 'd-none'} id="submitSuccessMessage">
                                    <div className="text-center mb-3">
                                        <div className="fw-bolder">Form submission successful!</div>
                                    </div>
                                </div>
                                <div className={showFailureMessage ? '' : 'd-none'} id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="bg-dark text-white py-5">
                <div className="container">
                    <div className="row text-center align-items-center">
                        <div className="col-12 col-lg-2 text-lg-left">
                            <span className="d-inline-block fw-bold">Legal<span className="text-primary">Tech</span>House</span>
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