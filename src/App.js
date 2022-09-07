import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import TodoForm from "./Components/TodoForm";
import { Button, Form } from "react-bootstrap";

function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div className="todo">
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
        {todo.text}
      </span>
      <div>
        <Button variant="outline-success" onClick={() => markTodo(index)}>
          Check
        </Button>{" "}
        <Button variant="outline-danger" onClick={() => removeTodo(index)}>
          Remove
        </Button>
      </div>
    </div>
  );
}

function FormTodo({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Header title="Add TodoList" />
      <TodoForm
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add new Todo"
      />
      <Button variant="primary mb-3" type="submit" className="mt-2" >
        Submit
      </Button>
    </Form>
  );
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: "This is a sampe todo",
      isDone: false,
    },
  ]);

  // Add the Todo
  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  // Mark the Todo
  const markTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  // Remove the Todo
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="container">
        <Header title="Todo List" className="text-center h2" />
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <div className="card mt-1 mx-4">
              <div className="card-body">
                <Todo
                  key={index}
                  index={index}
                  todo={todo}
                  markTodo={markTodo}
                  removeTodo={removeTodo}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
