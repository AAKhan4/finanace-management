import React from "react";
import * as E from "./GeneralElems";
import Accounts from "./Account";
import Password from "./Password";
import Appearance from "./Appearance";

export default function General() {
  return (
    <E.Container id="general">
      <E.Wrapper>
        <E.Title>General Settings</E.Title>
        <E.Section>
          <E.SectionTitle>Account</E.SectionTitle>
          <Accounts />
        </E.Section>
        <E.Section>
          <E.SectionTitle>Password</E.SectionTitle>
          <Password />
        </E.Section>
        <E.Section>
          <E.SectionTitle>Appearance</E.SectionTitle>
          <Appearance />
        </E.Section>
      </E.Wrapper>
    </E.Container>
  );
}
