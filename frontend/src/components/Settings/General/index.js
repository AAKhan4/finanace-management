import React from "react";
import * as E from "./GeneralElems";
import Accounts from "./Accounts";

export default function General() {
  return (
    <E.Container>
      <E.Wrapper>
        <E.Title>General Settings</E.Title>
        <E.Section>
          <E.SectionTitle>Account</E.SectionTitle>
          <Accounts />
        </E.Section>
        <E.Section>
          <E.SectionTitle>Password</E.SectionTitle>
        </E.Section>
        <E.Section>
          <E.SectionTitle>Appearance</E.SectionTitle>
        </E.Section>
      </E.Wrapper>
    </E.Container>
  );
}
