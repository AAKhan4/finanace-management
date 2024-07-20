import React from "react";
import * as E from "./SignupElems";

export default function Signup() {
    return (
        <E.Container>
            <E.Wrapper>
                <E.Form>
                    <E.Title>Sign up</E.Title>
                    <E.Desc>Create a new account.</E.Desc>
                    <E.Input type="text" placeholder="Username" />
                    <E.Input type="email" placeholder="Email" />
                    <E.Input type="password" placeholder="Password" />
                    <E.Input type="password" placeholder="Confirm Password" />
                    <E.Button>Sign up</E.Button>
                </E.Form>
            </E.Wrapper>
        </E.Container>
    );
}