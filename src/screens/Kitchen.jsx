import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Background from '../icons/background-2.png';
import BackIcon from '../icons/back-white.png';
import {COLORS} from '../helpers/customColor';
import {useNavigation} from '@react-navigation/native';

export default function Kitchen() {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={Background}
      style={styles.background}
      imageStyle={styles.backgroundImage}>
      <TouchableOpacity onPress={() => navigation.navigate('Party')}>
        <Image style={styles.backIcon} source={BackIcon} />
      </TouchableOpacity>
      <Text style={styles.date}>23.02</Text>
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
  main: {
    flex: 1,
    paddingTop: 60,
  },
  backgroundImage: {
    resizeMode: 'stretch',
    paddingTop: 50,
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
    top: 20,
  },
  hour: {
    fontFamily: 'AlumniSans-ExtraBold',
    fontSize: 30,
    color: COLORS.white,
    position: 'absolute',
    right: 15,
    top: 55,
  },
});
