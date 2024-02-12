import React, {useContext} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Background from '../icons/main-background.png';
import Back from '../icons/back-yellow.png';
import Hamburger from '../icons/burger-yellow.png';
import {useNavigation} from '@react-navigation/native';
import Banner1 from '../icons/banner-1.png';
import Banner2 from '../icons/banner-2.png';
import Banner3 from '../icons/banner-3.png';
import {COLORS} from '../helpers/customColor';
import Burgers from '../icons/burgers.png';
import Pasta from '../icons/pasta.png';
import Zakuski from '../icons/zakuski.png';
import Drinks from '../icons/drinks.png';
import HomeIcon from '../icons/home.png';
import {GlobalContext} from '../contexts/GlobalContext';
export default function Main() {
  const navigation = useNavigation();
  const {setCategory} = useContext(GlobalContext);
  return (
    <View style={styles.container}>
      <ImageBackground source={Background} style={styles.background}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={Back} style={styles.backIcon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image source={Hamburger} style={styles.hamburger} />
          </TouchableOpacity>
        </View>

        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          contentContainerStyle={styles.bannerContainer}>
          <View style={styles.relativeBox}>
            <Image source={Banner1} style={styles.banner} />
            <Text style={styles.bannerText}>до 25.02.2024</Text>
          </View>
          <Image source={Banner2} style={styles.banner} />
          <Image source={Banner3} style={styles.banner} />
        </ScrollView>

        <ScrollView contentContainerStyle={styles.mainContainer}>
          <TouchableOpacity
            style={styles.categoryButton}
            onPress={() => {
              setCategory(0);
              navigation.navigate('Product');
            }}>
            <Image source={Burgers} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Бургеры</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.categoryButton}
            onPress={() => {
              setCategory(1);
              navigation.navigate('Product');
            }}>
            <Image source={Pasta} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Паста</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.categoryButton}
            onPress={() => {
              setCategory(2);
              navigation.navigate('Product');
            }}>
            <Image source={Zakuski} style={styles.categoryImageZac} />
            <Text style={styles.categoryText}>Закуски</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.categoryButton}
            onPress={() => {
              setCategory(3);
              navigation.navigate('Product');
            }}>
            <Image source={Drinks} style={styles.categoryImageDrink} />
            <Text style={styles.categoryText}>Напитки</Text>
          </TouchableOpacity>
        </ScrollView>

        <TouchableOpacity onPress={() => navigation.navigate('Category')}>
          <Image source={HomeIcon} style={styles.home} />
        </TouchableOpacity>
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
  bannerContainer: {
    marginTop: 30,
    paddingRight: 50,
  },
  banner: {
    height: 170,
    width: 300,
    borderRadius: 15,
    marginLeft: 20,
  },
  relativeBox: {
    position: 'relative',
  },
  bannerText: {
    position: 'absolute',
    fontSize: 20,
    color: COLORS.white,
    fontFamily: 'AlumniSans-SemiBold',
    left: 30,
    top: 100,
  },
  mainContainer: {
    paddingHorizontal: 35,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryButton: {
    width: 130,
    height: 120,
    borderRadius: 15,
    backgroundColor: COLORS.main,
    marginTop: 20,
    justifyContent: 'space-between',
  },
  categoryText: {
    fontSize: 35,
    color: COLORS.black,
    fontFamily: 'AlumniSans-SemiBold',
    textAlign: 'center',
    paddingBottom: 10,
  },
  categoryImage: {
    height: 60,
    aspectRatio: 1.4,
    alignSelf: 'center',
    marginTop: -20,
  },
  categoryImageZac: {
    height: 70,
    aspectRatio: 1.9,
    alignSelf: 'center',
    marginTop: -20,
  },
  categoryImageDrink: {
    height: 70,
    aspectRatio: 1.3,
    alignSelf: 'center',
    marginTop: -15,
  },
  home: {
    width: 30,
    height: 32,
    alignSelf: 'center',
    marginBottom: 20,
  },
});
