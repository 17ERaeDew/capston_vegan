import styled from "styled-components/native";
import { color } from "./variables";

const style = (customStyle, atr) => {
  switch (customStyle) {
    case "Headline5":
      return atr.Headline5;
    case "Headline6":
      return atr.Headline6;
    case "Subtitle1":
      return atr.Subtitle1;
    case "Subtitle2":
      return atr.Subtitle2;
    case "Body1":
      return atr.Body1;
    case "Body2":
      return atr.Body2;
    case "Button":
      return atr.Button;
    case "Caption":
      return atr.Caption;
    case "Overline":
      return atr.Overline;
    default:
      return atr.Body1;
  }
};

const Button = styled.Button`
  align-items: center;
  justifycontent: center;
  borderradius: 50;
  color: ${style("Button", color)};
  borderwidth: 2;
  height: 68px;
  width: 386px;
`;

export default Button;
