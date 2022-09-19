import React from "react";
import { Link } from "react-router-dom";
import { useTodosContext } from "../context/todos";
import "./style.scss";
const Todos = () => {
  const { todos, setTodos } = useTodosContext();
  console.log(todos);

  const handleTodoStatusChange = (idx) => {
    todos[idx].completed = !todos[idx].completed;
    setTodos([...todos]);
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
      <div style={{ width: "50%", margin: "50px auto",border:'1px solid grey',height:'400px' }}>
        {todos.map((todo, idx) => (
          <div key={idx}>
            <label style={{marginLeft:'50px',marginTop:'50px'}} htmlFor="todoCheckBox">{todo.todo}</label>
            <input
              onChange={handleTodoStatusChange.bind(null, idx)}
              type="checkbox"
              checked={todo.completed}
              name="todoCheckbox"
              id="todoCheckBox"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;
