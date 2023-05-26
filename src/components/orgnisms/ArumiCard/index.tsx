import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './index.style';

type ArumiCardItemProps = {
  imageSource: string;
  position: string;
  nationality: string;
  age: string;
  name: string;
  description: string;
};

const ArumiCardItem = ({
  imageSource,
  position,
  nationality,
  age,
  name,
  description,
}: ArumiCardItemProps) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={{uri: imageSource}} style={styles.image} />
      <View style={styles.detailsContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>{position}</Text>
          <Text style={styles.infoText}>{nationality}</Text>
          <Text style={styles.infoText}>{age}</Text>
        </View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

export default ArumiCardItem;
