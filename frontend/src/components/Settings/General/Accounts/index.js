import React, { useState } from "react";
import * as E from "../GeneralElems";

export default function Accounts() {
  const demoUser = {
    username: "demo",
    email: "demo@example.com",
  };
  const [userToggle, setUserToggle] = useState(false);
  const [emailToggle, setEmailToggle] = useState(false);

  const handleUserToggle = () => {
    setUserToggle(!userToggle);
  };

  const handleEmailToggle = () => {
    setEmailToggle(!emailToggle);
  };

  const renderAccountsFields = () => {
    return ["u", "e"].map((field) => {
      const toggle = field === "u" ? userToggle : emailToggle;
      const handleToggle = field === "u" ? handleUserToggle : handleEmailToggle;

      return (
        <E.Field key={field}>
          <E.FieldTitle>{field === "u" ? "Username" : "Email"}</E.FieldTitle>
          {toggle ? (
            <>
              <E.FieldInput />
              <E.FieldButtonContainer>
                <E.Accept>Y</E.Accept>
                <E.Cancel onClick={handleToggle}>N</E.Cancel>
              </E.FieldButtonContainer>
            </>
          ) : (
            <>
              <E.FieldVal>
                {field === "u" ? demoUser.username : demoUser.email}
              </E.FieldVal>
              <E.FieldButtonContainer>
                <E.FieldButton onClick={handleToggle}>Update</E.FieldButton>
              </E.FieldButtonContainer>
            </>
          )}
        </E.Field>
      );
    });
  };
  return renderAccountsFields();
}
