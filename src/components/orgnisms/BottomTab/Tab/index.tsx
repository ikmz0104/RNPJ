import {useNavigation} from '@react-navigation/native';
import React, {ReactNode, useMemo, useState} from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import Header from '../../../molecules/Header';
import LoginModal from '../../LoginModal';
import {Icon} from '../../../atoms/Icon/index';

export type TabProps = {
  title: string;
  text?: string;
  mainView?: any;
};

const TabContent = ({title, text, mainView}: TabProps) => {
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const navigation = useNavigation();
  const right: ReactNode = useMemo(() => {
    return (
      <TouchableOpacity
        style={{padding: 10}}
        onPress={() => {
          setLoginModalVisible(true);
        }}>
        <Icon name="menu" />
      </TouchableOpacity>
    );
  }, [navigation]);

  return (
    <View style={{flex: 1}}>
      <Header title="" right={right} />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
          backgroundColor: '#70d7ff', // 水色の背景
        }}>
        <Text style={{textAlign: 'center'}}>{title}</Text>
        <Text style={{textAlign: 'center'}}>{text}</Text>
        {mainView}
      </View>
      <Modal
        visible={loginModalVisible}
        animationType="slide"
        onRequestClose={() => setLoginModalVisible(false)}>
        <View style={{flex: 1}}>
          <LoginModal onClose={() => setLoginModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

export default TabContent;
