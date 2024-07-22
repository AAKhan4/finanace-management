import React, { useContext, useState } from "react";
import * as E from "../GeneralElems";
import axios from "axios";
import Cookies from "js-cookie";
import { UserContext } from "../../../../context/UserContext";

export default function Password() {
  const { setToken } = useContext(UserContext);
  const path = "http://localhost:5050/user/password";
  const [toggle, setToggle] = useState(false);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handlePasswordSubmit = () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (newPassword.length < 8) {
      alert("Password must be at least 8 characters long");
      return;
    }

    const payload = {
      password: password,
      newPassword: newPassword,
    };

    axios
      .patch(path, payload)
      .then((res) => {
        console.log(res);
        setToken(null);
        setToken(Cookies.get("user"));
        setToggle(false);
      })
      .catch((err) => {
        console.log(err);
      });
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
              <E.FieldInput
                type="password"
                name="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </E.FieldValContainer>
          </E.Field>
          <E.Field>
            <E.FieldTitleContainer>
              <E.FieldTitle>New Password</E.FieldTitle>
            </E.FieldTitleContainer>
            <E.FieldValContainer style={{ width: "60%" }}>
              <E.FieldInput
                type="password"
                name="newPassword"
                onChange={(e) => {
                  setNewPassword(e.target.value);
                }}
              />
            </E.FieldValContainer>
          </E.Field>
          <E.Field>
            <E.FieldTitleContainer>
              <E.FieldTitle>Confirm Password</E.FieldTitle>
            </E.FieldTitleContainer>
            <E.FieldValContainer style={{ width: "60%" }}>
              <E.FieldInput
                type="password"
                name="confirmPassword"
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />
            </E.FieldValContainer>
          </E.Field>
          <E.Field style={{ justifyContent: "center", marginTop: "40px" }}>
            <E.FieldButtonContainer>
              <E.Accept onClick={handlePasswordSubmit}>Confirm</E.Accept>
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
