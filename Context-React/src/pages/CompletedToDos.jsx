import React from "react";
import { Link } from "react-router-dom";
import { useTodosContext } from "../context/todos";
import "./style.scss";

const Todos = () => {
  const { todos, setTodos } = useTodosContext();

  const emptyCompletedTodos = () => {
    const newTodos = todos.map((todo) => ({ ...todo, completed: false }));
    setTodos(newTodos);
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

      <div style={{ width: "50%",height:'300px', margin: "50px auto",border:'1px solid green' }}>
        {todos
          .filter((todo) => todo.completed)
          .map((todo, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                gap: "20px",
                alignItems: "center",
                backgroundColor: "rgba(241,241,241,0.3)",
                margin: 10,
                justifyContent: "space-between",
                padding: "10px 20px",
              }}
            >
              <label htmlFor="todoCheckBox">{todo.todo}</label>
            </div>
          ))}
        {todos.filter((todo) => todo.completed).length > 0 && (
          <button
            style={{ padding: 20, margin: "20px 10px",backgroundColor:'green',border:"none" }}
            onClick={emptyCompletedTodos}
          >
            EMPTY TODOS
          </button>
        )}
      </div>
    </div>
  );
};

export default Todos;
