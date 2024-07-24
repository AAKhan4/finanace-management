import React, { useContext } from "react";
import Navbar from "./Navbar";
import General from "./General";
import * as E from "./SettingsElems";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export default function Settings() {
  const demoMode = true;
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  if (!(demoMode && user)) {
    navigate("/login");
  }

  return (
    <E.Container>
      <E.Wrapper>
        <Navbar />
        <General />
      </E.Wrapper>
    </E.Container>
  );
}
