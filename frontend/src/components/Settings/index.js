import React from "react";
import Navbar from "./Navbar";
import General from "./General";
import * as E from "./SettingsElems";
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const demoMode = true;
  const navigate = useNavigate();
  if (!demoMode) {
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
