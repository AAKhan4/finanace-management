import React, { useContext, useState } from "react";
import * as E from "./GeneralElems";

export default function General() {
  const [username, setUsername] = useState("demo");
  const [email, setEmail] = useState("demo@example.com");
  const [userUpdate, setUserUpdate] = useState("");
  const [emailUpdate, setEmailUpdate] = useState("");
  return (
    <E.Container>
      <E.Wrapper>
        <E.Title>General</E.Title>
        <E.Section>
          <E.SectionTitle>Account</E.SectionTitle>
          <E.Field>
            <E.FieldTitle>Username</E.FieldTitle>
            <E.FieldVal>{username}</E.FieldVal>
            <E.FieldButton>Update</E.FieldButton>
          </E.Field>
          <E.Field>
            <E.FieldTitle>Email</E.FieldTitle>
            <E.FieldInput></E.FieldInput>
            <E.FieldButton>Update</E.FieldButton>
          </E.Field>
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
