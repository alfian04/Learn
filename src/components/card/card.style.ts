import {StyleSheet} from 'react-native';

export const cardStyle = StyleSheet.create({
  container: {
    width: 140,
    height: 220,
    backgroundColor: '#5086A5',
    borderRadius: 8,
    elevation: 8,
    marginTop:15
  },
  desc: {
    marginTop: 4,
    paddingHorizontal: 8,
    justifyContent: 'space-between',
    flex: 1,
    paddingVertical: 8,
  },
  title: {fontSize: 16, fontWeight: 'bold', color: 'white', marginBottom: 4},
  rating: {fontWeight: 'bold', color: 'black'},
  image: {width: 140, height: 140},
});