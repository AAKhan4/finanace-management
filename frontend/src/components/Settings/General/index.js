import React from "react";
import * as E from "./GeneralElems";

export default function General() {
  return (
    <E.Container>
      <E.Wrapper>
        <E.Title>General</E.Title>
        <E.section>
          <E.sectionTitle>Account</E.sectionTitle>
        </E.section>
        <E.section>
          <E.sectionTitle>Password</E.sectionTitle>
        </E.section>
        <E.section>
          <E.sectionTitle>Appearance</E.sectionTitle>
        </E.section>
      </E.Wrapper>
    </E.Container>
  );
}
