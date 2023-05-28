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
          description3={player.description3}
          key={index}
        />
      ))}
    </View>
  );
};

const data = [
  ['セル1', 'セル2'],
  ['セル3', 'セル4'],
  ['セル5', 'セル6'],
];

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
            text=""
            mainView={
              <>
                <ScrollView>
                  <View style={styles.figContainer}>
                    {data.map((row, rowIndex) => (
                      <View style={styles.row} key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                          <View
                            style={[
                              styles.cell,
                              rowIndex === 1 &&
                                cellIndex === 1 &&
                                styles.noBorderBottom, // セル4の下線を消す
                              rowIndex === 2 &&
                                cellIndex === 1 &&
                                styles.noBorderTop, // セル6の上線を消す
                              cellIndex === 0 && styles.columnA, // A列のスタイル
                              cellIndex === 1 && styles.columnB, // B列のスタイル
                            ]}
                            key={cellIndex}>
                            <Text>{cell}</Text>
                          </View>
                        ))}
                      </View>
                    ))}
                  </View>
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
        {() => <TabContent text="" />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabNavigator;
