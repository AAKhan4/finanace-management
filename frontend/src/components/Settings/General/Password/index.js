import React from "react";
import * as E from "../GeneralElems";

export default function Password() {
  return (
    <E.Field>
      <E.FieldTitleContainer>
        <E.FieldTitle>CurrentPassword</E.FieldTitle>
      </E.FieldTitleContainer>
      <E.FieldValContainer>
        <E.FieldInput
          type="password"
          name="password"
          style={{textAlign: "left"}}
        />
      </E.FieldValContainer>
    </E.Field>
  );
}
