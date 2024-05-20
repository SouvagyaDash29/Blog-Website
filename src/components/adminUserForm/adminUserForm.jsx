"use client";

import { addUser } from "@/lib/action";
import styles from "./adminUserForm.module.css";
import { useFormState } from "react-dom";

const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);

  return (
    <form action={formAction} className={styles.container}>
      <h1>New Post</h1>
      <input type="text" name="username" placeholder="username" />
      <input type="text" name="email" placeholder="Email" />
      <input type="text" name="img" placeholder="Upload Your Profile Image URL" />
      <input type="password" name="password" placeholder="password" />
      <select name="isAdmin">
        <option value="false">Is Admin?</option>
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select>
      <button>Add</button>
      {state && state.error}
    </form>
  );
};

export default AdminUserForm;
