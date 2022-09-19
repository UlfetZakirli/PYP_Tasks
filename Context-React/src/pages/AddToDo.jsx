import React from "react";
import { Link } from "react-router-dom";
import { useTodosContext } from "../context/todos";
import "./style.scss";

const AddTodo = () => {
  const { setTodos } = useTodosContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = e.target.todo.value;
    setTodos((prev) => [...prev, { todo, completed: false }]);
    e.target.reset();
  };

  return (
    <div>
      <div className="navbar">
        <div className="menu">
        <Link to="/">TODOS</Link>
        <Link to="/add-todo">ADD TODO</Link>
        <Link to="/completed-todos">COMPLETED TODOS</Link>

        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        style={{
          width: "600px",
          height:'300px',
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          marginTop:'40px',
          gap: 30,
          border:'1px solid grey'
        }}
      >
        <input
          
          style={{ padding: "15px 30px", marginLeft:'130px' ,width:'300px',marginTop:'40px', fontSize: 17 }}
          placeholder="Add a new  todo"
          type="text"
          name="todo"
        />
        <button style={{ padding: 10,width:'300px',marginLeft:'160px',marginTop:'70px', backgroundColor:'green',border:'none' }} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
