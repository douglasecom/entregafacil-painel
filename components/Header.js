import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-900 text-white p-4">
      <nav className="flex gap-6">
        <Link href="/">Início</Link>
        <Link href="/lojas">Lojas</Link>
        <Link href="/veiculos">Veículos</Link>
        <Link href="/relatorios">Relatórios</Link>
      </nav>
    </header>
  );
}
