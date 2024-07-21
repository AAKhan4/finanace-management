import React from "react";
import * as E from "./GeneralElems";

export default function General() {
  return (
    <E.Container>
      <E.Wrapper>
        <E.Title>General</E.Title>
        <E.Section>
          <E.SectionTitle>Account</E.SectionTitle>
          <E.Field>
            <E.FieldTitle>Username</E.FieldTitle>
            <E.FieldVal>demo</E.FieldVal>
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
