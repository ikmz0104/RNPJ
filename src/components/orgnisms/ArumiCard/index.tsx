import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './index.style';

type ArumiCardItemProps = {
  imageSource: string;
  uniformNumber?: string;
  position: string;
  nationality: string;
  age: string;
  name: string;
  kanaName: string;
  description1: string;
  description2?: string;
  description3?: string;
};

const ArumiCardItem = ({
  imageSource,
  uniformNumber,
  position,
  nationality,
  age,
  name,
  kanaName,
  description1,
  description2,
  description3,
}: ArumiCardItemProps) => {
  console.log('Error: ', uniformNumber);
  return (
    <View style={styles.cardContainer}>
      <Image source={{uri: imageSource}} style={styles.image} />
      <View style={styles.overlayContainer}>
        <View style={styles.uniformNumberContainer}>
          {uniformNumber && (
            <Text style={styles.uniformNumber}>{uniformNumber}</Text>
          )}
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>{position}</Text>
          <Text style={styles.infoText}>{nationality}</Text>
          <Text style={styles.infoText}>{age}</Text>
        </View>
      </View>
      <View style={styles.nameDescriptionContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description1}</Text>
      </View>
    </View>
  );
};

export default ArumiCardItem;
