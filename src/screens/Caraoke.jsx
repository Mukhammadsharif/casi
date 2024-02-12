import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Background from '../icons/background-4.png';
import BackIcon from '../icons/back-yellow.png';
import {COLORS} from '../helpers/customColor';
import {useNavigation} from '@react-navigation/native';

export default function Caraoke() {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={Background}
      style={styles.background}
      imageStyle={styles.backgroundImage}>
      <TouchableOpacity onPress={() => navigation.navigate('Party')}>
        <Image style={styles.backIcon} source={BackIcon} />
      </TouchableOpacity>
      <Text style={styles.date}>04.03</Text>
      <Text style={styles.hour}>21:00</Text>
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
    paddingTop: 50,
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
    fontSize: 45,
    color: COLORS.white,
    position: 'absolute',
    right: '40%',
    top: 60,
  },
  hour: {
    fontFamily: 'AlumniSans-ExtraBold',
    fontSize: 40,
    color: COLORS.white,
    position: 'absolute',
    right: '42%',
    top: 100,
  },
});
