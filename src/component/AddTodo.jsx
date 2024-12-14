import React from "react";
import { useDispatch } from "react-redux";

const AddTodo = () => {
  const [input, setInput] = React.useState("");
  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();
    dispatch(AddTodo(input));
    setInput("");
  };
  return (
    <>
    <p>Todo App hai bro</p>
      <form onSubmit={handleForm}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add todos</button>
      </form>
    </>
  );
};

export default AddTodo;
