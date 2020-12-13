import * as React from "react";
import { StyleSheet, Image, View, ActivityIndicator } from "react-native";
import { CustomButton } from "../components/Button";
import { CustomInput } from "../components/Input";
import { ImagePickerExample } from "../components/ImgInput";
import { CustomBar } from "../components/SystemBar";
import { useEnroll, useOcr } from "../hooks";
import { SliderBox } from "react-native-image-slider-box";
import Text from "../components/styledComponents/Text";


export default function TestOCR({ navigation }) {
  const [ocr, setOcr] = useOcr();
  return (
    <View style={styles.container}>
      <ImagePickerExample image={ocr.image} setImage={setOcr.setImage} />
      {/* <Image
                style={styles.base64image}
                source={{uri: ocr.image}}
            /> */}
      {ocr.loading && <ActivityIndicator size="large" color="#0000ff" />}
      <Text>
        {/* {ocr.ocrState} */}
      </Text>
      <View style={styles.buttonView}>
        <CustomButton title="확인" onPress={() => setOcr.getOcr(ocr.image)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: 'white',
        paddingLeft: '10%',
        paddingRight: '10%'
    },
    enrollStart_image: {
        width: '100%',
    },
    top_image: {
        position: 'absolute', 
        top: "16%",
        left: '10%', 
        right: '10%', 
    },
    bottom_button: {
        position: 'absolute', 
        left: '10%', 
        right: '10%', 
        bottom: 64
    },
    switch: {
        height: 20,
        margin: 20
    },
    input: {
        marginBottom: 30,
        width: '80%'
    },
    baseText: {
        fontSize: 18,
        lineHeight: 30,
        marginBottom: 30
    },
    startButton: {
        borderRadius: 5,
        height: 40
    },
    imgSlider: {
        height: 300
    },
    base64image: {
        height: 300,
        width: 300
    }
})