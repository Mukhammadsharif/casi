import React, {useContext, useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS} from '../helpers/customColor';
import {useNavigation} from '@react-navigation/native';
import {GlobalContext} from '../contexts/GlobalContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CartItem from '../components/CartItem';
import CustomButton from '../components/CustomButton';
import SadIcon from '../icons/sad-icon.png';
import Background from '../icons/cart-full-background.png';
import Back from '../icons/back-yellow.png';
import Hamburger from '../icons/burger-yellow.png';

const {height} = Dimensions.get('window');
export default function Cart() {
  const navigation = useNavigation();
  const {refresh, setRefresh} = useContext(GlobalContext);
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const getCart = async () => {
      const list = await AsyncStorage.getItem('cartList');
      if (list?.length) {
        setCart(JSON.parse(list));
      } else {
        setCart(null);
      }
    };

    getCart();
  }, [refresh]);

  useEffect(() => {
    if (cart?.length) {
      let sum = 0;
      cart.forEach(product => {
        sum += product.price * product.count;
      });

      setPrice(sum);
    }
  }, [cart, refresh]);

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
        {!cart?.length ? (
          <View>
            <Image source={SadIcon} style={styles.smile} />

            <Text style={styles.headerText}>{'Корзина пуста'}</Text>

            <TouchableOpacity onPress={() => navigation.navigate('Main')}>
              <Text style={styles.goBack}>
                Вернуться в{' '}
                <Text style={{textDecorationLine: 'underline'}}>меню</Text>
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          ''
        )}

        {cart?.length ? <Text style={styles.title}>Ваш заказ:</Text> : ''}
        {cart?.length ? (
          <ScrollView contentContainerStyle={styles.scrollView}>
            {cart?.length
              ? cart.map((item, index) => (
                  <CartItem cart={item} key={item.name} />
                ))
              : ''}

            {cart?.length ? <Text style={styles.price}>Итого:</Text> : ''}

            {cart?.length ? <Text style={styles.price}>{price} ₽</Text> : ''}
          </ScrollView>
        ) : (
          ''
        )}

        {cart?.length ? (
          <CustomButton
            text={'Подтвердить заказ'}
            onPress={() => navigation.navigate('CartThank')}
          />
        ) : (
          ''
        )}
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
    paddingHorizontal: 20,
    fontSize: 32,
    fontFamily: 'AlumniSans-SemiBold',
    marginTop: 20,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: COLORS.main,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  burger: {
    width: 30,
    height: 25,
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  parcel: {
    width: 28,
    height: 30,
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  logo: {
    width: 200,
    height: 40,
    aspectRatio: 3.5,
    resizeMode: 'contain',
  },
  scrollView: {
    width: '90%',
    paddingTop: 20,
    backgroundColor: COLORS.white,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    marginTop: 20,
    paddingBottom: 30,
  },
  check: {
    fontFamily: 'Montserrat-Medium',
    color: COLORS.black,
    fontSize: 20,
  },
  sumContainer: {
    width: '100%',
    marginTop: 50,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 100,
  },
  checkPrice: {
    fontFamily: 'Montserrat-ExtraBold',
    fontWeight: '900',
    color: COLORS.black,
  },
  headerText: {
    marginTop: 20,
    textAlign: 'center',
    color: COLORS.black,
    fontFamily: 'AlumniSans-Bold',
    fontSize: 40,
  },
  drawerLogo: {
    aspectRatio: 0.2,
    resizeMode: 'contain',
  },
  smile: {
    aspectRatio: 1,
    height: 150,
    alignSelf: 'center',
    marginTop: height / 7,
  },
  price: {
    textAlign: 'right',
    fontSize: 32,
    fontFamily: 'AlumniSans-SemiBold',
    paddingRight: 20,
    color: COLORS.black,
  },
  goBack: {
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'AlumniSans-SemiBold',
    color: COLORS.white,
  },
});
