import Layout from '../components/Layout';

// SSG
// SÓ FUNCIONA APÓS BUILD E START DA APLICAÇÃO
export function getStaticProps() {
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico(props) {
    const { numero } = props;

    return (
        <Layout title="Conteúdo estático">
            <div>
                { numero }
            </div>
        </Layout>
    );
}