

import Link from 'next/link';
import NavBar from './navBar';

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container px-5">
                <Link href="/">
                    <a className="navbar-brand">
                        <span className="d-inline-block ml-1">Legal Tech House</span>
                    </a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <NavBar />
                    </ul>
                </div>
            </div>
        </nav>
    );
}