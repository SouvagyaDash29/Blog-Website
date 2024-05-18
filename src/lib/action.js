"use server";
import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

export const addPost = async (prevState, formData) => {
  // const title = formData.get("title");
  // const desc = formData.get("desc");
  // const slug = formData.get("slug");

  const { title, desc, slug, userId } = Object.fromEntries(formData);

  // console.log(title, desc, slug, userId);
  try {
    connectToDb();
    const newPost = new Post({ title, desc, slug, userId });

    await newPost.save();
    console.log("Post saved");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "something went wrong" };
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.findByIdAndDelete(id);
    console.log("Post deleted successfully");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "something went wrong" };
  }
};



export const addUser = async (prevState, formData) => {
  const { username, email, password, img } = Object.fromEntries(formData);

  // console.log(username, email, password, img);
  try {
    connectToDb();
    const newUser = new User({ username, email, password, img });

    await newUser.save();
    console.log("saved to db");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "something went wrong" };
  }
};



export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log("User deleted successfully");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "something went wrong" };
  }
};

export const handelGithubLogin = async () => {
  "use server";
  await signIn("github");
};

export const handelLogout = async () => {
  "use server";
  await signOut("github");
};

export const register = async (previousState, formData) => {
  const { username, email, password, img, passwordRepeat } =
    Object.fromEntries(formData);

  if (password != passwordRepeat) {
    return { error: "Password is not match" };
    // throw new Error("Password is not match")
  }
  try {
    connectToDb();

    const user = await User.findOne({ username });

    if (user) {
      return { error: "Username is already exists" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });

    await newUser.save();
    console.log("User saved");

    return { success: true };
  } catch (error) {
    console.log(error);
    return { Error: "Error in saving user!" };
  }
};

export const login = async (previousState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    console.log(error);

    if (error.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }
    throw error;
  }
};
