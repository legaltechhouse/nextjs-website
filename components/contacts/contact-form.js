import { useState } from "react";

export default function ContactForm() {
    // States for contact form fields

    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    //   Form validation state
    const [errors, setErrors] = useState({});

    //   Setting button text on form submission
    const [buttonText, setButtonText] = useState("Send");

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
        if (phone.length <= 0) {
            tempErrors["phone"] = true;
            isValid = false;
        }
        if (message.length <= 0) {
            tempErrors["message"] = true;
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
            const res = await fetch("/api/contactForm", {
                body: JSON.stringify({
                    email,
                    fullname,
                    phone,
                    message,
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
                setButtonText("Send");
                return;
            }
            setShowSuccessMessage(true);
            setShowFailureMessage(false);
            setButtonText("Send");
        }
        console.log(fullname, email, phone, message);
    };

    return <form id="contactForm" onSubmit={handleSubmit}>
        {/* Name input */}
        <div className="form-floating mb-3">
            <input className="form-control" id="name" type="text" placeholder="Enter your name..." 
                value={fullname}
                onChange={(e) => {
                    setFullname(e.target.value);
                }} />
            <label htmlFor="name">Full name</label>
            <div className="invalid-feedback">A name is required.</div>
        </div>
        {/* Email address input */}
        <div className="form-floating mb-3">
            <input className="form-control" id="email" type="email" placeholder="name@example.com" 
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                }} />
            <label htmlFor="email">Email address</label>
            <div className="invalid-feedback">An email is required.</div>
            <div className="invalid-feedback">Email is not valid.</div>
        </div>
        {/* Phone number input */}
        <div className="form-floating mb-3">
            <input className="form-control" id="phone" type="tel" placeholder="(+267) 0000 0000" 
                value={phone}
                onChange={(e) => {
                    setPhone(e.target.value);
                }} />
            <label htmlFor="phone">Phone number</label>
            <div className="invalid-feedback">A phone number is required.</div>
        </div>
        {/* Message input */}
        <div className="form-floating mb-3">
            <textarea className="form-control" id="message" type="tel" placeholder="Type Message here" 
                value={message}
                onChange={(e) => {
                    setMessage(e.target.value);
                }}></textarea>
            <label htmlFor="message">Message</label>
            <div className="invalid-feedback">A phone number is required.</div>
        </div>
        {/* has successfully submitted */}
        <div className="d-none" id="submitSuccessMessage">
            <div className="text-center mb-3">
                <div className="fw-bolder">Form submission successful!</div>
            </div>
        </div>
        {/* an error submitting the form */}
        <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
        {/* Submit Button */}
        <div className="d-grid"><button className="btn btn-primary btn-lg" id="submitButton" type="submit">{buttonText}</button></div>
    </form>
}