

import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {
    const router = useRouter();
    const setLinkState = (path) => router.pathname === path ? 'active' : '';
    return (
        <header className="border-bottom">
            <div className="container">
                <nav className="d-flex flex-wrap justify-content-center py-3">
                    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark h4 text-decoration-none">
                        <i class="bi bi-shop-window" role="img" aria-label="Logo"></i>
                        <span className="d-inline-block ml-1">Legal Tech House</span>
                    </a>

                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <Link href="/">
                                <a className={`nav-link ${setLinkState('/')}`} aria-current="page">Home</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/features">
                                <a className={`nav-link ${setLinkState('/features')}`}>Features</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}