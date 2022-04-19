import { v4 as uuidv4 } from "uuid";
import Filter from "./components/filter/Filter";
import PageLimit from "./components/page-limit/PageLimit";
import Pagination from "./components/pagination/Pagination";
import TodoList from "./components/todo-list/TodoList";
import TodoInput from "./components/todo-list/TodoInput";
import { useState } from "react";

const todo = {
  title: "Homework",
  completed: true,
};

const initialTodoList = [
  { title: "Homework", completed: true, id: uuidv4() },
  { title: "Mid term exam", completed: false, id: uuidv4() },
  { title: "Homework", completed: true, id: uuidv4() },
];

// console.log(initialTodoList);

function App() {
  const [todoList, setTodoList] = useState(initialTodoList);

  const createTodo = (title) => {
    const newTodo = { title, completed: false, id: uuidv4() };
    const oldTodoList = [...todoList];
    oldTodoList.unshift(newTodo);
    setTodoList(oldTodoList);
  };

  return (
    <div className="container max-w-xs pt-5">
      <TodoInput createTodo={createTodo} />
      <Filter />
      <PageLimit />
      <TodoList todoList={todoList} />
      <Pagination />
    </div>
  );
}

export default App;
