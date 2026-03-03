import "./01-enums";
import "./02-generics";
import "./03-promises";
import "./04-http";
import "./05-html";
import { getEverything } from "./services/newsService";
import { getPokemonByName, getPokemonList } from "./services/pokemonService";

import { getTodos } from "./services/todoService";
// import { getTasks } from "./services/taskService";

// const tasks = await getTasks();
// console.log(tasks);

// async function foo() {
//   const res = await getTodos({ perPage: 10, page: 1 });
//   console.log(res.todos.map((el) => el.title));
// }
// foo();

// const res = await getPokemonList();
// console.log(res.results);

// const res2 = await getPokemonByName("Pikachu");
// console.log(res2.forms);

// getEverything({
//   apiKey: "",
//   q: "Bitcoin",
// });
