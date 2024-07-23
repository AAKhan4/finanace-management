import React, { useState } from "react";
import * as E from "./NavbarElems";

export default function Sidebar() {
  const [toggle, setToggle] = useState("general");
  const path = "/settings/#";
  return (
    <E.Container>
      <E.Wrapper>
      {["general", "secrets", "notification", "advanced settings"].map((option) => (
          <E.Option
            active={toggle === option}
            onClick={() => setToggle(option)}
            href={path + option}
          >
            {option.toUpperCase()}
          </E.Option>
        ))}
      </E.Wrapper>
    </E.Container>
  );
}
