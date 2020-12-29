import * as React from 'react';
import { StyleSheet, Image, View, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { PersonIcon, CameraIcon, OpcaityIcon } from '../components/IconButton';
import { CustomStatusBar } from '../components/StatusBar';
import Text from '../components/styledComponents/Text';
import { usePickerCamera } from '../hooks';

const win = Dimensions.get('window');


export function Home({ navigation, route }) {
  const user = useSelector((state) => state.User.user);
  const product = useSelector((state) => state.Product.product);
  const openCamera = usePickerCamera(navigation, 'Ocr');
  React.useLayoutEffect(() => {
    let vegan = '';
    switch (user.vegan-1) {
      case 0: {
        vegan = '플렉시테리언';
        break;
      }
      case 1: {
        vegan = '폴로';
        break;
      }
      case 2: {
        vegan = '페스코';
        break;
      }
      case 3: {
        vegan = '락토오보';
        break;
      }
      case 4: {
        vegan = '오보';
        break;
      }
      case 5: {
        vegan = '락토';
        break;
      }
      case 6: {
        vegan = '비건';
        break;
      }
      default:
        vegan = '비건';
        break;
    }
    const set = navigation.setOptions({
      headerRight: () => (
        <PersonIcon
          onPress={() => navigation.navigate({ name: 'EnrollVegan' })}
        />
      ),
      headerLeft: () => (
        <OpcaityIcon onPress={() => navigation.navigate({ name: 'Ocr' })} />
      ),
      title: vegan,
    });
    return set;
  }, [navigation, route]);

  return (
    <View>
      <CustomStatusBar />
      <ScrollView>
        <View style={styles.container}>
          {product.length === 0 && (
            <View style={styles.none}>
              <Text customStyle="Subtitle1">검사한 식품이 없습니다.</Text>
            </View>
          )}
          {product.map((value, index) => {
            return (
              <View style={styles.card} key={index}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate({
                      name: 'Product',
                      params: {
                        ocr: value
                    }}
                    )
                  }
                >
                  <Image
                    style={{
                      width: win.width * 0.47,
                      height: win.width * 0.47,
                    }}
                    source={require('../assets/images/loading.png')}
                  />
                  <Text customStyle="Caption">{value.type}</Text>
                  <Text customStyle="Subtitle1">{value.title}</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </ScrollView>
      <CameraIcon style={styles.camera} onPress={openCamera} />
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
  none: {
    width: win.width,
    alignContent: 'center',
    justifyContent: 'center',
  },
});
