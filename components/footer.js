import NavBar from './navBar';

export default function Footer() {
    return (
        <footer className="bg-dark text-white py-5">
            <div className="container">
                <div className="row text-center align-items-center">
                    <div className="col-12 col-lg-2 text-lg-left">
                        LEGAL TECH HOUSE
                    </div>

                    <div className="col mt-4 mt-lg-0 text-center">
                        <ul className="nav justify-content-center">
                            <NavBar />
                        </ul>

                    </div>

                    <div className="col-12 col-lg-2 mt-4 mt-lg-0 text-lg-right">
                        <a href="#" className="mx-2"><i className="fab fa-twitter" aria-hidden="true"></i></a>
                        <a href="#" className="mx-2"><i className="fab fa-facebook" aria-hidden="true"></i></a>
                        <a href="#" className="mx-2"><i className="fab fa-instagram" aria-hidden="true"></i></a>
                        <a href="#" className="mx-2"><i className="fab fa-pinterest" aria-hidden="true"></i></a>
                        <a href="#" className="mx-2"><i className="fab fa-google" aria-hidden="true"></i></a>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col text-center">
                        <small className="text-muted">© 2021 Legal Tech House</small>
                    </div>
                </div>
            </div>
        </footer>
    );
}