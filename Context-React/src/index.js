import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AddTodo from "./pages/AddToDo";
import CompletedToDos from "./pages/CompletedToDos";
import Todos from "./pages/ToDos";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TodosProvider } from "./context/todos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Todos />,
  },
  {
    path: "/add-todo",
    element: <AddTodo />,
  },
  {
    path: "/completed-todos",
    element: <CompletedToDos />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TodosProvider>
      <RouterProvider router={router} />
    </TodosProvider>
  </React.StrictMode>
);
