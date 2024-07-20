import React from "react";
import * as E from "../UserElems";

export default function Signup() {
    return (
        <E.Container>
            <E.Wrapper>
                <E.Form>
                    <E.Title>Log in</E.Title>
                    <E.Desc>Sign in to your current account.</E.Desc>
                    <E.Label>Email</E.Label>
                    <E.Input type="email" placeholder="email@example.com" />
                    <E.Label>Password</E.Label>
                    <E.Input type="password" placeholder="Password" />
                    <E.Button>Log in</E.Button>
                </E.Form>
            </E.Wrapper>
        </E.Container>
    );
}