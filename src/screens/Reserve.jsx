import React from 'react';
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
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../helpers/customColor';
import CustomButton from '../components/CustomButton';
import Background from '../icons/reserve-main-background.png';
import Back from '../icons/back-red.png';
import Hamburger from '../icons/burger-red.png';

export default function Reserve() {
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
        <Text style={styles.title}>Реезрв столика</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={'ФИО...'}
            placeholderTextColor={COLORS.white}
          />

          <TextInput
            style={styles.input}
            placeholder={'E-mail'}
            placeholderTextColor={COLORS.white}
          />

          <TextInput
            style={styles.input}
            placeholder={'Номер столика'}
            placeholderTextColor={COLORS.white}
          />

          <TextInput
            style={styles.input}
            placeholder={'Дата и время'}
            placeholderTextColor={COLORS.white}
          />
        </View>

        <CustomButton
          text={'Подтвердить резерв'.toUpperCase()}
          onPress={() => navigation.navigate('ReserveThank')}
        />
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
  },
  input: {
    borderColor: COLORS.white,
    borderWidth: 2,
    width: '90%',
    paddingLeft: 15,
    fontFamily: 'AlumniSans-Bold',
    color: COLORS.black,
    marginTop: 15,
    height: 50,
    fontSize: 25,
  },
});
