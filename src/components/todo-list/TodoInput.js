import { useState } from "react";
import Button from "../ui/Button";
// <></> Fragment ~ React.Fragment
function TodoInput(props) {
  const [todoInput, setTodoInput] = useState("");
  const [todoError, setTodoError] = useState("");

  const handleClickCreateBtn = () => {
    if (!todoInput) {
      setTodoError("Title is required.");
    } else {
      props.createTodo(todoInput);
      setTodoError("");
      setTodoInput("");
    }
  };

  return (
    <>
      {/* <div className="input-group shadow">
        <input
          type="text"
          className={`form-control ${todoError ? "is-invalid" : ""}`}
          placeholder="Enter new todo"
          value={todoInput}
          onChange={(event) => setTodoInput(event.target.value)}
        />
        <Button color="success" onClick={handleClickCreateBtn}>
          <i className="fa-solid fa-plus"></i>
        </Button>
        <Button color="outline-secondary" onClick={() => setTodoInput("")}>
          <i className="fa-solid fa-xmark"></i>
        </Button>
      </div>
      {todoError && <small className="text-danger">Task is required.</small>} */}
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input type="email" className="form-control" id="email" />
          {/* <small className="text-danger">
          We'll never share your email with anyone else.
        </small> */}
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input type="text" className="form-control" id="username" />
          {/* <small className="text-danger">
          We'll never share your email with anyone else.
        </small> */}
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number
          </label>
          <input type="text" className="form-control" id="phoneNumber" />
          {/* <small className="text-danger">
          We'll never share your email with anyone else.
        </small> */}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
export default TodoInput;
