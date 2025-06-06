'use client'; // Necesario para usar hooks como useEffect y useRouter

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, [router]);

  return null; // O puedes poner un spinner de carga: return <p>Redirigiendo...</p>;
}