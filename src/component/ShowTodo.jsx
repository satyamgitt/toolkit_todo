import React from "react";
import { useSelector } from "react-redux";

const ShowTodo = () => {
  const state = useSelector((state) => state.todo.todos);

  console.log(state);
  
  return (
    <>
      <p>Todos</p>
      {state.map((todo) => {
        return <p key={todo.id}>{todo.text}</p>;
      })}
    </>
  );
};

export default ShowTodo;
