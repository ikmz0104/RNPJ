import {useNavigation} from '@react-navigation/native';
import React, {ReactNode, useMemo, useState} from 'react';
import {View, Text, TouchableOpacity, Modal} from 'react-native';
import Header from '../../../molecules/Header';
import LoginModal from '../../LoginModal';

export type TabProps = {
  text: string;
  mainView?: any;
};

const TabContent = ({text, mainView}: TabProps) => {
  const [loginModalVisible, setLoginModalVisible] = useState(false);
  const navigation = useNavigation();
  const left: ReactNode = useMemo(() => {
    return (
      <TouchableOpacity
        style={{padding: 10}}
        onPress={() => {
          setLoginModalVisible(true);
        }}>
        <Text>LOGIN</Text>
      </TouchableOpacity>
    );
  }, [navigation]);

  return (
    <View style={{flex: 1}}>
      <Header title="" left={left} />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
          backgroundColor: '#ffffff',
        }}>
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
