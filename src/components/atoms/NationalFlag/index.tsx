import React from 'react';
import {Image} from 'react-native';

const NationalFlag = () => {
  return (
    <Image
      source={require('../../../assets/Spain.png')}
      style={styles.flagImage} // 国旗のスタイルを指定
    />
  );
};

const styles = {
  flagImage: {
    width: 100, // 適切なサイズに調整してください
    height: 100,
  },
};

export default NationalFlag;
