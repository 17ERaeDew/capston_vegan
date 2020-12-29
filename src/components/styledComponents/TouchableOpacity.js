import styled from "styled-components/native";
import { CustomColor } from "./variables";

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
      return CustomColor.primary;
  }
};

const TouchableOpacity = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background-color: ${({ backgroundColor }) => styleColor(backgroundColor)};
  height: 68px;
  width: 286px;
`;

export default TouchableOpacity;
