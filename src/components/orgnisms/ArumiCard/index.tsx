import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './index.style';
// https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
import CountryFlag from 'react-native-country-flag';

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
    [{text: position, style: styles.cellPositionText}, [name, kanaName]],
    [nationality, description1],
    [age, description2],
  ];

  console.log('Error: ', nationality);

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
                  rowIndex === 0 && cellIndex === 0 && styles.cellPosition,
                  rowIndex === 0 && cellIndex === 1 && styles.cellName,
                  rowIndex === 1 && cellIndex === 0 && styles.cellNationality,
                  rowIndex === 1 && cellIndex === 1 && styles.cellDescription1,
                  rowIndex === 1 && cellIndex === 2 && styles.cellDescription2,
                  rowIndex === 2 && cellIndex === 0 && styles.cellAge,
                  cellIndex === 0 && styles.columnA,
                  cellIndex === 1 && styles.columnB,
                ]}
                key={cellIndex}>
                {typeof cell === 'object' && cell.text && (
                  <Text style={cell.style}>{cell.text}</Text>
                )}
                {Array.isArray(cell) && cellIndex === 1 && (
                  <View style={styles.nameContainer}>
                    <Text style={[styles.kanaNameText, styles.nameTextMargin]}>
                      {cell[0]}
                    </Text>
                    <Text style={styles.nameText}>{cell[1]}</Text>
                  </View>
                )}
                {rowIndex === 1 && cellIndex === 0 && (
                  <View style={styles.nationalTextContainer}>
                    <Text style={styles.nationalTitleText}>NATIONAL</Text>
                    <CountryFlag isoCode={nationality} size={25} />
                  </View>
                )}
                {rowIndex === 2 && cellIndex === 0 && (
                  <View style={styles.ageTextContainer}>
                    <Text style={styles.ageTitleText}>AGE</Text>
                    <Text style={styles.ageText}>{cell}</Text>
                  </View>
                )}
                {rowIndex === 1 && cellIndex === 1 && (
                  <View style={styles.descriptionTextContainer}>
                    <Text style={styles.descriptionText}>{cell}</Text>
                  </View>
                )}
                {rowIndex === 2 && cellIndex === 1 && (
                  <View style={styles.descriptionTextContainer}>
                    <Text style={styles.descriptionText}>{cell}</Text>
                  </View>
                )}
              </View>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

export default ArumiCardItem;
