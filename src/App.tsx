import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './components/orgnisms/StackScreen/StackNavigator';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#70d7ff'}}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
