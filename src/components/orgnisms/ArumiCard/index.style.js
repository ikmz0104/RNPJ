import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
  gridContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  gridRow: {
    flex: 1,
    justifyContent: 'center',
  },
  pinkBackground: {
    backgroundColor: '#E75480', // 紫よりのピンク色に設定
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
    backgroundColor: '#E75480',
    borderRadius: 5,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  positionText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
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
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noBorderBottom: {
    borderBottomWidth: 0, // セル4の下線を消す
  },
  noBorderTop: {
    borderTopWidth: 0, // セル6の上線を消す
  },
  columnA: {
    flex: 1, // A列の幅を調整するためにflexを使用
  },
  columnB: {
    flex: 5, // B列の幅を調整するためにflexを使用
  },
  cellPosition: {
    backgroundColor: '#E75480',
  },
});
