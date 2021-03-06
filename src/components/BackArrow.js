import React from 'react';
import styled from 'styled-components/native';
import {
  CustomColor,
  fontFamily,
  fontSize,
} from './styledComponents/variables';

const TouchableOpacity = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  border-width: ${({ disabled }) => (disabled ? '2px' : '0px')};
  border-color: ${({ disabled }) =>
    disabled ? 'rgba(0, 0, 0, 0.38)' : CustomColor.background};
  background-color: ${({ disabled }) =>
    disabled ? CustomColor.surface : CustomColor.primary};
  opacity: ${({ disabled }) => (disabled ? 0.38 : 1)};
  height: 68px;
  width: 100%;
`;

const Text = styled.Text`
  font-family: ${fontFamily.headline5};
  font-size: ${fontSize.headline5};
  color: ${({ disabled }) =>
    disabled ? CustomColor.onSecondary : CustomColor.background};
  opacity: ${({ disabled }) => (disabled ? 0.38 : 1)};
`;

export function BackArrow(props) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      activeOpacity={0.8}
      disabled={props.disabled}
    >
      <Text
        disabled={props.disabled}
        customStyle="Headline5"
        color="background"
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}

CustomButton.defaultProps = {
  title: 'button',
  backgroundColor: '#009945',
  onPress: () => {},
  fontColor: 'white',
  borderColor: '#009945',
  disabled: false,
};
