import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabContent from '../Tab';
import {View} from 'react-native';
import {Icon} from '../../../atoms/Icon';
import {useNavigation} from '@react-navigation/native';
import {RoundButton} from '../../../atoms/RoundButton/index';
import styles from './index.style';

const Tab = createBottomTabNavigator();

export enum Routes {
  Stats = 'PlayerStats',
}

const PlayerStatsProps = () => {
  const navigation = useNavigation();

  const handleScanButtonPress = () => {
    // 画面遷移の処理を行う
    navigation.navigate(Routes.Stats);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <RoundButton onPress={handleScanButtonPress} icon="setting" />
      </View>
    </View>
  );
};

/** TabNavigator */
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{tabBarActiveTintColor: 'red', headerShown: false}}>
      <Tab.Screen
        name="Player"
        options={{
          tabBarIcon: ({focused}) => <Icon name="player" active={focused} />,
        }}>
        {() => (
          <TabContent
            text=""
            mainView={
              <>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <PlayerStatsProps />
                </View>
              </>
            }
          />
        )}
      </Tab.Screen>
      <Tab.Screen
        name="Setting"
        options={{
          tabBarIcon: ({focused}) => <Icon name="setting" active={focused} />,
        }}>
        {() => <TabContent text="" />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabNavigator;
