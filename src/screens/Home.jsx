import * as React from 'react';
import { StyleSheet, Image, View, Dimensions, ScrollView } from 'react-native';
import { PersonIcon, CameraIcon, OpcaityIcon } from '../components/IconButton';
import { CustomStatusBar } from '../components/StatusBar';
import Text from '../components/styledComponents/Text';

const win = Dimensions.get('window');

const tmpData = [
  {
    url: require('../assets/images/enroll_vegan_flexitarian.png'),
    type: '과자류',
    title: '플렉시테리언',
  },
  {
    url: require('../assets/images/enroll_vegan_pollo.png'),
    type: '고기류',
    title: '폴로',
  },
  {
    url: require('../assets/images/enroll_vegan_pesco.png'),
    type: '채소류',
    title: '페스코',
  },
  {
    url: require('../assets/images/enroll_vegan_lacto-ovo.png'),
    type: '채소류2',
    title: '락토오보',
  },
  {
    url: require('../assets/images/enroll_vegan_ovo.png'),
    type: '과자류',
    title: '오보',
  },
  {
    url: require('../assets/images/enroll_vegan_lacto.png'),
    type: '고기류',
    title: '락토',
  },
  {
    url: require('../assets/images/enroll_vegan_vegan.png'),
    type: '채소류',
    title: '비건',
  },
];

export function Home({ navigation, route }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <PersonIcon onPress={() => alert('This is a button!')} />
      ),
      headerLeft: () => (
        <OpcaityIcon onPress={() => alert('This is a button!')} />
      ),
    });
  }, [navigation, route]);

  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <CustomStatusBar />
            {tmpData.map((value, index) => {
              return (
                <View style={styles.card} key={index}>
                  <Image
                    style={{
                      width: win.width * 0.47,
                      height: win.width * 0.47,
                    }}
                    source={value.url}
                  />
                  <Text customStyle="Caption">{value.type}</Text>
                  <Text customStyle="Subtitle1">{value.title}</Text>
                </View>
              );
            })}
        </View>
      </ScrollView>
      <CameraIcon
        style={styles.camera}
        onPress={() => alert('This is a button!')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingLeft: '2%',
    paddingRight: '2%',
    paddingTop: '2%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  top_view: {
    marginTop: win.height * 0.165 - 80,
    alignItems: 'center',
  },
  camera: {
    position: 'absolute',
    right: win.width * 0.05,
    top: win.height * 0.8 - 80,
  },
  card: {
    width: win.width * 0.47,
  },
});
