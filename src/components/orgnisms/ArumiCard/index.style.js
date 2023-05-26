import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 5,
  },
  detailsContainer: {
    flex: 1,
  },
  infoContainer: {
    flexDirection: 'column',
    marginBottom: 5,
  },
  nameDescriptionContainer: { // 追加: nameとdescriptionを囲むコンテナのスタイル
    flexDirection: 'column',
    alignItems: 'flex-start', // 必要に応じて調整
  },
  infoText: {
    marginRight: 10,
    fontSize: 12,
    color: '#888888',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#888888',
  },
});
