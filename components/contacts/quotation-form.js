import { useState, useEffect, useRef } from "react";
import { useRouter } from 'next/router';
import CustomNumberInput from "./custom-number-input";

export default function QuotationForm({price = '950'}) {
    const routerPrice = price ? +price : 950;
    const [selectedPackage, setSelectedPackage] = useState(routerPrice);
    const [currentSum, setCurrentSum] = useState(950);
    const [teamSum, setTeamSum] = useState(0);
    const [usersSum, setUsersSum] = useState(0);
    const [adminsSum, setAdminsSum] = useState(0);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('');

    const submitSuccessMessage = useRef(null);
    const submitErrorMessage = useRef(null);

    const router = useRouter();

    const getElemId = (el) => el.getAttribute('id');

    const add = (value) => {
        const sum = value + teamSum + usersSum + adminsSum;
        setCurrentSum(sum);
    }
    const onValueChange = (e) => {
        const value = +e.currentTarget.value;
        resetPath(value);
        setSelectedPackage(parseInt(value));
    };

    const totalUnitPrice = (e) => {
        const element = e?.currentTarget ? e.currentTarget : e;
        let inputValue = parseInt(element.value);
        const unitId = getElemId(element);

        if (inputValue > 100) {
            element.value = 100;
            return;
        }

        if (isNaN(inputValue)) {
            inputValue = 0;
        }

        switch (unitId) {
            case 'team':
                const team = 50 * inputValue;
                setTeamSum(team);
                break;
            case 'users':
                const users = 100 * inputValue;
                setUsersSum(users);
                break;
            case 'admins':
                const admins = 200 * inputValue;
                setAdminsSum(admins);
                break;
            default:
                console.log(`Sorry, we are out of ${unitId}.`);
        }
    }

    const stepper = (e) => {
        const numInput = Array.from(e.currentTarget.parentElement.children).find(child => child.localName === 'input');
        switch (getElemId(e.currentTarget)) {
            case 'button-add':
                numInput.stepUp();
                break;
            case 'button-subtract':
                numInput.stepDown();
                break;
            default:
                console.log(`Sorry, we are out of ${e}.`);

        }
        totalUnitPrice(numInput);
    };

    const resetPath = (path) => {
        router.replace(router.pathname, router.pathname + '?requestquote=' + path);
    }
    
    useEffect(() => {
        add(selectedPackage);
    }, [selectedPackage, teamSum, usersSum, adminsSum]);

    const submitMessages = (success) => {
        if(success) {
            submitSuccessMessage.current.className = "";
            submitErrorMessage.current.className = "d-none";
        } else {
            submitErrorMessage.current.className = "d-none";
            submitSuccessMessage.current.className = "";
        } 
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = {
            name,
            email,
            phoneNumber,
            teamMembers: teamSum,
            userLogins: usersSum,
            adminLogins: adminsSum,
            currentSum,
            selectedPackage
        };

        const clearForm = () => {
            e.target.reset();
            submitMessages(true);
        };

        fetch('/api/requestQuoteForm', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            if (res.status === 200) {
                console.log('Response succeeded!', res)
                clearForm();
            } else {
                console.log('Error', res)

                submitMessages(false);
                throw new Error('Not sent');
            }
        }).catch((e) => {
            console.log(e)
            submitMessages(false);
            // setSubmitted(true);
            //     setName(' ');
            //     setEmail(' ');
            //     setPhoneNumber(' ');
        });

    }

    return <form id="contactForm" className="row" onSubmit={(e) => {handleSubmit(e)}}>

        <div className="col-lg-6">
            <div className="form-floatig mb-3 d-flex justify-content-between">
                <input type="radio" className="btn-check" name="pricing-plan" id="individual" autoComplete="off" onChange={onValueChange} value="950" defaultChecked={price === '950'} />
                <label className="btn btn-outline-primary" htmlFor="individual">Individual <br /> P950</label>

                <input type="radio" className="btn-check" name="pricing-plan" id="small" autoComplete="off" onChange={onValueChange} value="2000" defaultChecked={price === '2000'}/>
                <label className="btn btn-outline-primary" htmlFor="small">Small Law Firm <br /> P2000</label>

                <input type="radio" className="btn-check" name="pricing-plan" id="large" autoComplete="off" onChange={onValueChange} value="5000" defaultChecked={price === '5000'}/>
                <label className="btn btn-outline-primary" htmlFor="large">Large Law Firm <br /> P5000</label>
            </div>
            <h6>Add extra team members</h6>
            <div className="row mb-3 justify-content-between align-items-center">

                {/* additional team members input */}
                <div className="col-6 col-md">
                    <CustomNumberInput id="team" clickFn={stepper} changeFn={totalUnitPrice} />
                </div>
                <div className="col col-sm-4">x R50</div>
                <div className="col">
                    <input type="text" readOnly className="form-control-plaintext text-center p-0" id="addTeam" value={teamSum} />
                </div>
            </div>
            <h6>Add extra Normal User logins</h6>
            <div className="row mb-3 justify-content-between align-items-center">
                {/* additional normal users input */}
                <div className="col-6 col-md">
                    <CustomNumberInput id="users" clickFn={stepper} changeFn={totalUnitPrice} />
                </div>
                <div className="col col-md-4">x R100</div>
                <div className="col">
                    <input type="text" readOnly className="form-control-plaintext text-center p-0" id="addUsers" value={usersSum} />
                </div>
            </div>
            <h6>Add extra Admin User logins</h6>
            <div className="row mb-5 justify-content-between align-items-center">
                {/* additional admins input */}
                <div className="col-6 col-md">
                    <CustomNumberInput id="admins" clickFn={stepper} changeFn={totalUnitPrice} />
                </div>
                <div className="col col-sm-4">x R200</div>
                <div className="col">
                    <input type="text" readOnly className="form-control-plaintext text-center p-0" id="addAdmins" value={adminsSum} />
                </div>
            </div>
            <hr />
            <div className="row mb-3 justify-content-between align-items-center">
                <div className="col-6">
                    <label htmlFor="total" className="col-form-label">Total monthly subscription</label>
                </div>
                <div className="col-4">
                    <input type="text" readOnly className="form-control-plaintext text-center" id="total" value={currentSum} />
                </div>
            </div>
            <hr />
        </div>

        <div className="col-lg-6">
            {/* Name input */}
            <div className="form-floating my-3">
                <input className="form-control" id="name" type="text" placeholder="0" onChange={(e) => { setName(e.target.value) }} required/>
                <label htmlFor="name">Full name</label>
                <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
            </div>
            {/* Email address input */}
            <div className="form-floating mb-3">
                <input className="form-control" id="email" type="email" placeholder="name@example.com" onChange={(e) => { setEmail(e.target.value) }} required/>
                <label htmlFor="email">Email address</label>
                <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
            </div>
            {/* Phone number input */}
            <div className="form-floating mb-3">
                <input className="form-control" id="phone" type="tel" placeholder="(+267) 0000 0000" onChange={(e) => { setPhoneNumber(e.target.value) }} />
                <label htmlFor="phone">Phone number</label>
                <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
            </div>
            {/* Submit success message */}
            <div className="d-none" ref={submitSuccessMessage}>
                <div className="text-center mb-3">
                    <div className="fw-bolder">Form submission successful!</div>
                </div>
            </div>
            {/* Submit error message */}
            <div className="d-none" ref={submitErrorMessage}>
                <div className="text-center text-danger mb-3">Error sending message!</div>
                </div>
            {/* Submit Button */}
            <div className="d-grid">
                <button className="btn btn-primary btn" type="submit">Submit</button>
            </div>
        </div>
    </form>
}