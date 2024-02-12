import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import Background from '../icons/main-screen-background.png';
import Logo from '../icons/casi-logo.png';
import {COLORS} from '../helpers/customColor';
import {useNavigation} from '@react-navigation/native';

export default function Category() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground source={Background} style={styles.background}>
        <View style={styles.main}>
          <Image source={Logo} style={styles.logo} />

          <ScrollView contentContainerStyle={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.buttonActive}
              onPress={() => {
                navigation.navigate('Main');
              }}>
              <Text style={styles.textActive}>{'Главная'.toUpperCase()}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate('Product');
              }}>
              <Text style={styles.textActive}>{'Меню'.toUpperCase()}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate('Cart');
              }}>
              <Text style={styles.textActive}>{'Корзина'.toUpperCase()}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate('Reserve');
              }}>
              <Text style={styles.textActive}>{'Бронь'.toUpperCase()}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate('Party');
              }}>
              <Text style={styles.textActive}>{'События'.toUpperCase()}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate('Contacts');
              }}>
              <Text style={styles.textActive}>{'Контакты'.toUpperCase()}</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
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
  logo: {
    aspectRatio: 2.3,
    height: 100,
    alignSelf: 'center',
  },
  buttonsContainer: {
    justifyContent: 'flex-start',
    marginTop: 30,
  },
  buttonActive: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 30,
    backgroundColor: COLORS.main,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    paddingVertical: 8,
  },
  textActive: {
    color: COLORS.white,
    fontFamily: 'AlumniSans-Medium',
    fontSize: 32,
  },
  button: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 30,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    marginTop: 20,
    borderWidth: 1.5,
    borderColor: COLORS.main,
    paddingVertical: 8,
    borderLeftWidth: 0,
  },
});
