import React, { useState, useContext } from "react";
import * as E from "../GeneralElems";
import axios from "axios";
import { UserContext } from "../../../../context/UserContext";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function Accounts() {
  const path = "http://localhost:5050/user";
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  let demoUser = user;
  if (!demoUser)
    demoUser = {
      username: "demo",
      email: "demo@example.com",
    };

  const { setToken } = useContext(UserContext);
  const [userToggle, setUserToggle] = useState(false);
  const [name, setName] = useState(demoUser.username);
  const [emailToggle, setEmailToggle] = useState(false);
  const [email, setEmail] = useState(demoUser.email);
  const [deleteToggle, setDeleteToggle] = useState(false);

  const handleUserToggle = () => {
    setUserToggle(!userToggle);
  };

  const handleUserSubmit = () => {
    axios
      .patch(path, { username: name })
      .then((res) => {
        console.log(res);
        setToken(null);
        setToken(Cookies.get("user"));
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
      .patch(path, { email: email })
      .then((res) => {
        console.log(res);
        setToken(null);
        setToken(Cookies.get("user"));
        setEmailToggle(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAccountDelete = () => {
    axios
      .delete(path)
      .then((res) => {
        console.log(res);
        setToken(null);
        Cookies.remove("user");
        navigate("/login");
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
  return (
    <>
      <E.SectionSubtitle style={{ textAlign: "center" }}>
        User Details & Information
      </E.SectionSubtitle>
      {renderAccountsFields()}
      {!deleteToggle ? (
        <E.Field style={{ justifyContent: "center", marginTop: "40px" }}>
          <E.Cancel
            onClick={() => {
              setDeleteToggle(!deleteToggle);
            }}
          >
            Delete Account
          </E.Cancel>
        </E.Field>
      ) : (
        <>
          <E.Field
            style={{
              justifyContent: "center",
              marginTop: "40px",
              flexDirection: "column",
            }}
          >
            <E.FieldTitle style={{ textAlign: "center" }}>
              Deleting your account will result in all data being lost.
            </E.FieldTitle>
            <E.FieldTitle style={{ textAlign: "center" }}>
              Are you sure you want to delete your account?
            </E.FieldTitle>
          </E.Field>
          <E.Field style={{ justifyContent: "center", marginTop: "40px" }}>
            <E.Cancel style={{ marginRight: 20 }} onClick={handleAccountDelete}>
              Confirm Delete
            </E.Cancel>
            <E.Accept
              style={{ marginRight: 0 }}
              onClick={() => {
                setDeleteToggle(!deleteToggle);
              }}
            >
              Cancel
            </E.Accept>
          </E.Field>
        </>
      )}
    </>
  );
}
