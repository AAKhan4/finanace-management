import React, { useState, useContext } from "react";
import * as E from "../GeneralElems";
import axios from "axios";
import { UserContext } from "../../../../context/UserContext";
import Cookies from "js-cookie";

export default function Accounts() {
  const basePath = "http://localhost:5050/";
  const demoUser = {
    username: "demo",
    email: "demo@example.com",
  };
  const { setToken } = useContext(UserContext);
  const [userToggle, setUserToggle] = useState(false);
  const [name, setName] = useState(demoUser.username);
  const [emailToggle, setEmailToggle] = useState(false);
  const [email, setEmail] = useState(demoUser.email);

  const handleUserToggle = () => {
    setUserToggle(!userToggle);
  };

  const handleUserSubmit = () => {
    axios
      .patch(`${basePath}user`, { username: name })
      .then((res) => {
        console.log(res);
        setToken(null);
        setToken(Cookies.get("token"));
        setUserToggle(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEmailToggle = () => {
    setEmailToggle(!emailToggle);
  };

  const handleEmailSubmit = () => {
    axios
      .patch(`${basePath}user`, { email: email })
      .then((res) => {
        console.log(res);
        setToken(null);
        setToken(Cookies.get("token"));
        setUserToggle(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const renderAccountsFields = () => {
    return ["u", "e"].map((field) => {
      const toggle = field === "u" ? userToggle : emailToggle;
      const handleToggle = field === "u" ? handleUserToggle : handleEmailToggle;
      const handleSubmit = field === "u" ? handleUserSubmit : handleEmailSubmit;

      return (
        <E.Field key={field}>
          <E.FieldTitleContainer>
            <E.FieldTitle>{field === "u" ? "Username" : "Email"}</E.FieldTitle>
          </E.FieldTitleContainer>
          {toggle ? (
            <>
              <E.FieldValContainer>
                <E.FieldInput
                  onChange={(e) => {
                    field === "u"
                      ? setName(e.target.value)
                      : setEmail(e.target.value);
                  }}
                  placeholder={
                    field === "u" ? demoUser.username : demoUser.email
                  }
                  defaultValue={
                    field === "u" ? demoUser.username : demoUser.email
                  }
                />
              </E.FieldValContainer>
              <E.FieldButtonContainer>
                <E.Accept onClick={handleSubmit}>Y</E.Accept>
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
