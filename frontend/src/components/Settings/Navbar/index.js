import React from "react";
import * as E from "./NavbarElems";

export default function Sidebar() {
  return (
    <E.Container>
      <E.Wrapper>
        <E.Option href="/settings/#general">General</E.Option>
        <E.Option href="/settings/#security">Security</E.Option>
        <E.Option href="/settings/#notifications">Notifications</E.Option>
        <E.Option href="/settings/#billing">Billing</E.Option>
        <E.Option href="/settings/#privacy">Privacy</E.Option>
      </E.Wrapper>
    </E.Container>
  );
}
