import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import Home from '../screens/Home';
import Detail from '../screens/Detail';
const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  )
}

export default StackNavigator