import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";

export default function Lojas() {
  const [lojas, setLojas] = useState([]);
  const [form, setForm] = useState({ numero: '', cidade: '', bairro: '', endereco: '', telefone: '' });

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/lojas`).then(res => setLojas(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/lojas`, form);
    alert("Loja cadastrada!");
    setForm({ numero: '', cidade: '', bairro: '', endereco: '', telefone: '' });
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/lojas`);
    setLojas(res.data);
  };

  return (
    <>
      <Header />
      <main className="p-6">
        <h2 className="text-xl font-bold mb-4">Cadastro de Lojas</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6" onSubmit={handleSubmit}>
          {["numero", "cidade", "bairro", "endereco", "telefone"].map(campo => (
            <input key={campo} value={form[campo]} placeholder={campo} className="border p-2"
              onChange={e => setForm({ ...form, [campo]: e.target.value })} />
          ))}
          <button className="bg-green-600 text-white p-2" type="submit">Salvar</button>
        </form>
        <h3 className="text-lg font-semibold">Lojas cadastradas</h3>
        <ul className="mt-2 space-y-2">
          {lojas.map((loja, i) => (
            <li key={i} className="border p-2 rounded">{loja.numero} - {loja.endereco}</li>
          ))}
        </ul>
      </main>
    </>
  );
}
