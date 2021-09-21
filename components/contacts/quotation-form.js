import { useState } from "react";

export default function QuotationForm() {
    
    const [ checked, setChecked ] = useState(false);
    const onValueChange = (e) => setChecked(e.currentTarget.checked);

    return <form id="contactForm" data-sb-form-api-token="API_TOKEN">

        <div className="form-floatig mb-3">
            <input type="radio" className="btn-check" name="pricing-plan" id="individual" autoComplete="off"  onChange={onValueChange} value="0" defaultChecked />
            <label className="btn btn-outline-primary" htmlFor="individual">Individual</label>

            <input type="radio" className="btn-check" name="pricing-plan" id="small" autoComplete="off"  onChange={onValueChange} value="0" />
            <label className="btn btn-outline-primary" htmlFor="small">Small Law Firm</label>

            <input type="radio" className="btn-check" name="pricing-plan" id="large" autoComplete="off"  onChange={onValueChange} value="0" />
            <label className="btn btn-outline-primary" htmlFor="large">Large Law Firm</label>
        </div>
        {/* additional team members input */}
        <div className="form-floating mb-3">
            <input className="form-control" id="team" type="number" placeholder="Extra team members..." />
            <label htmlFor="team">Number of extra team members</label>
            <div className="invalid-feedback" data-sb-feedback="team:required">A name is required.</div>
        </div>
        {/* additional normal users input */}
        <div className="form-floating mb-3">
            <input className="form-control" id="users" type="number" placeholder="Enter your name..." data-sb-validations="required" />
            <label htmlFor="users">Number of extra Normal Users</label>
            <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
        </div>
        {/* additional admins input */}
        <div className="form-floating mb-3">
            <input className="form-control" id="admins" type="number" placeholder="Enter your name..." data-sb-validations="required" />
            <label htmlFor="admins">Number of extra Admin Users</label>
            <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
        </div>
        {/* Name input */}
        <div className="form-floating mb-3">
            <input className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
            <label htmlFor="name">Full name</label>
            <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
        </div>
        {/* Email address input */}
        <div className="form-floating mb-3">
            <input className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
            <label htmlFor="email">Email address</label>
            <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
            <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
        </div>
        {/* Phone number input */}
        <div className="form-floating mb-3">
            <input className="form-control" id="phone" type="tel" placeholder="(+267) 0000 0000" data-sb-validations="required" />
            <label htmlFor="phone">Phone number</label>
            <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
        </div>
        {/* Submit success message */}
        {/* */}
        {/* This is what your users will see when the form */}
        {/* has successfully submitted */}
        <div className="d-none" id="submitSuccessMessage">
            <div className="text-center mb-3">
                <div className="fw-bolder">Form submission successful!</div>
                To activate this form, sign up at
                <br />
                <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
            </div>
        </div>
        {/* Submit error message */}
        {/* This is what your users will see when there is */}
        {/* an error submitting the form */}
        <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
        {/* Submit Button */}
        <div className="d-grid"><button className="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Submit</button></div>
    </form>
}