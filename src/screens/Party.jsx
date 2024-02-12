import React from 'react';
import Background from '../icons/cart-background.png';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Back from '../icons/back-yellow.png';
import Hamburger from '../icons/burger-yellow.png';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../helpers/customColor';
import Logo from '../icons/black-logo.png';

export default function Party() {
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

        <View style={{paddingHorizontal: 20, marginTop: 20}}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Retro')}>
            <Text style={styles.name}>Ретро-вечеринка</Text>

            <View style={styles.circle}>
              <Text style={styles.date}>15.02</Text>

              <Text style={styles.hour}>21:00</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Kitchen')}>
            <Text style={styles.name}>Вечер изысканной {'\n'}кухни</Text>

            <View style={styles.circle}>
              <Text style={styles.date}>23.02</Text>

              <Text style={styles.hour}>18:00</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Football')}>
            <Text style={styles.name}>Турнир по настольному {'\n'}футболу</Text>

            <View style={styles.circle}>
              <Text style={styles.date}>25.02</Text>

              <Text style={styles.hour}>19:00</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Caraoke')}>
            <Text style={styles.name}>Караоке-вечер</Text>

            <View style={styles.circle}>
              <Text style={styles.date}>04.03</Text>

              <Text style={styles.hour}>21:00</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Image source={Logo} style={styles.logo} />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
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
  logo: {
    aspectRatio: 2.3,
    height: 100,
    alignSelf: 'center',
    marginTop: 50,
  },
  card: {
    height: 90,
    backgroundColor: COLORS.white,
    width: '100%',
    borderRadius: 8,
    marginTop: 15,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  circle: {
    paddingVertical: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FF4A30',
    paddingHorizontal: 18,
    borderRadius: 50,
  },
  date: {
    fontFamily: 'AlumniSans-Bold',
    fontSize: 30,
    color: COLORS.white,
  },
  hour: {
    fontFamily: 'AlumniSans-Bold',
    fontSize: 23,
    color: COLORS.white,
  },
  name: {
    fontFamily: 'AlumniSans-Bold',
    fontSize: 27,
    color: COLORS.black,
  },
});
