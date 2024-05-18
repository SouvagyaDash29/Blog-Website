import RegisterForm from "@/components/registerForm/registerForm";
import styles from "./register.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <RegisterForm/>
      </div>
    </div>
  );
};

export default About;
