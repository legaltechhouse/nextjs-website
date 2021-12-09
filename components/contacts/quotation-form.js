import { useState, useEffect } from "react";

export default function QuotationForm() {

    const [checked, setChecked] = useState(950);
    const [currentSum, setCurrentSum] = useState(950);
    const [teamSum, setTeamSum] = useState(0);
    const [usersSum, setUsersSum] = useState(0);
    const [adminsSum, setAdminsSum] = useState(0);

    const add = (value) => {
        const sum = value + teamSum + usersSum + adminsSum;
        setCurrentSum(sum);
    }
    const onValueChange = (e) => {
        const value = +e.currentTarget.value;
        setChecked(parseInt(value));
    };

    const totalUnitPrice = (e) => {
        const unitId = e.currentTarget.attributes.id.value;
        switch (unitId) {
            case 'team':
                let team = 50 * parseInt(e.currentTarget.value);
                setTeamSum(team);
                break;
            case 'users':
                const users = 100 * parseInt(e.currentTarget.value);
                setUsersSum(users);
                break;
            case 'admins':
                const admins = 200 * parseInt(e.currentTarget.value);
                setAdminsSum(admins);
                break;
            default:
                console.log(`Sorry, we are out of ${unitId}.`);
        }
    }


    useEffect(() => {
        add(checked);
      },[checked, teamSum, usersSum, adminsSum])

    return <form id="contactForm" data-sb-form-api-token="API_TOKEN">

        <div className="form-floatig mb-3 d-flex justify-content-around">
            <input type="radio" className="btn-check" name="pricing-plan" id="individual" autoComplete="off" onChange={onValueChange} value="950" defaultChecked />
            <label className="btn btn-outline-primary" htmlFor="individual">Individual <br /> P950</label>

            <input type="radio" className="btn-check" name="pricing-plan" id="small" autoComplete="off" onChange={onValueChange} value="2000" />
            <label className="btn btn-outline-primary" htmlFor="small">Small Law Firm <br /> P2000</label>

            <input type="radio" className="btn-check" name="pricing-plan" id="large" autoComplete="off" onChange={onValueChange} value="5000" />
            <label className="btn btn-outline-primary" htmlFor="large">Large Law Firm <br /> P5000</label>
        </div>
        <div className="row mb-3 justify-content-between align-items-center">

            <h6>Add extra team members</h6>
            {/* additional team members input */}
            <div className="col-2">
                <label htmlFor="team" className="d-none">Add extra team members</label>
                <input className="form-control" id="team" type="number" placeholder="0" onChange={totalUnitPrice} min="0" max="100"/>
                <div className="invalid-feedback" data-sb-feedback="team:required">A name is required.</div>
            </div>
            <div className="col-4">x R50</div>
            <div className="col-2">
                <input type="text" readOnly className="form-control-plaintext text-center p-0" id="addTeam" value={teamSum} />
            </div>
        </div>
        <div className="row mb-3 justify-content-between align-items-center">
            <h6>Add extra Normal User logins</h6>
            {/* additional normal users input */}
            <div className="col-2">
                <label htmlFor="users" className="d-none">Add extra Normal User logins</label>
                <input className="form-control" id="users" type="number" placeholder="0"  onChange={totalUnitPrice} min="0" max="100" />
                <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
            </div>
            <div className="col-4">x R100</div>
            <div className="col-2">
                <input type="text" readOnly className="form-control-plaintext text-center p-0" id="addUsers" value={usersSum} />
            </div>
        </div>
        <div className="row mb-5 justify-content-between align-items-center">
            <h6>Add extra Admin User logins</h6>
            {/* additional admins input */}
            <div className="col-2">
                <label htmlFor="admins" className="d-none">Add extra Admin User logins</label>
                <input className="form-control" id="admins" type="number" placeholder="0"  onChange={totalUnitPrice} min="0" max="100"/>
                <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
            </div>
            <div className="col-4 text-mute">x R200</div>
            <div className="col-2">
                <input type="text" readOnly className="form-control-plaintext text-center p-0" id="addAdmins" value={adminsSum} />
            </div>
        </div>
        <hr />
        <div className="row mb-3 justify-content-between align-items-center">
            <div className="col-6">
                <label htmlFor="total" className="col-sm-2 col-form-label">Total</label>
            </div>
            <div className="col-2">
                <input type="text" readOnly className="form-control-plaintext text-center" id="total" value={currentSum} />
            </div>
        </div>
        <hr />
        {/* Name input */}
        <div className="form-floating my-3">
            <input className="form-control" id="name" type="text" placeholder="0" data-sb-validations="required" />
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
        <div className="d-grid"><button className="btn btn-primary btn disabled" id="submitButton" type="submit">Submit</button></div>
    </form>
}