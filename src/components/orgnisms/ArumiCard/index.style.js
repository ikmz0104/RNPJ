import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 1,
    borderColor: '#E75480', // 紫寄りのピンク色の色コードを指定します
    borderWidth: 3,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: -3,
  },
  card: {
    borderColor: '#E75480',
    borderWidth: 2,
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 10, // 下部の余白を追加
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 5,
  },
  overlayContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
  },
  uniformNumberContainer: {
    backgroundColor: '#CCCCCC',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  uniformNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
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
  nameDescriptionContainer: {
    // 追加: nameとdescriptionを囲むコンテナのスタイル
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
