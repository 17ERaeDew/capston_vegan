import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useCachedResources } from './src/hooks';
import EnrollNavigation from './src/navigation/EnrollNavigation';
import ProviderWrapper from './Provider';

export default function App() {
  const isLoadingComplete = useCachedResources();
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
        height: '100%'
    }
});
