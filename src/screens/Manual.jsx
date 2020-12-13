import * as React from 'react';
import {
  StyleSheet,
  Image,
  View,
  Dimensions,
} from 'react-native';
import { CustomButton, ReverseButton } from '../components/Button';
import Text from '../components/styledComponents/Text';

const win = Dimensions.get('window');

export function ManualStart({ navigation }) {
  return (
    <View style={{ ...styles.container, height: win.height }}>
      <View style={{ ...styles.top_view, marginTop: win.height * 0.165}}>
        <Image
          style={{ width: win.width * 0.6, height: win.width * 0.6 }}
          source={require('../assets/images/manual_1.png')}
        />
      </View>
      <View style={styles.step}>
        <Image
          style={{
            width: win.height * 0.03125 * 5.5,
            height: win.height * 0.03125,
          }}
          source={require('../assets/images/step1.png')}
        />
      </View>
      <View style={styles.middle_view}>
        <Text textAlign="center" customStyle="Headline6">
          사용 방법을 확인 하시겠습니까?
        </Text>
      </View>
      <View style={styles.bottom_view}>
        <ReverseButton
          title="아니요 안할래요"
          onPress={() => navigation.navigate('TestOCR')}
        />
        <View style={{ height: win.height * 0.02 }} />
        <CustomButton
          title="확인"
          onPress={() => navigation.navigate('ManualStart2')}
        />
      </View>
    </View>
  );
}

export function ManualStart2({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.top_view}>
        <Image
          style={{ width: win.width * 0.9, height: win.width * 0.61 }}
          source={require('../assets/images/manual_2.png')}
        />
      </View>
      <View style={styles.step}>
        <Image
          style={{
            width: win.height * 0.03125 * 5.5,
            height: win.height * 0.03125,
          }}
          source={require('../assets/images/step2.png')}
        />
      </View>
      <View style={styles.middle_view}>
        <Text textAlign="center" customStyle="Subtitle1">
          제품 뒷면을 찍기만 해주세요!
        </Text>
      </View>
      <View style={styles.bottom_view}>
        <CustomButton
          title="다음"
          onPress={() => navigation.navigate('ManualStart3')}
        />
      </View>
    </View>
  );
}

export function ManualStart3({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.top_view}>
        <Image
          style={{ height: win.width * 0.61 }}
          source={require('../assets/images/manual_3.png')}
        />
      </View>
      <View style={styles.step}>
        <Image
          style={{
            width: win.height * 0.03125 * 5.5,
            height: win.height * 0.03125,
          }}
          source={require('../assets/images/step3.png')}
        />
      </View>
      <View style={styles.middle_view}>
        <Text textAlign="center" customStyle="Subtitle1">
          어플이 사용자의 채식 단계 기준에
          {'\n'}부합하는지 판단하는 중입니다
        </Text>
      </View>
      <View style={styles.bottom_view}>
        <CustomButton
          title="다음"
          onPress={() => navigation.navigate('ManualStart4')}
        />
      </View>
    </View>
  );
}

export function ManualStart4({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.top_view}>
        <Image
          style={{ height: win.width * 0.61 }}
          source={require('../assets/images/manual_4.png')}
        />
      </View>
      <View style={styles.step}>
        <Image
          style={{
            width: win.height * 0.03125 * 5.5,
            height: win.height * 0.03125,
          }}
          source={require('../assets/images/step4.png')}
        />
      </View>
      <View style={styles.middle_view}>
        <Text textAlign="center" customStyle="Subtitle1">
          부합하지 않을 경우에는
          {'\n'}그냥 스크롤해서 비슷한 식품을 찾으세요!
          {'\n'}자동으로 당신에 맞는 제품을 추천합니다
        </Text>
      </View>
      <View style={styles.bottom_view}>
        <CustomButton
          title="시작하기"
          onPress={() => navigation.navigate('ManualStart2')}
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
    alignItems: 'center',
  },
  step: {
    marginTop: win.height * 0.165 - 100,
    alignItems: 'center',
  },
  middle_view: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  bottom_view: {
    width: '100%',
    marginTop: 'auto',
    marginBottom: win.height * 0.06875,
  }
});
