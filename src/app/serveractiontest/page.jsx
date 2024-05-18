import { addPost, deletePost } from "@/lib/action";

const ServerActionTestPage = () => {

    // const actionComponent = async () => {
    //     "use server"
    //     console.log("It works!")
    // }
    
  return (
    <div>
      <form action={addPost}>
        <input type="text" name="title" placeholder="title" />
        <input type="text" name="desc" placeholder="desc" />
        <input type="text" name="slug" placeholder="slug" />
        <input type="text" name="userId" placeholder="userId" />
        <button>Create</button>
      </form>

      <form action={deletePost}>
        <input type="text" placeholder="userId" name="id"/>
        <button>delete</button>
      </form>
    </div>
  );
};

export default ServerActionTestPage;
