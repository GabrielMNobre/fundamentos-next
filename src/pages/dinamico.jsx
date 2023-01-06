import Layout from '../components/Layout';

// SSG
// SÓ FUNCIONA APÓS BUILD E START DA APLICAÇÃO
export function getSreverSideProps() {
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function Dinamico(props) {
    const { numero } = props;

    return (
        <Layout title="Conteúdo dinâmico">
            <div>
                { numero }
            </div>
        </Layout>
    );
}