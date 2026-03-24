import { getTodos } from "@/lib/todos-service";

const Page = async () => {
  const data = await getTodos();
  return <div>Location ({data.todos.length})</div>;
};

export default Page;
