import React, {ReactNode} from 'react';
import {useMemo} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Header from '../../../molecules/Header';

/** Stack1 */
const Stats: React.VFC = () => {
  const navigation = useNavigation();
  const left: ReactNode = useMemo(() => {
    return (
      <TouchableOpacity
        style={{padding: 10}}
        onPress={() => {
          navigation.goBack();
        }}>
        <Text>戻る</Text>
      </TouchableOpacity>
    );
  }, [navigation]);
  return (
    <View style={{flex: 1}}>
      <Header title="Stack1" left={left} />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
          backgroundColor: '#ff93c9',
        }}>
        {/* TODO: 各選手の詳細画面に遷移 */}
        <Text style={{textAlign: 'center'}}>This Screen is Stack1.</Text>
      </View>
    </View>
  );
};

export default Stats;
