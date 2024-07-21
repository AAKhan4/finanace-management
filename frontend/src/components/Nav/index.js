import React from "react";
import * as E from "./NavElems";

export default function Nav() {
  return (
    <E.Container>
      <E.Wrapper>
        <E.Logo href="/"><E.Name>FinMan</E.Name></E.Logo>
        <E.ButtonContainer>
          <E.Button href="/login">Login</E.Button>
          <E.Button href="/signup">Signup</E.Button>
        </E.ButtonContainer>
      </E.Wrapper>
    </E.Container>
  );
}
