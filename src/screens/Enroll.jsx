import * as React from 'react';
import { StyleSheet, Image, View, Text, ActivityIndicator } from "react-native";
import { CustomButton } from '../components/Button';
import { CustomInput } from '../components/Input';
import { ImagePickerExample } from '../components/ImgInput';
import { useEnroll, useOcr } from '../hooks';
import { SliderBox } from 'react-native-image-slider-box';


export function EnrollStart({navigation}){
    return (
        <View style={styles.container}>
            <View>
                <Image
                    style={styles.people}
                    source={require('../assets/images/enroll_people.png')}
                />
            </View>
            <View>
                <Text style={styles.baseText}>
                    채식사이를 이용해주셔서 감사합니다!
                    {'\n'}
                    이용전에 간단한 설정을 부탁드립니다.
                </Text>
            </View>
            <View style={styles.buttonView}>
                <CustomButton 
                    title="시작하기"
                    onPress={()=> navigation.navigate('EnrollName')}
                />
            </View>
      </View>
    )
}


export function EnrollName({navigation}){
    const [enroll, setEnroll] = useEnroll();

    return (
        <View style={styles.container}>
            <Image
                style={styles.people}
                source={require('../assets/images/enroll_name.png')}
            />
            <Image
                style={styles.switch}
                source={require('../assets/images/enroll_switch_first.png')}
            />
            <View style={styles.input}>
                <CustomInput 
                    placeholder="이름을 입력해주세요."
                    onChangeText={(text) => setEnroll.inputName(text)}
                    value={enroll.enroll.name}
                />
            </View>
            <View style={styles.buttonView}>
                {enroll.enroll.name === '' ? (
                    <CustomButton 
                        title="다음"
                        backgroundColor="#ffffff"
                        fontColor="#C9C9C9"
                        borderColor="gray"
                    />
                ) : (
                <CustomButton 
                    title="다음"
                    onPress={()=> {
                        setEnroll.finEnroll();
                        navigation.navigate('EnrollVegan')}
                    }
                />
                )}
            </View>
      </View>
    )
}

export function EnrollVegan({navigation}){
    const [enroll, setEnroll] = useEnroll();
    const vegan_kind = [require('../assets/images/enroll_vegan_start.png'),
     require('../assets/images/enroll_vegan_flexitarian.png'),
     require('../assets/images/enroll_vegan_pollo.png'),
     require('../assets/images/enroll_vegan_pesco.png'),
     require('../assets/images/enroll_vegan_lacto-ovo.png'),
     require('../assets/images/enroll_vegan_ovo.png'),
     require('../assets/images/enroll_vegan_lacto.png'),
     require('../assets/images/enroll_vegan_vegan.png')];
    
    return (
        <View style={styles.container}>
            <View style={styles.imgSlider}>
                <SliderBox
                    images={vegan_kind}
                    dotColor="#009945"
                    inactiveDotColor="gray"
                    ImageComponentStyle={{ width: 300, height: 300 }}
                    parentWidth={300}
                    parentHeight={300}
                    currentImageEmitter={(index) => {
                        setEnroll.selectVegan(
                            index
                        );
                    }}
                />
            </View>
            <Image
                style={styles.switch}
                source={require('../assets/images/enroll_switch_second.png')}
            />
            <View style={styles.buttonView}>
                {enroll.enroll.vegan === 0 ? (
                    <CustomButton 
                        title="다음"
                        backgroundColor="#ffffff"
                        fontColor="#C9C9C9"
                        borderColor="gray"
                    />
                ) : (
                <CustomButton 
                    title="다음"
                    onPress={()=> {
                        setEnroll.finEnroll();
                        navigation.navigate('EnrollFinish')}
                    }
                />
                )}
            </View>
      </View>
    )
}

export function EnrollFinish({navigation}){
    return (
        <View style={styles.container}>
            <View>
                <Image
                    style={styles.people}
                    source={require('../assets/images/enroll_people_fin.png')}
                />
            </View>
            <Image
                style={styles.switch}
                source={require('../assets/images/enroll_switch_third.png')}
            />
            <View>
                <Text style={styles.baseText}>
                    설정이 모두 완료되었습니다!
                    {'\n'}
                    채식사이를 이용해주셔서 감사합니다!
                </Text>
            </View>
            <View style={styles.buttonView}>
                <CustomButton 
                    title="확인"
                    onPress={()=> navigation.navigate('TestOCR')}
                />
            </View>
        </View>
    )
}

export function TestOCR({navigation}){
    const [ocr, setOcr] = useOcr();
    console.log(ocr.ocrState.responses[0].textAnnotations[0].description)
    return (
        <View style={styles.container}>
            <ImagePickerExample image={ocr.image} setImage={setOcr.setImage} />
            {/* <Image
                style={styles.base64image}
                source={{uri: ocr.image}}
            /> */}
            {ocr.loading && <ActivityIndicator size="large" color="#0000ff" />}
                <Text >
                    {ocr.ocrState.responses[0].textAnnotations[0].description}
                </Text>
            <View style={styles.buttonView}>
                <CustomButton 
                    title="확인"
                    onPress={()=>setOcr.getOcr(ocr.image)}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
        // paddingHorizontal: '0%',
        // paddingVertical: 100
    },
    people: {
        margin: 'auto'
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
    buttonView: {
        width: '80%'
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