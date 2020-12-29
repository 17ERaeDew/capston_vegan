import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useCachedResources } from './src/hooks';
import { Loading } from './src/screens';
import EnrollNavigation from './src/navigation/EnrollNavigation';
import ProviderWrapper from './Provider';
import * as font from 'expo-font';

export default function App() {
  const [loaded] = font.useFonts({
    NanumBarunGothic: require('./src/assets/fonts/NanumBarunGothic.ttf'),
    NanumBarunGothicBold: require('./src/assets/fonts/NanumBarunGothicBold.ttf'),
    snapsPinoBold: require('./src/assets/fonts/snaps_Pino-Bold.ttf'),
    snapsPino: require('./src/assets/fonts/snaps_Pino.ttf'),
  });

  const isLoadingComplete = useCachedResources();
  if (!loaded) {
    return (
      <ProviderWrapper>
        <Loading />
      </ProviderWrapper>
    );
  }

  return (
    <ProviderWrapper>
      <EnrollNavigation />
      <StatusBar />
    </ProviderWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loading: {
    width: '100%',
    height: '100%',
  },
});
