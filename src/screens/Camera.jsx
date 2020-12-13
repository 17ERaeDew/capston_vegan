import * as React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { CameraIcon, SnapIcon } from '../components/IconButton';
import { CustomStatusBar } from '../components/StatusBar';
import Text from '../components/styledComponents/Text';
import { Camera } from 'expo-camera';
import { useCamera } from '../hooks';
const win = Dimensions.get('window');

export function CameraView({ navigation, route }) {
  const [cameraState, setCamera] = useCamera();
const cameraRef = React.useRef(null);

const SnapShot = async () => {
  if (cameraRef.current) {
    let photo = await cameraRef.current.takePictureAsync();
    console.log(photo);
  }
}

  if (cameraState.hasPermission === null) {
    return <View />;
  }
  if (cameraState.hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <View style={styles.camera_screen}>
        <Camera
          type={cameraState.type}
          style={{ flex: 1 }}
          ref={cameraRef}
        />
      </View>
      <View style={styles.bottom}>
        <SnapIcon style={styles.camera} onPress={SnapShot} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    alignItems: 'center',
  },
  top_view: {
    marginTop: win.height * 0.165 - 80,
    alignItems: 'center',
  },
  card: {
    width: win.width * 0.47,
  },
  camera_screen: {
    width: win.width,
    height: win.height * 0.64,
    marginTop: win.height * 0.01,
    marginBottom: win.height * 0.01,
  },
  bottom: {
    backgroundColor: '#C9C9C9',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#c9c9c9',
    width: win.width,
    height: win.height * 0.34 - 80,
  },
});
