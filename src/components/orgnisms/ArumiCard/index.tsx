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
}: ArumiCardItemProps) => {
  const data = [
    [position, [kanaName, name]],
    [nationality, description1],
    [age, description2],
  ];

  console.log('Error: ', position);
  return (
    <View style={styles.cardContainer}>
      <Image source={{uri: imageSource}} style={styles.image} />
      <View style={styles.overlayContainer}>
        {uniformNumber && (
          <View style={styles.uniformNumberContainer}>
            <Text style={styles.uniformNumber}>{uniformNumber}</Text>
          </View>
        )}
      </View>
      <View style={styles.figContainer}>
        {data.map((row, rowIndex) => (
          <View style={styles.row} key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <View
                style={[
                  styles.cell,
                  rowIndex === 1 && cellIndex === 1 && styles.noBorderBottom, // セル4の下線を消す
                  rowIndex === 2 && cellIndex === 1 && styles.noBorderTop, // セル6の上線を消す
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
      {/* <View style={styles.gridContainer}>
        <View style={[styles.gridRow, styles.pinkBackground]}>
          <Text style={styles.whiteText}>{position}</Text>
        </View>
        <View style={[styles.gridRow, styles.whiteBackground]}>
          <Text>{nationality}</Text>
        </View>
        <View style={[styles.gridRow, styles.whiteBackground]}>
          <Text>{age}</Text>
        </View>
      </View> */}
      {/* <View style={styles.detailsContainer}>
        <View style={styles.infoContainer}>
          <View style={[styles.infoItem, styles.positionContainer]}>
            <Text style={styles.positionText}>{position}</Text>
          </View>
          <Text style={styles.infoText}>{nationality}</Text>
          <Text style={styles.infoText}>{age}</Text>
        </View>
      </View> */}
      {/* <View style={styles.nameDescriptionContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description1}</Text>
      </View> */}
    </View>
  );
};

export default ArumiCardItem;
