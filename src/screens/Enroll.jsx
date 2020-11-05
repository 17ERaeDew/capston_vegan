import * as React from 'react';
import { StyleSheet, Image, View, Text } from "react-native";
import { CustomButton, CustomArrow } from '../components/Button';
import { CustomInput } from '../components/Input';

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
    const [name, setName] = React.useState('');
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
                    onChangeText={(text) => setName(text)}
                    value={name}
                />
            </View>
            <View style={styles.buttonView}>
                {name === '' ? (
                    <CustomButton 
                        title="다음"
                        backgroundColor="#ffffff"
                        fontColor="#C9C9C9"
                        borderColor="gray"
                    />
                ) : (
                <CustomButton 
                    title="다음"
                    onPress={()=> navigation.navigate('EnrollVegan')}
                />
                )}
            </View>
      </View>
    )
}

export function EnrollVegan(){
    const [vegan, setVegan] = React.useState('start');
    // const vegan_kind = ['../assets/images/enroll_vegan_start.png', 'flexitarian', 'pollo', 'pesco', 'lacto-ovo', 'ovo', 'lacto', 'vegan'];
    const vegan_kind = ['../assets/images/enroll_vegan_start.png'];
    
    return (
        <View style={styles.container}>
            <View>
            <CustomArrow/>
                {vegan_kind.filter((value, index) => {
                        <Image
                            style={styles.people}
                            source={vegan_kind[0]}
                        />
                })}
                                        <Image
                            style={styles.people}
                            source={vegan_kind[0]}
                        />
            <CustomArrow/>
            </View>

            <Image
                style={styles.switch}
                source={require('../assets/images/enroll_switch_first.png')}
            />
            {/* <Text style={styles.baseText}>
                채식사이를 이용해주셔서 감사합니다!
            </Text>
            <Text style={styles.baseText}>
                이용전에 간단한 설정을 부탁드립니다.
            </Text> */}
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
    }
})