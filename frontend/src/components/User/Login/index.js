import React, { useContext, useRef } from "react";
import * as E from "../UserElems";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import Cookies from "js-cookie";

export default function Login() {
  const { setToken } = useContext(UserContext);
  const path = "http://localhost:5050/user/login";
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
        setToken(Cookies.get("user"));
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
        <E.Link href="/signup">Don't have an account? Sign up here.</E.Link>
      </E.Wrapper>
    </E.Container>
  );
}
