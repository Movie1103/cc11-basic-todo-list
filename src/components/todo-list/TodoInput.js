import Button from "../ui/Button";
// <></> Fragment ~ React.Fragment
function TodoInput() {
  return (
    <>
      <div className="input-group shadow">
        <input type="text" className="form-control is-invalid" placeholder="Enter new todo" />
        <Button color="success">
          <i className="fa-solid fa-plus"></i>
        </Button>
        <Button color="outline-secondary">
          <i className="fa-solid fa-xmark"></i>
        </Button>
      </div>
      <small className="text-danger">Task is required.</small>
    </>
  );
}
export default TodoInput;
