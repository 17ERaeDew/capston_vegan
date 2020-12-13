import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import {
  CustomColor,
  fontFamily,
  fontSize,
} from './styledComponents/variables';

const win = Dimensions.get('window');

const TextInput = styled.TextInput`
  display: ${({ display }) => display};
  font-size: ${fontSize.body1};
  font-family: ${fontFamily.body1};
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ onFoucs }) =>
    onFoucs ? CustomColor.primary : CustomColor.onSecondary};
  padding: 12px 16px 12px 16px;
`;

export function CustomInput(props) {
  return (
    <TextInput
      onChangeText={(text) => props.onChangeText(text)}
      value={props.value}
      placeholder={props.placeholder}
      autoCompleteType={props.autoCompleteType}
      secureTextEntry={props.secureTextEntry}
      display={props.display}
    />
  );
}

CustomInput.defaultProps = {
  display: 'flex',
  value: '',
  onChangeText: () => {},
  placeholder: '',
  autoCompleteType: 'off',
  secureTextEntry: false,
};
