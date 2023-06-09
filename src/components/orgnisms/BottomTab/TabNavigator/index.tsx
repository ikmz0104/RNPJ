import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabContent from '../Tab';
import {ScrollView, Text, View} from 'react-native';
import {Icon} from '../../../atoms/Icon';
import {useNavigation} from '@react-navigation/native';
import {RoundButton} from '../../../atoms/RoundButton/index';
import styles from './index.style';
import ArumiCardItem from '../../ArumiCard';
import {arumiCardArray} from '../../../../datas/index';

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

const ArumiCardProps = () => {
  return (
    <View>
      {arumiCardArray.map((player, index) => (
        <ArumiCardItem
          imageSource={player.imageSource}
          uniformNumber={player.uniformNumber}
          position={player.position}
          nationality={player.nationality}
          age={player.age}
          name={player.name}
          kanaName={player.kanaName}
          description1={player.description1}
          description2={player.description2}
          key={index}
        />
      ))}
    </View>
  );
};

/** TabNavigator */
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{tabBarActiveTintColor: '#00acee', headerShown: false}}>
      <Tab.Screen
        name="Player"
        options={{
          tabBarIcon: ({focused}) => <Icon name="player" active={focused} />,
        }}>
        {() => (
          <TabContent
            title="Manchester City"
            text="2022-23 Season Manager&Players"
            mainView={
              <>
                <ScrollView>
                  <ArumiCardProps />
                  {/* <PlayerStatsProps /> */}
                </ScrollView>
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
        {() => <TabContent text="coming soon..." />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabNavigator;
