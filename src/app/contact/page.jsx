
// import HydrationTest from "@/components/hydrationTest";
import styles from "./contact.module.css"
import Image from "next/image";
// import dynamic from 'next/dynamic';

// const HydrationTestNoSSR = dynamic(() => import("@/components/hydrationTest"), {ssr: false})

export const metadata = {
  title: "Contact Page",
  description: "Contact desc",
};

const Contact = () => {


return (
        <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>

          {/* <HydrationTestNoSSR /> */}
        <form action="" className={styles.form}>
        
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
    );
}

export default Contact;