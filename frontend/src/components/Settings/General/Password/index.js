import React from "react";
import * as E from "../GeneralElems";

export default function Password() {
  const [toggle, setToggle] = React.useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      {toggle ? (
        <>
          <E.Field>
            <E.FieldTitleContainer>
              <E.FieldTitle>Current Password</E.FieldTitle>
            </E.FieldTitleContainer>
            <E.FieldValContainer style={{ width: "60%" }}>
              <E.FieldInput type="password" name="password" />
            </E.FieldValContainer>
          </E.Field>
          <E.Field>
            <E.FieldTitleContainer>
              <E.FieldTitle>New Password</E.FieldTitle>
            </E.FieldTitleContainer>
            <E.FieldValContainer style={{ width: "60%" }}>
              <E.FieldInput type="password" name="newPassword" />
            </E.FieldValContainer>
          </E.Field>
          <E.Field>
            <E.FieldTitleContainer>
              <E.FieldTitle>Confirm Password</E.FieldTitle>
            </E.FieldTitleContainer>
            <E.FieldValContainer style={{ width: "60%" }}>
              <E.FieldInput type="password" name="confirmPassword" />
            </E.FieldValContainer>
          </E.Field>
          <E.Field style={{ justifyContent: "center", marginTop: "40px" }}>
            <E.FieldButtonContainer>
              <E.Accept>Confirm</E.Accept>
              <E.Cancel onClick={handleToggle}>Cancel</E.Cancel>
            </E.FieldButtonContainer>
          </E.Field>
        </>
      ) : (
        <>
          <E.SectionSubtitle style={{ textAlign: "center" }}>
            Account may be lost if password is forgotten
          </E.SectionSubtitle>
          <E.Field style={{ justifyContent: "center", marginTop: "40px" }}>
            <E.FieldButton onClick={handleToggle}>
              Change Password
            </E.FieldButton>
          </E.Field>
        </>
      )}
    </>
  );
}
