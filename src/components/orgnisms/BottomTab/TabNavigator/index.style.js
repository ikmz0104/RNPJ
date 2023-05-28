import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
});
