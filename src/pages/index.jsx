import Navegador from '../components/Navegador';

export default function Inicio() {

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
        }}>
            <Navegador label="Exemplo" route="/exemplo" />
            <Navegador label="Cliente" route="/cliente/SP/123" />
            <Navegador label="Integração API" route="/integracao" />
            <Navegador label="Conteúdo Estático" route="/estatico" />
            <Navegador label="Conteúdo Dinâmico" route="/dinamico" />
        </div>
    );
}