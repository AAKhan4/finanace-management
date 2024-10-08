import React, { useContext, useRef } from "react";
import * as E from "../UserElems";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { UserContext } from "../../../context/UserContext";

export default function Signup() {
  const { setToken } = useContext(UserContext);
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
    if (data.password.value.length < 8) {
      alert("Password must be at least 8 characters long.");
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
        <E.Link href="/login">Already have an account? Log in here.</E.Link>
      </E.Wrapper>
    </E.Container>
  );
}
