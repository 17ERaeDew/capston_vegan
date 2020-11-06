import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

export function CustomButton(props) {
    return (
      <TouchableOpacity 
        style={[styles.button, {backgroundColor: props.backgroundColor, borderColor: props.borderColor}]}
        onPress={props.onPress}
        activeOpacity={1}
        >
        <Text style={[
          styles.title, {color: props.fontColor}]}>{props.title}</Text>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    height: 68,
    backgroundColor: '#009945',
    color: "#009945",
    borderWidth: 2,
  },
  title: {
    fontSize: 30,
    color: 'white'
  }
});

CustomButton.defaultProps = {
    title: 'button',
    backgroundColor: '#009945',
    onPress: ()=>{},
    fontColor: 'white',
    borderColor: '#009945'
};
