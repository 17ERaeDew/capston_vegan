import React from 'react';
import styled from 'styled-components/native';
import {
  CustomColor,
  fontFamily,
  fontSize,
} from './styledComponents/variables';

const View = styled.View`
  position: absolute;
  background-color: ${() => CustomColor.primary};
  color: ${CustomColor.primary};
  height: 56px;
  width: 100%;
`;

export function CustomBar(props) {
  return <View>{props.children}</View>;
}
