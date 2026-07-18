"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navStyle: React.CSSProperties = {
    background: '#001f3f',
    padding: '16px 32px',
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    fontFamily: 'var(--font-geist-sans), sans-serif'
  };

  const linkStyle = (isActive: boolean): React.CSSProperties => ({
    color: isActive ? '#fdb913' : '#fff',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '0.95rem',
    padding: '8px 16px',
    borderRadius: '6px',
    background: isActive ? 'rgba(255,255,255,0.1)' : 'transparent',
    transition: 'all 0.2s ease-in-out'
  });

  return (
    <nav style={navStyle}>
      <Link href="/" style={linkStyle(pathname === '/')}>
        Carrito
      </Link>
      <Link href="/profile-card" style={linkStyle(pathname === '/profile-card')}>
        Perfiles
      </Link>
      <Link href="/product-list" style={linkStyle(pathname === '/product-list')}>
        Productos
      </Link>
      <Link href="/movies" style={linkStyle(pathname === '/movies')}>
        Películas
      </Link>
      <Link href="/register-form" style={linkStyle(pathname === '/register-form')}>
        Registro
      </Link>
    </nav>
  );
}
