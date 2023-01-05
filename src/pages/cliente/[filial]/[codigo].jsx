import Layout from "../../../components/Layout";
import { useRouter } from 'next/router';

export default function ClientePorCodigo() {
    const router =  useRouter();
    return (
        <Layout>
            <div>Filial  ===  { router.query.filial }</div>
            <div>Código  ===  { router.query.codigo }</div>
        </Layout>
    );
}