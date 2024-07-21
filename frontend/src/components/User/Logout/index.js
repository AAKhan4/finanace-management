import React from "react";
import { Title } from "../UserElems";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();
  const handleLogout = () => {
    axios
      .delete("/logout")
      .then((res) => {
        console.log(res);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Title>Logging out...</Title>
      {handleLogout()}
    </div>
  );
}
