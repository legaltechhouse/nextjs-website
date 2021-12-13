import { useEffect } from 'react';
import Link from 'next/link';
import NavBar from './navBar';

export default function Header() {
    useEffect(() => {
        import('bootstrap/js/dist/collapse');
    });
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-lg-3">
            <div className="container-fluid px-5">
                <Link href="/">
                    <a className="navbar-brand">
                        <img src="/images/logo-no-tagline-small-inverse.svg" className="" alt="Logo" />
                        <span className="d-inline-block ml-1 d-none">Legal Tech House</span>
                    </a>
                </Link>
                    <a className="btn btn-primary ms-auto d-lg-none" href="#">Sign Up Now!</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainMenu" aria-controls="mainMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mainMenu">

                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <NavBar />
                    </ul>
                </div>
                    <a className="btn btn-primary ms-auto" href="#">Sign Up Now!</a>
            </div>
        </nav>
    );
}