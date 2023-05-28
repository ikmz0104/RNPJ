import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 3,
    borderColor: '#DF5286', // 紫寄りのピンク色の色コードを指定します
    borderWidth: 3,
    marginBottom: -3,
    marginLeft: 8,
    marginRight: 8,
  },
  cellPosition: {
    backgroundColor: '#DF5286',
    borderColor: '#DF5286',
    borderWidth: 3,
    borderTopWidth: 0, // 上線を消す
    borderBottomWidth: 0, // 下線を消す
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cellName: {
    borderColor: '#DF5286',
    borderTopWidth: 0, // 上線を消す
    borderLeftWidth: 0, // 左線を消す
    borderRightWidth: 0, // 右線を消す
    borderBottomWidth: 0, // 下線を消す
  },
  cellNationality: {
    borderColor: '#DF5286',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    borderBottomWidth: 0, // 下線を消す
    borderWidth: 3,
  },
  cellAge: {
    borderColor: '#DF5286',
    borderWidth: 3,
    fontWeight: 'bold',
    fontSize: 16,
    borderBottomWidth: 0, // 下線を消す
  },
  cellDescription1: {
    borderColor: '#DF5286',
    borderWidth: 3,
    fontWeight: 'bold',
    fontSize: 16,
    borderLeftWidth: 0, // 左線を消す
    borderRightWidth: 0, // 右線を消す
    borderBottomWidth: 0, // 下線を消す
  },
  cellDescription2: {
    borderColor: '#DF5286',
    borderWidth: 3,
    fontWeight: 'bold',
    fontSize: 16,
    borderTopWidth: 0, // 上線を消す
  },
  card: {
    borderColor: '#DF5286',
    borderWidth: 2,
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 10, // 下部の余白を追加
  },
  image: {
    width: 100,
    height: 150,
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
  gridContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  gridRow: {
    flex: 1,
    justifyContent: 'center',
  },
  pinkBackground: {
    backgroundColor: '#DF5286', // 紫よりのピンク色に設定
  },
  whiteBackground: {
    backgroundColor: '#FFFFFF', // 紫よりのピンク色に設定
    color: '#000000',
  },
  whiteText: {
    color: 'white', // テキストを白色に設定
  },
  infoItem: {
    flex: 1,
    alignItems: 'center',
  },
  positionContainer: {
    backgroundColor: '#DF5286',
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  cellPositionText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
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
  figContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  columnA: {
    flex: 1, // A列の幅を調整するためにflexを使用
  },
  columnB: {
    flex: 5, // B列の幅を調整するためにflexを使用
  },
  kanaNameText: {
    color: '#DF5286',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  nameText: {
    color: 'gray',
    fontSize: 8,
    fontWeight: 'bold',
  },
  nameContainer: {
    // flexDirection: 'row',
    // alignItems: 'center',
  },
  nameTextMargin: {
    marginRight: 5,
  },
  nationalTextContainer: {
    alignItems: 'center', // テキストを水平方向に中央に配置するために必要
  },
  nationalTitleText: {
    color: '#DF5286',
    fontSize: 7,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  descriptionTextContainer: {
    alignItems: 'center', // テキストを水平方向に中央に配置するために必要
  },
  descriptionText: {
    color: '#000000',
    fontSize: 14,
    marginLeft: 5,
    marginRight: 5,
  },
  ageTextContainer: {
    alignItems: 'center', // テキストを水平方向に中央に配置するために必要
  },
  ageTitleText: {
    color: '#DF5286',
    fontSize: 7,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  ageText: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
