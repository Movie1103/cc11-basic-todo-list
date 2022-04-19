import Todo from "./Todo";

function TodoList() {
  return (
    <ul className="list-group shadow mt-4">
      <Todo title="Personal project Figma" completed={true} />
      <Todo title="Freecodecamp" completed={false} />
      <Todo title="Mid term exam" completed={false} />
      <Todo title="Lab" completed={true} />
    </ul>
  );
}

export default TodoList;
