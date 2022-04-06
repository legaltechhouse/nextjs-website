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
                        <img src="/images/logo-no-tagline-small-inverse.svg" className="d-none" alt="Logo" />
                        <span className="d-inline-block ml-1 fw-bold">Legal<span className="text-primary">Tech</span>House</span>
                    </a>
                </Link>
                <button className="navbar-toggler ms-auto me-2" type="button" data-bs-toggle="collapse" data-bs-target="#mainMenu" aria-controls="mainMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    <span className="d-none d-sm-inline ps-1">menu</span>
                </button>
                <Link href="/contact?requestquote=950">
                    <a className="btn btn-primary d-none d-sm-block d-lg-none">Request A Quote</a>
                </Link>
                <div className="collapse navbar-collapse" id="mainMenu">

                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <NavBar />
                    </ul>
                </div>
                <Link href="/contact?requestquote=950">
                    <a className="btn btn-primary d-none d-lg-block ms-auto">Request A Quote</a>
                </Link>
            </div>
        </nav>
    );
}