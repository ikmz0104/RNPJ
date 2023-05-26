import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabContent from '../Tab';
import {View} from 'react-native';
import {Icon} from '../../../atoms/Icon';

const Tab = createBottomTabNavigator();

/** TabNavigator */
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{tabBarActiveTintColor: 'red', headerShown: false}}>
      <Tab.Screen
        name="Player"
        options={{
          tabBarIcon: ({focused}) => <Icon name="home" active={focused} />,
        }}>
        {() => (
          <TabContent
            text="Home"
            mainView={
              <>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                />
              </>
            }
          />
        )}
      </Tab.Screen>
      <Tab.Screen
        name="Options"
        options={{
          tabBarIcon: ({focused}) => <Icon name="board" active={focused} />,
        }}>
        {() => <TabContent text="" />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabNavigator;