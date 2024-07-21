import React, { useRef } from "react";
import * as E from "../UserElems";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const path = "http://localhost:5050/user/signup";
  const form = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = form.current.elements;
    if (data.password.value !== data.confirmPassword.value) {
      alert("Passwords do not match.");
      return;
    }

    const user = {
      username: data.name.value,
      email: data.email.value,
      password: data.password.value,
    };

    axios
      .post(path, user)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <E.Container>
      <E.Wrapper>
        <E.Form ref={form} onSubmit={handleSubmit}>
          <E.Title>Sign up</E.Title>
          <E.Desc>Create a new account.</E.Desc>
          <E.Label>Username</E.Label>
          <E.Input type="text" placeholder="Username" name="name" />
          <E.Label>Email</E.Label>
          <E.Input type="email" placeholder="email@example.com" name="email" />
          <E.Label>Password</E.Label>
          <E.Input type="password" placeholder="Password" name="password" />
          <E.Label>Confirm Password</E.Label>
          <E.Input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
          />
          <E.Button type="submit" >Sign up</E.Button>
        </E.Form>
      </E.Wrapper>
    </E.Container>
  );
}
