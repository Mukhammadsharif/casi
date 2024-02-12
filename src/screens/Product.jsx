import React, {useContext} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Background from '../icons/main-background.png';
import Back from '../icons/back-yellow.png';
import Hamburger from '../icons/burger-yellow.png';
import {useNavigation} from '@react-navigation/native';
import {GlobalContext} from '../contexts/GlobalContext';
import Card from '../components/Card';
import {producs} from '../products/producs';

export default function Product() {
  const navigation = useNavigation();
  const {category} = useContext(GlobalContext);
  return (
    <View style={styles.container}>
      <ImageBackground source={Background} style={styles.background}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Main')}>
            <Image source={Back} style={styles.backIcon} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image source={Hamburger} style={styles.hamburger} />
          </TouchableOpacity>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.mainContainer}>
          {producs[category].map((item, index) => (
            <Card item={item} key={item.name} />
          ))}
        </ScrollView>
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
  mainContainer: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
