import styled from "styled-components/native";
import { fontFamily, fontSize, CustomColor } from "./variables";

const style = (customStyle, atr) => {
  switch (customStyle) {
    case "Headline5":
      return atr.headline5;
    case "Headline6":
      return atr.headline6;
    case "Subtitle1":
      return atr.subtitle1;
    case "Subtitle2":
      return atr.subtitle2;
    case "Body1":
      return atr.body1;
    case "Body2":
      return atr.body2;
    case "Button":
      return atr.button;
    case "Caption":
      return atr.caption;
    case "Overline":
      return atr.overline;
    default:
      return atr.body1;
  }
};

const styleColor = (color) => {
  switch (color) {
    case "primary":
      return CustomColor.primary;
    case "secondary":
      return CustomColor.secondary;
    case "background":
      return CustomColor.background;
    case "surface":
      return CustomColor.surface;
    case "error":
      return CustomColor.error;
    case "onPrimary":
      return CustomColor.onPrimary;
    case "onSecondary":
      return CustomColor.onSecondary;
    case "onBackground":
      return CustomColor.onBackground;
    case "onSurface":
      return CustomColor.onSurface;
    case "onError":
      return CustomColor.onError;
    default:
      return CustomColor.onSecondary;
  }
};

const Text = styled.Text`
  font-family: ${({ customStyle }) => style(customStyle, fontFamily)};
  font-size: ${({ customStyle }) => style(customStyle, fontSize)};
  color: ${({ color }) => styleColor(color)};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "auto")};
`;

export default Text;
