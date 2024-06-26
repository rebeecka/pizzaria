import { useContext } from 'react'
import styles from '../Header/styles.module.scss'
import Link from 'next/link'
import { FiLogOut } from 'react-icons/fi'
import { AuthContext } from '@/pages/contexts/AuthContext'


export function Header(){
    const {signOut}=useContext(AuthContext)
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href="/dashboard">
                    <img src='/pizzariaLogo.svg' width={190} height={60}/>
                </Link>

                <nav className={styles.menuNav}>
                    <Link legacyBehavior href='/category'>
                        <a>Categoria</a>
                    </Link>

                    <Link legacyBehavior href='/product'>
                        <a>Cardápio</a>
                    </Link>

                    <button onClick={signOut}>
                        <FiLogOut color="#FFF" size={24}/>
                    </button>
                </nav>
            </div>
            
        </header>
    )
}