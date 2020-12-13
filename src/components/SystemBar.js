import React from 'react';
import styled from 'styled-components/native';
import { CustomColor } from './styledComponents/variables';
import Text from './styledComponents/Text';

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

export function ErrorBar(props) {
  return (
    <View
      style={{
        ...props.style,
        backgroundColor: CustomColor.error,
        borderRadius: 8,
      }}
    >
      <Text customStyle="Headline5" color="background">
        이 제품은 사용자에게 적합하지 않습니다.
      </Text>
    </View>
  );
}
