import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Background from '../icons/background-3.png';
import BackIcon from '../icons/back-black.png';
import {COLORS} from '../helpers/customColor';
import {useNavigation} from '@react-navigation/native';

export default function Football() {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={Background}
      style={styles.background}
      imageStyle={styles.backgroundImage}>
      <TouchableOpacity onPress={() => navigation.navigate('Party')}>
        <Image style={styles.backIcon} source={BackIcon} />
      </TouchableOpacity>
      <Text style={styles.date}>25.02</Text>
      <Text style={styles.hour}>18:00</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  backgroundImage: {
    resizeMode: 'stretch',
    paddingBottom: 50,
  },
  main: {
    flex: 1,
    paddingTop: 60,
  },
  backIcon: {
    height: 20,
    width: 25,
    marginTop: 30,
    marginLeft: 20,
  },
  date: {
    fontFamily: 'AlumniSans-ExtraBold',
    fontSize: 35,
    color: COLORS.white,
    position: 'absolute',
    right: 15,
    bottom: 25,
  },
  hour: {
    fontFamily: 'AlumniSans-ExtraBold',
    fontSize: 30,
    color: COLORS.white,
    position: 'absolute',
    right: 15,
    bottom: 0,
  },
});
