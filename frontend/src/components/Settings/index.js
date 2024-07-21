import React from "react";
import Navbar from "./Navbar";
import General from "./General";
import * as E from "./SettingsElems";

export default function Settings() {
  return (
    <E.Container>
      <E.Wrapper>
          <Navbar />
          <General />
      </E.Wrapper>
    </E.Container>
  );
}
