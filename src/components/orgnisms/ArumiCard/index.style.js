import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    marginBottom: 10,
    borderColor: 'pink',
    borderWidth: 2,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 5,
  },
  detailsContainer: {
    flex: 1,
    borderColor: 'pink',
    borderWidth: 2,
  },
  infoContainer: {
    flexDirection: 'column',
    marginBottom: 5,
    borderColor: 'pink',
    borderWidth: 2,
  },
  nameDescriptionContainer: { // 追加: nameとdescriptionを囲むコンテナのスタイル
    flexDirection: 'column',
    alignItems: 'flex-start', // 必要に応じて調整
    borderColor: 'pink',
    borderWidth: 2,
  },
  infoText: {
    marginRight: 10,
    fontSize: 12,
    color: '#888888',
    borderColor: 'pink',
    borderWidth: 2,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    borderColor: 'pink',
    borderWidth: 2,
  },
  description: {
    fontSize: 14,
    color: '#888888',
    borderColor: 'pink',
    borderWidth: 2,
  },
});
