"use client";

// import Link from 'next/link';
import { useState } from "react";
import styles from "./Links.module.css";
import NavLink from "./navLink/navLinks";
import Image from "next/image";
import { handelLogout } from "@/lib/action";

const Links = ({session}) => {
  const [open, setOpen] = useState(false);
  const links = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];
//TEMPORARY
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session?.user ? (
          <>
            {session.user?.isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <form action={handelLogout}>
              <button className={styles.logout}>Logout</button>
            </form>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      {/* <button className={styles.menuButton} onClick={() => setOpen((perv) => !perv)}>Menu</button> */}
      <Image
        src="/menu.png"
        alt=""
        className={styles.menuButton}
        width={20}
        height={20}
        onClick={() => setOpen((perv) => !perv)}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
