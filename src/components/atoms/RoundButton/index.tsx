import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import styles from './index.style';
import {Icon} from '../Icon';
import {SvgUri} from 'react-native-svg';

export type RoundButtonProps = {
  onPress: () => void;
  icon?: any; // icon flag
  image?: any; // background image
  uri?: any; // loginProvider
  color?: string;
  borderColor?: string;
  disabled?: boolean;
  diameter?: number;
};

export const RoundButton = ({
  onPress,
  icon,
  image,
  uri,
  color,
  borderColor,
  disabled = false,
  diameter = 50,
}: RoundButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.roundButton,
        {width: diameter, height: diameter, borderRadius: diameter / 2},
        disabled ? {backgroundColor: 'gray'} : {backgroundColor: color},
        !!borderColor && {borderColor: borderColor},
      ]}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}>
      {icon && <Icon name={icon} />}
      {uri && <SvgUri uri={uri} />}
      {image && (
        <>
          <View>
            <ImageBackground
              source={{uri: image}}
              style={styles.icon}
              borderRadius={20}
            />
          </View>
        </>
      )}
    </TouchableOpacity>
  );
};
