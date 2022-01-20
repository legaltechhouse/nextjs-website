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
            <li className="nav-item">
                <Link href="/about">
                    <a className={`nav-link ${setLinkState('/about')}`}>About Us</a>
                </Link>
            </li>
            <li className="nav-item">
                <Link href="/pricing">
                    <a className={`nav-link ${setLinkState('/pricing')}`}>Pricing</a>
                </Link>
            </li>
            <li className="nav-item d-none">
                <Link href="/blog">
                    <a className={`nav-link ${setLinkState('/blog')}`}>Blog</a>
                </Link>
            </li>
            <li className="nav-item">
                <Link href="/contact">
                    <a className={`nav-link ${setLinkState('/contact')}`}>Contact</a>
                </Link>
            </li>
        </>
    );
}