import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS} from '../helpers/customColor';
import {useNavigation} from '@react-navigation/native';
import Background from '../icons/reserve-background.png';
import Back from '../icons/back-red.png';
import Hamburger from '../icons/burger-red.png';
import LoveIcon from '../icons/love-icon.png';

const {width, height} = Dimensions.get('window');

export default function ReserveThank() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={Background} style={styles.background}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={Back} style={styles.backIcon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image source={Hamburger} style={styles.hamburger} />
          </TouchableOpacity>
        </View>

        <View style={styles.qrContainer}>
          <Image source={LoveIcon} style={styles.smile} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Спасибо за заказ!</Text>

          <TouchableOpacity onPress={() => navigation.navigate('Main')}>
            <Text style={styles.goBack}>
              Вернуться в{' '}
              <Text style={{textDecorationLine: 'underline'}}>меню</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  main: {
    flex: 1,
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  backIcon: {
    height: 20,
    width: 25,
  },
  hamburger: {
    height: 40,
    width: 40,
  },
  qrContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  textContainer: {
    width: '100%',
    paddingVertical: 15,
    marginTop: 20,
    marginBottom: 50,
  },
  text: {
    marginTop: 20,
    textAlign: 'center',
    color: COLORS.black,
    fontFamily: 'AlumniSans-Bold',
    fontSize: 40,
  },
  goBack: {
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'AlumniSans-SemiBold',
    color: COLORS.white,
  },
  smile: {
    aspectRatio: 1,
    height: 150,
    alignSelf: 'center',
    marginTop: height / 30,
  },
});
