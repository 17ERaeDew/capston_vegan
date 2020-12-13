import * as React from "react";
import { StyleSheet, Image, View, ActivityIndicator, Dimensions } from "react-native";
import { CustomButton } from "../components/Button";
import { useOcr } from "../hooks";
import Text from "../components/styledComponents/Text";

const win = Dimensions.get('window');

export default function Ocr({ navigation, route }) {
  const [ocr, setOcr] = useOcr();
  const inputEl = React.useRef(route.params.image);
  const imgHeight = (route.params.height * win.width * 0.96) / route.params.width;
  return (
    <View style={styles.container}>
      <Image
        style={{
          marginTop: win.height * 0.5 - imgHeight / 2 - 80,
          opacity: 0.3,
          width: win.width * 0.96,
          height: imgHeight,
        }}
        source={{ uri: `data:image/png;base64,${inputEl.current}` }}
      />
      <View
        style={{
          ...styles.loading,
          top: imgHeight / 2 + win.height * 0.5 - imgHeight / 2 - 80,
        }}
      >
        <ActivityIndicator size="large" color="#009945" />
        <View style={{ height: win.height * 0.03 }} />
        <Text textAlign="center" customStyle="Subtitle1">
          채식 사이가 필터링 하는중입니다.{'\n'}잠시만 기다려 주세요.
        </Text>
      </View>

      <View style={styles.buttonView}>
        <CustomButton title="확인" onPress={() => setOcr.getOcr(ocr.image)} />
      </View>
      <View style={styles.buttonView}>
        <CustomButton
          title="home"
          onPress={() => navigation.navigate({ name: 'Home' })}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingLeft: '2%',
    paddingRight: '2%',
    paddingTop: '2%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    position: 'absolute',
    right: 0,
    left: 0,
  }
});