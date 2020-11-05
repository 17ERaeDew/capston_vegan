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

export function CustomArrow(props) {
    return (
      <TouchableOpacity 
        style={styles.arrow}
        onPress={props.onPress}
        activeOpacity={1}
        >
        <Text>{'<'}</Text>
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
  },
  arrow: {
    borderRadius: 100,
    borderWidth: 2,
    height: 30,
    width: 30
  }
});

CustomButton.defaultProps = {
    title: 'button',
    backgroundColor: '#009945',
    onPress: ()=>{},
    fontColor: 'white',
    borderColor: '#009945'
};

CustomArrow.defaultProps = {
  onPress: ()=>{}
}