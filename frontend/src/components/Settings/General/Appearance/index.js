import React, { useContext, useState } from "react";
import * as E from "../GeneralElems";
import * as A from "./AppearanceElems";
import { ThemeContext } from "../../../../context/ThemeContext";

export default function Appearance() {
  const [toggle, setToggle] = useState("light");
  const { toggleTheme } = useContext(ThemeContext);

  const renderOptions = () =>
    ["light", "dark"].map((option) => (
      <A.ThemeButton
        active={toggle === option}
        onClick={() => {
            setToggle(option);
            toggleTheme(option);
        }}
      >
        <A.DemoNav option={option}>
          <A.DemoNavText option={option}>
            {`${option} theme`.toUpperCase()}
          </A.DemoNavText>
        </A.DemoNav>
        <A.DemoBody option={option}>
          <A.DemoBodyText
            option={option}
          >{`${option} theme primary text.`}</A.DemoBodyText>
          <A.DemoBodyTextSecondary
            option={option}
          >{`${option} theme secondary text.`}</A.DemoBodyTextSecondary>
          <A.DemoButton option={option}>button</A.DemoButton>
        </A.DemoBody>
      </A.ThemeButton>
    ));

  return (
    <>
      <E.SectionSubtitle>Website Theme</E.SectionSubtitle>
      <E.Field style={{justifyContent: 'center'}}>
        <A.AppearanceContainer>{renderOptions()}</A.AppearanceContainer>
      </E.Field>
    </>
  );
}
