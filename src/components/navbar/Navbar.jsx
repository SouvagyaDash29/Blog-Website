import { auth } from '@/lib/auth';
import Links from './links/Links';
import styles from'./Navbar.module.css'
import Link from "next/link"

const Navbar = async () => {

  const session = await auth();

//   console.log(session)


    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>LoGo</Link>
            <div>
               <Links session={session}/>
            </div>
        </div>
    );
}

export default Navbar;