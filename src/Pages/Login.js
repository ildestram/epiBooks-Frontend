import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({});
  const post = async (e) => {
    e.preventDefault();

    try {
      const request = await fetch("http://localhost:5050/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      return await request.json;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form className="m-5" onSubmit={post}>
        <Form.Control
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            })
          }
          type="email"
          placeholder="insert email"
          className="my-2"
          aria-label="userName"
        />
        <Form.Control
          onChange={(e) =>
            setFormData({
              ...formData,
              password: e.target.value,
            })
          }
          type="password"
          placeholder="insert password"
          className="my-2"
          aria-label="password"
        />
        <Button type="Submit">Login</Button>
      </Form>
    </>
  );
};

export default Login;
