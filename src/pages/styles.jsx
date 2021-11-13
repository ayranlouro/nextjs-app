import Link from 'next/link';
import Layout from '../components/Layout';

import styles from './styles.module.css'

const Styles = (props) => {
    return (
        <Layout>
            <div className={styles.purple}>
                <h1>Styles</h1>
            </div>
        </Layout>
    )
}

export default Styles;