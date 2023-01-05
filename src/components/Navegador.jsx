import Link from 'next/link';

import styles from '../styles/Navegador.module.css';

export default function Navegador(props) {
    const { label, route, color } = props;
    return (
        <Link className={styles.navegador}
            style={{ backgroundColor: color ?? 'dodgerblue' }}
            href={route}
        >
            { label }
        </Link>
    );
}