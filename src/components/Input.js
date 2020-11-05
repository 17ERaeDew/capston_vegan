import React from 'react';
import {
  TextInput,
  Text,
  StyleSheet,
  KeyboardAvoidingView
} from 'react-native';

export function CustomInput(props) {
    return (
        <TextInput 
            style={styles.TextInput}
          onChangeText={text => props.onChangeText(text)}
          value={props.value}
          placeholder={props.placeholder}
        />
    )
}

export function CustomKeyboardAviodInput(props) {
    return (
      <KeyboardAvoidingView 
        style={styles.container}
        behavior="padding"
        enabled
        >
        <TextInput 
        style={styles.TextInput}
          onChangeText={text => props.onChangeText(text)}
          value={props.value}
          />
       </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
        // paddingHorizontal: '0%',
        // paddingVertical: 100
    },
  TextInput: {
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 10,
    width: '100%',
    height: 70,
    fontSize: 20,
    backgroundColor: 'white',
    paddingLeft: 20
  },
  title: {
    fontSize: 30,
    color: 'white'
  },
});

CustomInput.defaultProps = {
    value: '',
    onChangeText: ()=>{},
    placeholder: ''
};

CustomKeyboardAviodInput.defaultProps = {
    value: '',
    onChangeText: ()=>{},
};