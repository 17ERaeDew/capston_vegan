import React from 'react';
import { Camera } from 'expo-camera';

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
