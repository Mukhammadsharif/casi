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

export default function Contacts() {
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

        <Text style={styles.title}>Контакты</Text>

        <View style={{paddingHorizontal: 30}}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder={'ФИО'}
              placeholderTextColor={'#8A8A8A'}
              editable={false}
            />

            <TextInput
              style={styles.input}
              placeholder={'Номер телефона'}
              placeholderTextColor={'#8A8A8A'}
              editable={false}
            />

            <TextInput
              style={styles.input}
              placeholder={'E-mail'}
              placeholderTextColor={'#8A8A8A'}
              editable={false}
            />

            <TextInput
              style={styles.input}
              placeholder={'Индекс'}
              placeholderTextColor={'#8A8A8A'}
              editable={false}
            />
          </View>
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
  title: {
    fontFamily: 'AlumniSans-Bold',
    color: COLORS.black,
    fontSize: 30,
    textAlign: 'left',
    marginTop: 40,
    paddingLeft: 20,
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 15,
    backgroundColor: COLORS.white,
    paddingBottom: 30,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginTop: 40,
  },
  input: {
    borderColor: COLORS.red,
    borderBottomWidth: 1,
    width: '100%',
    fontFamily: 'AlumniSans-Bold',
    height: 35,
    fontSize: 25,
    marginTop: 10,
  },
  logo: {
    aspectRatio: 2.3,
    height: 100,
    alignSelf: 'center',
    marginTop: 100,
  },
});
