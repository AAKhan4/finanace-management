import React, { useRef } from "react";
import * as E from "../UserElems";
import axios from "axios";
import { useNavigate } from "react-router-dom";
require("dotenv").config();

export default function Login() {
  const path = process.env.BACKEND_URL + "/user/login";
  const form = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = form.current.elements;
    const user = {
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
          <E.Title>Log in</E.Title>
          <E.Desc>Sign in to your current account.</E.Desc>
          <E.Label>Email</E.Label>
          <E.Input type="email" placeholder="email@example.com" name="email" />
          <E.Label>Password</E.Label>
          <E.Input type="password" placeholder="Password" name="password" />
          <E.Button type="submit" >Log in</E.Button>
        </E.Form>
      </E.Wrapper>
    </E.Container>
  );
}
