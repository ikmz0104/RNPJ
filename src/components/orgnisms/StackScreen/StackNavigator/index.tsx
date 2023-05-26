import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import TabNavigator from '../../BottomTab/TabNavigator';
import Stack1 from '../Stack';

const Stack = createStackNavigator();

/** TabNavigator */
const StackNavigator: React.VFC = () => {
  // screenOptionsでheaderShown:falseを指定して、デフォルトではヘッダを表示させない
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Tab" component={TabNavigator} />
      <Stack.Screen name="Stack1" component={Stack1} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
