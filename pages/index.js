import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold">Painel Administrativo - EntregaFácil</h1>
        <p className="mt-4">Escolha uma opção no menu acima.</p>
      </main>
    </>
  );
}
