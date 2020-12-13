import React from 'react';
import styled from 'styled-components/native';

const IconButton = styled.TouchableOpacity``;
const View = styled.View``;
const Image = styled.Image``;

export function OpcaityIcon(props) {
  return (
    <IconButton disabled={props.disabled}>
      <View></View>
    </IconButton>
  );
}

export function PersonIcon(props) {
  return (
    <IconButton
      onPress={props.onPress}
      activeOpacity={1}
      disabled={props.disabled}
      style={props.style}
    >
      <View>
        <Image source={require('../assets/images/person.png')} />
      </View>
    </IconButton>
  );
}

export function CameraIcon(props) {
  return (
    <IconButton
      onPress={props.onPress}
      activeOpacity={1}
      disabled={props.disabled}
      style={props.style}
    >
      <Image source={require('../assets/images/camera.png')} />
    </IconButton>
  );
}

export function SnapIcon(props) {
  return (
    <IconButton
      onPress={props.onPress}
      activeOpacity={1}
      disabled={props.disabled}
      style={props.style}
    >
      <Image source={require('../assets/images/snap.png')} />
    </IconButton>
  );
}

PersonIcon.defaultProps = {
  title: 'button',
  backgroundColor: '#009945',
  onPress: () => {},
  fontColor: 'white',
  borderColor: '#009945',
  disabled: false,
};

CameraIcon.defaultProps = {
  title: 'button',
  backgroundColor: '#fff',
  onPress: () => {},
  disabled: false,
};
