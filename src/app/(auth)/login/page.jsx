import LoginForm from "@/components/loginForm/loginForm";
import { handelGithubLogin} from "@/lib/action";
import styles from "./login.module.css"

const Login = () => {

    return (
        <div className={styles.container}>
             <div className={styles.wrapper}>
           <form action={handelGithubLogin}>
             <button className={styles.github}>Login with Github</button>
           </form>
            <LoginForm/>
           </div>
        </div>
    );
}

export default Login;