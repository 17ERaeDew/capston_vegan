import React from 'react';
import { Loading, EnrollName, EnrollStart, EnrollVegan } from '../screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function EnrollNavigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="EnrollStart">
            <Stack.Screen name="Loading" component={Loading} />
            <Stack.Screen name="EnrollStart" component={EnrollStart} />
            <Stack.Screen name="EnrollName" component={EnrollName} />
            <Stack.Screen name="EnrollVegan" component={EnrollVegan} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
