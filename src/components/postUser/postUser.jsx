import { getUser } from "@/lib/data";
import styles from "./PostUser.module.css";
import Image from "next/image";


//FETCH DATA WITH AN API

// const getData = async (userId) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`,
//     { cache: "no-store" }
//   );
//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }
//   return res.json();
// };

const PostUser = async ({userId}) => {

    //FETCH DATA WITH AN API
    const user = await getUser(userId);
    

    //FETCH DATA WITHOUT AN API
    // const user = await getData(userId);

  return (
    <div>
      <div className={styles.container}>
      <Image
            src={user.img ? user.img : "/noavatar.png"}
            alt=""
            className={styles.avatar}
            width={40}
            height={40}
          />
        <div className={styles.texts}>
         <span className={styles.title}>Author</span>
         <span className={styles.username}>{user.username}</span>
        </div>
      </div>
    </div>
  );
};

export default PostUser;
