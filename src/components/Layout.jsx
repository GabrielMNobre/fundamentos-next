import Link from 'next/link';
import styles from '../styles/Layout.module.css';

export default function Layout(props) {
    const { children, title } = props;
    return (
        <div className={styles.layout}>
            <div className={styles.cabecalho}>
                <h1>{ title ?? 'Nova página' }</h1>
                <Link href="/">
                    Voltar
                </Link>
            </div>
            <div className={styles.conteudo}>
                { children }
            </div>
        </div>
    );
}