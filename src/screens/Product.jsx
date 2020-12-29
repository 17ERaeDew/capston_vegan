import * as React from 'react';
import { StyleSheet, Image, View, Dimensions, ScrollView } from 'react-native';
import { HeaderBackButton } from '@react-navigation/stack';
import { OpcaityIcon } from '../components/IconButton';
import { ErrorBar, SuccessBar } from '../components/SystemBar';
import { CustomStatusBar } from '../components/StatusBar';
import Text from '../components/styledComponents/Text';

const win = Dimensions.get('window');

// const ocrData = 
//   {
//     cover:
//       'https://media.newyorker.com/photos/5ddd58812ebfed0009e3080a/4:3/w_2560,h_1920,c_limit/Thomas-LukaDoncic-1.jpg',
//     type: '과자류',
//     title: '노브랜드 인절미 스낵',
//     not_match: '우유',
//     desc:
//       '쌀(외국산) 38.27%, 식물성유지(말레이시아산), 옥수수(호주산), 볶음콩가루(미국산, 중국산) 5.63%, 백설탕, 분당, 정제염, 식이섬유(귀리), 탄산칼슘',
//   };

//   const ocrData2 = [
//     {
//       cover: require('../assets/images/enroll_vegan_flexitarian.png'),
//       type: '과자류',
//       title: '플렉시테리언',
//     },
//     {
//       cover: require('../assets/images/enroll_vegan_pollo.png'),
//       type: '고기류',
//       title: '폴로',
//     },
//     {
//       cover: require('../assets/images/enroll_vegan_pesco.png'),
//       type: '채소류',
//       title: '페스코',
//     },
//     {
//       cover: require('../assets/images/enroll_vegan_lacto-ovo.png'),
//       type: '채소류2',
//       title: '락토오보',
//     },
//     {
//       cover: require('../assets/images/enroll_vegan_ovo.png'),
//       type: '과자류',
//       title: '오보',
//     },
//     {
//       cover: require('../assets/images/enroll_vegan_lacto.png'),
//       type: '고기류',
//       title: '락토',
//     },
//     {
//       cover: require('../assets/images/enroll_vegan_vegan.png'),
//       type: '채소류',
//       title: '비건',
//     },
//   ];

export default function Product({ navigation, route }) {
    const ocrData = route.params.ocr;
  React.useLayoutEffect(() => {
    const set = navigation.setOptions({
      headerRight: () => (
        <OpcaityIcon onPress={() => navigation.navigate({ name: 'Home' })} />
      ),
      headerLeft: () => (
        <HeaderBackButton
          onPress={() => navigation.navigate({ name: 'Home' })}
        />
      ),
    });
    return set;
  }, []);

  return (
    <View>
      <CustomStatusBar />
      <ScrollView >
        <View Style={{ backgroundColor: 'gray'}}>
          <Image
            style={{
              width: win.width,
              height: win.width,
            }}
            source={{ uri: ocrData.cover }}
          />
        </View>
        <View style={styles.container}>
          <View style={styles.head_text}>
            <Text customStyle="Headline6">{ocrData.title}</Text>
          </View>
          <View style={styles.sub_text}>
            <Text customStyle="Subtitle1">부적합 원재료명</Text>
          </View>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}
          />
          <View style={styles.body_text}>
            <Text customStyle="Body2 " color="error">
              {ocrData.vegan ? ' ' : ocrData.not_match}
            </Text>
          </View>
          {/* <View style={styles.sub_text}>
            <Text customStyle="Subtitle1">원재료명 및 함량</Text>
          </View>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
            }}
          />
          <View style={styles.body_text}>
            <Text customStyle="Body2">{ocrData.desc}</Text>
          </View> */}
          {ocrData.vegan && (
            <View style={styles.head_text}>
              <Text customStyle="Subtitle1">비건 종류에 맞는 식품입니다.</Text>
            </View>
          )}
          {!ocrData.vegan && (
            <View>
              <View style={styles.head_text}>
                <Text customStyle="Subtitle1">대체 추천 식품</Text>
              </View>
              <View style={styles.substitution}>
                {ocrData.substitution.map((value, index) => {
                  return (
                    <View style={styles.card} key={index}>
                      <Image
                        style={{
                          width: win.width * 0.47,
                          height: win.width * 0.47,
                        }}
                        source={{ uri: value.cover }}
                      />
                      <Text customStyle="Caption">{value.type}</Text>
                      <Text customStyle="Subtitle1">{value.title}</Text>
                    </View>
                  );
                })}
              </View>
            </View>
          )}
        </View>
        <View style={{height: win.height*0.5}} />
      </ScrollView>
      {ocrData.vegan ? (
        <SuccessBar style={styles.error_bar} />
      ) : (
        <ErrorBar style={styles.error_bar} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingLeft: '2%',
    paddingRight: '2%',
    paddingTop: '2%',
  },
  head_text: {
    height: win.height * 0.05625,
    flexGrow: 1,
    justifyContent: 'center',
  },
  sub_text: {
    height: win.height * 0.05,
    flexGrow: 1,
    justifyContent: 'center',
  },
  body_text: {
    padding: '2%',
    flexGrow: 1,
    justifyContent: 'center',
  },
  substitution: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  error_bar: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: win.width * 0.02,
    left: win.width * 0.02,
    bottom: win.width * 0.05,
    width: win.width * 0.96,
  },
  card: {
    width: win.width * 0.47,
  },
});
