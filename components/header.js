

import Link from 'next/link';
import NavBar from './navBar';

export default function Header() {
    return (
        <header className="border-bottom">
            <div className="container">
                <nav className="d-flex flex-wrap justify-content-center py-3">
                    <Link href="/">
                        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark h4 text-decoration-none">
                            <i className="bi bi-shop-window" role="img" aria-label="Logo"></i>
                            <span className="d-inline-block ml-1">Legal Tech House</span>
                        </a>
                    </Link>

                    <ul className="nav nav-pills">
                        <NavBar />
                    </ul>
                </nav>
            </div>
        </header>
    );
}