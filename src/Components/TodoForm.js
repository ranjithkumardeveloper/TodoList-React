import React from "react";
import { Form } from "react-bootstrap";

const TodoForm = (props) => {
  const { type, className, value, onChange, placeholder } = props;

  return (
    <Form.Control
      type={type ? type : "text"}
      className={className}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default TodoForm;
