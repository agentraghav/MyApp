import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  view: {
    backgroundColor: '#41B3A3',
  },
  scrollView: {
    with: '100%',
    height: '100%',
  },
  headerName: {
    position: 'absolute',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 13,
    color: 'black',
    zIndex: 12,
    top: 20,
    left: 100,
  },
  header: {
    position: 'absolute',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  contentRow: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  profileDetailRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    color: 'black',
    paddingTop: 20,
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  scrollContent: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
});
