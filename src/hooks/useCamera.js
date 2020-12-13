import React from 'react';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { CommonActions } from '@react-navigation/native';

export default function useCamera() {
  const [hasPermission, setHasPermission] = React.useState(null);
  const [type, setType] = React.useState(Camera.Constants.Type.back);

  const getPermission = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  React.useEffect(() => {
    const per = getPermission;
    per();
    return per;
  }, []);

  return [
    { hasPermission, type },
    { setHasPermission, setType },
  ];
}

export function usePickerCamera(navigation, nextNav) {
  React.useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const {
          status,
        } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const openCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
      base64: true,
    });

    if (!result.cancelled) {
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [
            {
              index: 1,
              name: nextNav,
              params: {
                image: result.base64,
                width: result.width,
                height: result.height,
              },
            },
          ],
        }),
      );
    }
  };

  return openCamera;
}
