import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from './index.style';
import {RoundButton} from '../../atoms/RoundButton';
import {Text} from 'react-native-svg';

type LoginModalProps = {
  onClose: () => void;
};

const LoginModal = ({onClose}: LoginModalProps) => {
  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <TouchableOpacity style={styles.closeButton}>
          <RoundButton onPress={onClose} icon="cross" borderColor="black" />
        </TouchableOpacity>
        <View style={styles.loginContent}>
          <Text>test</Text>
        </View>
      </View>
    </View>
  );
};

export default LoginModal;
