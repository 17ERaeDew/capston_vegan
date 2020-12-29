import * as React from 'react';
import {
  StyleSheet,
  Image,
  View,
  Dimensions,
  ScrollView,
} from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { CustomButton } from '../components/Button';
import { CustomInput } from '../components/Input';
import { useEnroll } from '../hooks';
import { SliderBox } from 'react-native-image-slider-box';
import Text from '../components/styledComponents/Text';

const win = Dimensions.get('window');

export function EnrollStart({ navigation }) {
   const [enroll, setEnroll] = useEnroll();

  // React.useEffect(()=>{
  //   if(enroll.enroll.user.name !== "" && enroll.enroll.user.password !== "" && enroll.enroll.vegan !== 0){
  //     navigation.dispatch(
  //       CommonActions.reset({
  //         index: 1,
  //         routes: [
  //           {
  //             index: 1,
  //             name: "Home",
  //           },
  //         ],
  //       }),
  //     );
  //   }
  // }, [enroll.enroll])

  return (
    <View style={{ ...styles.container, height: win.height}}>
      <View style={styles.top_view}>
        <Image
          style={{ width: win.width * 0.8, height: win.width * 0.8 }}
          source={require('../assets/images/enroll_people.png')}
        />
      </View>
      <View style={styles.middle_view}>
        <Text textAlign="center" customStyle="Headline5">
          채식사이를 이용해주셔서 감사합니다
        </Text>
        <Text textAlign="center" customStyle="Headline5">
          이용전에 간단한 설정을
        </Text>
        <Text textAlign="center" customStyle="Headline5">
          도와드리겠습니다
        </Text>
      </View>
      <View style={styles.bottom_view}>
        <CustomButton
          title="시작하기"
          onPress={() => navigation.navigate('EnrollName')}
        />
      </View>
    </View>
  );
}

export function EnrollName({ navigation }) {
  const [enroll, setEnroll] = useEnroll();
  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.top_view}>
            <Image
              style={{ height: win.width * 0.6, width: win.width * 0.6 }}
              source={require('../assets/images/enroll_name.png')}
            />
          </View>
          <View style={styles.middle_view}>
            <CustomInput
              placeholder="이름을 입력해주세요."
              onChangeText={(text) => setEnroll.inputName(text)}
              value={enroll.enroll.name}
              autoCompleteType="username"
            />
            <View style={{ height: win.height * 0.02 }} />
            <CustomInput
              placeholder="비밀번호를 입력해주세요."
              onChangeText={(text) => setEnroll.inputPassword(text)}
              value={enroll.enroll.password}
              autoCompleteType="password"
              secureTextEntry
              //   display={enroll.enroll.name === '' ? 'none' : 'flex'} ?? 넣을까 말까
            />
          </View>
          <View style={styles.bottom_view}>
            <CustomButton
              title="다음"
              onPress={() => {
                setEnroll.finEnroll();
                navigation.navigate('EnrollVegan');
              }}
              disabled={
                enroll.enroll.name === '' && enroll.enroll.password === ''
              }
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export function EnrollVegan({ navigation }) {
  const [enroll, setEnroll] = useEnroll();
  const vegan_kind = [
    require('../assets/images/enroll_vegan_start.png'),
    require('../assets/images/enroll_vegan_flexitarian.png'),
    require('../assets/images/enroll_vegan_pollo.png'),
    require('../assets/images/enroll_vegan_pesco.png'),
    require('../assets/images/enroll_vegan_lacto-ovo.png'),
    require('../assets/images/enroll_vegan_ovo.png'),
    require('../assets/images/enroll_vegan_lacto.png'),
    require('../assets/images/enroll_vegan_vegan.png'),
  ];
  const slide_width = win.width * 0.7;

  return (
    <View style={styles.container}>
      <View style={styles.top_view}>
        <View style={{ height: slide_width }}>
          <SliderBox
            images={vegan_kind}
            dotColor="#009945"
            inactiveDotColor="gray"
            ImageComponentStyle={{ width: slide_width, height: slide_width }}
            parentWidth={slide_width}
            parentHeight={slide_width}
            currentImageEmitter={(index) => {
              setEnroll.selectVegan(index);
            }}
          />
        </View>
      </View>
      <View style={styles.middle_view}></View>
      <View style={styles.bottom_view}>
        <CustomButton
          title="다음"
          onPress={() => {
            setEnroll.finEnroll();
            navigation.dispatch(
              CommonActions.reset({
                index: 1,
                routes: [
                  {
                    name: 'ManualStart',
                  },
                ],
              }),
            );
          }}
          disabled={enroll.enroll.vegan === 0}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'white',
    paddingLeft: '10%',
    paddingRight: '10%',
    height: win.height - 80,
  },
  top_view: {
    marginTop: win.height * 0.165 - 80,
  },
  middle_view: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  bottom_view: {
    width: '100%',
    marginTop: 'auto',
    marginBottom: win.height * 0.1,
  }
});
