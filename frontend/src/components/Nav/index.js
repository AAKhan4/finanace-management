import React, { useContext } from "react";
import * as E from "./NavElems";
import { UserContext } from "../../context/UserContext";

export default function Nav() {
  const { user } = useContext(UserContext);
  return (
    <E.Container>
      <E.Wrapper>
        <E.Logo href="/">
          <E.Name>FinMan</E.Name>
        </E.Logo>
        <E.ButtonContainer>
          {user ? (
            <>
              <E.User href="/settings">{user.username}</E.User>
              <E.Button href="/logout">Logout</E.Button>
            </>
          ) : (
            <>
              <E.Button href="/login">Login</E.Button>
              <E.Button href="/signup">Signup</E.Button>
            </>
          )}
        </E.ButtonContainer>
      </E.Wrapper>
    </E.Container>
  );
}
