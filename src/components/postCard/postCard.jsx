import styles from "./postCard.module.css";
import Image from "next/image";
import Link from "next/link";

const   PostCard = ({post}) => {

  const dateString = post.createdAt;
  const date = new Date(dateString);

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const formattedDate = `${days[date.getDay()]} ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;


  return (
    <div className={styles.container}>
      <div className={styles.top}>
       {post.img &&  <div className={styles.imgContainer}>
          <Image
            src={post.img}
            alt=""
            className={styles.img}
            fill
          />
        </div>}
        <span className={styles.date}>{formattedDate}</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link className={styles.link} href={`/blog/${post.slug}`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
