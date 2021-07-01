

import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {
    const router = useRouter();
    const setLinkState = (path) => router.pathname === path ? 'active' : '';
    return (
        <>
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
        </>
    );
}