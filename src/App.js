import { v4 as uuidv4 } from "uuid";
import TodoList from "./components/todo-list/TodoList";
import Filter from "./components/filter/Filter";
import PageLimit from "./components/page-limit/PageLimit";
import TodoInput from "./components/todo-list/TodoInput";
import Pagination from "./components/pagination/Pagination";
import { useState } from "react";

const todo = {
  title: "Homework",
  completed: true,
};

const initialTodolist = [
  { title: "Homework", completed: true, id: uuidv4() },
  { title: "Mid term exam", completed: false, id: uuidv4() },
  { title: "Group Project", completed: true, id: uuidv4() },
];
// console.log(initialTodolist);

function App() {
  const [todoList, setTodoList] = useState(initialTodolist);
  const [searchStatus, setSearchStatus] = useState(null);

  const createTodo = (title) => {
    const newTodo = { title, completed: false, id: uuidv4() };
    // const oldTodoList = [...todoList];
    // oldTodoList.unshift(newTodo);
    // setTodoList(oldTodoList);
    const newTodoList = [newTodo, ...todoList];
    setTodoList(newTodoList);
  };
  const removeTodo = (id) => {
    const idx = todoList.findIndex((el) => el.id === id);
    if (idx !== -1) {
      const oldTodoList = [...todoList];
      oldTodoList.splice(idx, 1);
      setTodoList(oldTodoList);
    }
  };
  const updateTodo = (newValue, id) => {
    const idx = todoList.findIndex((el) => el.id === id);
    if (idx !== -1) {
      const oldTodoList = [...todoList];
      oldTodoList[idx] = { ...oldTodoList[idx], ...newValue };
      setTodoList(oldTodoList);
    }
  };
  const changeSearchStatus = (value) => {
    setSearchStatus(value);
  };

  // let filteredTodoList = [];
  // switch (searchStatus) {
  //     case "COMPLETED": {
  //         filteredTodoList = todoList.filter((el) => el.completed);
  //         break;
  //     }
  //     case "PENDING": {
  //         filteredTodoList = todoList.filter((el) => !el.completed);
  //         break;
  //     }
  //     default:
  //         filteredTodoList = [...todoList];
  // }

  const filteredTodoList = todoList.filter((el) => searchStatus === null || el.completed === searchStatus);
  return (
    <div className="container max-w-xs pt-5">
      <TodoInput createTodo={createTodo} />
      <Filter changeSearchStatus={changeSearchStatus} searchStatus={searchStatus} />
      <PageLimit />
      <TodoList todoList={filteredTodoList} removeTodo={removeTodo} updateTodo={updateTodo} />
      <Pagination />
    </div>
  );
}

export default App;
