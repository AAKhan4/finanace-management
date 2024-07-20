import React from "react";
import * as E from "../UserElems";

export default function Signup() {
    return (
        <E.Container>
            <E.Wrapper>
                <E.Form>
                    <E.Title>Sign up</E.Title>
                    <E.Desc>Create a new account.</E.Desc>
                    <E.Label>Username</E.Label>
                    <E.Input type="text" placeholder="Username" />
                    <E.Label>Email</E.Label>
                    <E.Input type="email" placeholder="email@example.com" />
                    <E.Label>Password</E.Label>
                    <E.Input type="password" placeholder="Password" />
                    <E.Label>Confirm Password</E.Label>
                    <E.Input type="password" placeholder="Confirm Password" />
                    <E.Button>Sign up</E.Button>
                </E.Form>
            </E.Wrapper>
        </E.Container>
    );
}