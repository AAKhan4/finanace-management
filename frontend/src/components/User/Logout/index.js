import React, { useContext } from "react";
import { Container, Wrapper, Title } from "../UserElems";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";

export default function Logout() {
  const navigate = useNavigate();
  const { setToken } = useContext(UserContext);
  const path = "http://localhost:5050/user/login";
  const handleLogout = () => {
    axios
      .delete(path)
      .then((res) => {
        console.log(res);
        setToken(null);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Container>
        <Wrapper>
          <Title>Logging out...</Title>
        </Wrapper>
      </Container>
      {handleLogout()}
    </div>
  );
}
