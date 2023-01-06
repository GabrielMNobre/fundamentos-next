import { useState } from 'react';
import Layout from '../components/Layout';

export default function Integracao() {
    const [cliente, setCliente] = useState({});
    const [codigo, setCodigo] = useState(1);

    function obterCliente() {
        fetch(`http://localhost:3000/api/clientes/${codigo}`)
            .then(res => res.json())
            .then(dados => setCliente(dados))
    }

    const { id, nome, email } = cliente;

    return (
        <Layout>
            <input type="number" value={codigo} onChange={(e) => setCodigo(e.target.value)} />
            <button onClick={obterCliente}>Obter Cliente</button>
            <ul>
                <li>Código: { id }</li>
                <li>Nome: { nome }</li>
                <li>Email: { email }</li>
            </ul>
        </Layout>
    );
}