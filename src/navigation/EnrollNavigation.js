import React from 'react';
import {
  Loading,
  EnrollName,
  EnrollStart,
  EnrollVegan,
  ManualStart,
  ManualStart2,
  ManualStart3,
  ManualStart4,
  Home,
  TestOCR,
} from '../screens';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { fontFamily } from '../components/styledComponents/variables';

const TransitionScreenOptions = {
  ...TransitionPresets.SlideFromRightIOS, // This is where the transition happens
};

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff',
  },
};

const config = {
  animation: 'timing',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

export default function EnrollNavigation() {
  const options_registor = {
    title: '정보 입력',
    headerTitleStyle: {
      fontFamily: fontFamily.headline6,
    },
    gestureDirection: 'horizontal',
  };
  const options_manual = {
    title: '시작하기',
    headerTitleStyle: {
      fontFamily: fontFamily.headline6,
    },
    gestureDirection: 'horizontal',
  };
  const options_home = {
    title: 'Vegan',
    headerTitleStyle: {
      fontFamily: fontFamily.headline6,
      alignSelf: 'center',
    },
    backgroundColor: '#fff',
    gestureDirection: 'horizontal',
  };
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        initialRouteName="Home"
        mode="modal"
        headerMode="float"
        screenOptions={TransitionScreenOptions}
      >
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen
          headerMode="none"
          options={{ ...options_registor, headerShown: false }}
          name="EnrollStart"
          component={EnrollStart}
        />
        <Stack.Screen
          options={options_registor}
          name="EnrollName"
          component={EnrollName}
        />
        <Stack.Screen
          options={options_registor}
          name="EnrollVegan"
          component={EnrollVegan}
        />
        <Stack.Screen
          options={{ ...options_manual, headerShown: false }}
          name="ManualStart"
          component={ManualStart}
        />
        <Stack.Screen
          options={options_manual}
          name="ManualStart2"
          component={ManualStart2}
        />
        <Stack.Screen
          options={options_manual}
          name="ManualStart3"
          component={ManualStart3}
        />
        <Stack.Screen
          options={options_manual}
          name="ManualStart4"
          component={ManualStart4}
        />
        <Stack.Screen options={options_home} name="Home" component={Home} />
        {/* <Stack.Screen name="TestOCR" component={TestOCR} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
