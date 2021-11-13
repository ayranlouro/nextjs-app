import Link from 'next/link';
import Styles from '../styles/layout.module.css'

const Layout = (props) => {
    return (
        <div className={Styles.layout}>
            <div className={Styles.header}>
                <Link href="/">Back</Link>

            </div>
            <div className={Styles.content}>
                {props.children}

            </div>
        </div>
    )
}

export default Layout;