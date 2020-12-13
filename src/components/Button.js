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
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`;

const Text = styled.Text`
  font-family: ${fontFamily.headline5};
  font-size: ${fontSize.headline5};
  color: ${({ disabled }) =>
    disabled ? CustomColor.onSecondary : CustomColor.background};
  opacity: ${({ disabled }) => (disabled ? 0.38 : 1)};
`;

export function CustomButton(props) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      activeOpacity={1}
      disabled={props.disabled}
      height={props.height}
      width={props.width}
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

const ReverseTouchableOpacity = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  border-width: 2px;
  border-color: ${({ disabled }) =>
    disabled ? 'rgba(0, 0, 0, 0.38)' : CustomColor.primary};
  background-color: ${({ disabled }) =>
    disabled ? CustomColor.surface : CustomColor.background};
  opacity: ${({ disabled }) => (disabled ? 0.38 : 1)};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`;

const ReverseText = styled.Text`
  font-family: ${fontFamily.headline5};
  font-size: ${fontSize.headline5};
  color: ${({ disabled }) =>
    disabled ? CustomColor.onSecondary : CustomColor.primary};
  opacity: ${({ disabled }) => (disabled ? 0.38 : 1)};
`;

export function ReverseButton(props) {
  return (
    <ReverseTouchableOpacity
      onPress={props.onPress}
      activeOpacity={1}
      disabled={props.disabled}
      height={props.height}
      width={props.width}
    >
      <ReverseText
        disabled={props.disabled}
        customStyle="Headline5"
        color="background"
      >
        {props.title}
      </ReverseText>
    </ReverseTouchableOpacity>
  );
}

CustomButton.defaultProps = {
  title: 'button',
  backgroundColor: '#009945',
  onPress: () => {},
  fontColor: 'white',
  borderColor: '#009945',
  disabled: false,
  height: '68px',
  width: '100%',
};

ReverseButton.defaultProps = {
  title: 'button',
  backgroundColor: '#009945',
  onPress: () => {},
  fontColor: 'white',
  borderColor: '#009945',
  disabled: false,
  height: '68px',
  width: '100%',
};
