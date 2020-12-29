import React from 'react';
import { Dimensions, StatusBar } from 'react-native';
import { CustomColor } from './styledComponents/variables';

export function CustomStatusBar(props) {
  return (
    <StatusBar barStyle="light-content" backgroundColor={CustomColor.primary} />
  );
}
