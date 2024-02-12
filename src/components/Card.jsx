import React, {useContext, useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {GlobalContext} from '../contexts/GlobalContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {COLORS} from '../helpers/customColor';

const {width, height} = Dimensions.get('window');
export default function Card({item}) {
  const {refresh, setRefresh} = useContext(GlobalContext);
  const [added, setAdded] = useState(false);
  const add = async product => {
    const cartList = await AsyncStorage.getItem('cartList');
    if (cartList) {
      const cartArray = JSON.parse(cartList);
      const existProduct = cartArray.find(cart => cart.name === product.name);
      if (!existProduct) {
        cartArray.push(product);
        await AsyncStorage.setItem('cartList', JSON.stringify(cartArray));
      }
    } else {
      const cartArray = [];
      cartArray.push(product);
      await AsyncStorage.setItem('cartList', JSON.stringify(cartArray));
    }
    await setRefresh(!refresh);
  };

  const trash = async product => {
    const cartList = await AsyncStorage.getItem('cartList');
    if (cartList) {
      const cartArray = JSON.parse(cartList);
      const existProduct = cartArray.find(cart => cart.name === product.name);
      if (existProduct) {
        const newArray = cartArray.filter(cart => cart.name !== product.name);
        await AsyncStorage.setItem('cartList', JSON.stringify(newArray));
      }
    }
    await setRefresh(!refresh);
  };

  const define = async product => {
    const cartList = await AsyncStorage.getItem('cartList');
    if (cartList) {
      const cartArray = JSON.parse(cartList);
      const existProduct = cartArray.find(cart => cart.name === product.name);
      if (existProduct) {
        trash(product);
      } else {
        add(product);
      }
    } else {
      add(product);
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      const cartList = await AsyncStorage.getItem('cartList');
      if (cartList) {
        const cartArray = JSON.parse(cartList);
        const existProduct = cartArray.find(cart => cart.name === item.name);
        if (existProduct) {
          setAdded(true);
        } else {
          setAdded(false);
        }
      } else {
        setAdded(false);
      }
    };

    getProduct();
  }, [refresh]);
  return (
    <View style={styles.card}>
      <Image
        source={item.image}
        style={
          item?.name === 'Матадор'
            ? {
                height: 100,
                width: width * 0.2,
                marginTop: 20,
                alignSelf: 'center',
              }
            : styles.image
        }
      />

      <View style={styles.rightContainer}>
        <View>
          <Text style={styles.name}>{item.name}</Text>
        </View>

        <View style={styles.row}>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{item.price} ₽ </Text>
          </View>

          {added ? (
            <TouchableOpacity style={styles.addedButton}>
              <Text style={styles.addedButtonText}>В корзине</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.button}
              onPress={() => define(item)}>
              <Text style={styles.buttonText}>Добавить</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    width: '45%',
    marginTop: 20,
    borderWidth: 1.5,
    borderColor: COLORS.main,
    justifyContent: 'center',
  },
  image: {
    height: 100,
    width: width * 0.35,
    marginTop: 20,
    alignSelf: 'center',
  },
  rightContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 6,
  },
  name: {
    color: COLORS.black,
    fontFamily: 'AlumniSans-Bold',
    fontSize: 18,
    textAlign: 'center',
  },
  price: {
    fontFamily: 'AlumniSans-Bold',
    fontSize: 16,
    color: COLORS.black,
  },
  row: {
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'space-between',
  },
  button: {
    borderRadius: 25,
    backgroundColor: '#FDEA8A',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 6,
  },
  buttonText: {
    fontFamily: 'AlumniSans-Bold',
    fontSize: 16,
    color: COLORS.black,
    fontWeight: '700',
  },
  priceContainer: {
    paddingHorizontal: 6,
    paddingVertical: 3,
    backgroundColor: COLORS.main,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addedButton: {
    borderRadius: 25,
    backgroundColor: COLORS.black,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 6,
  },
  addedButtonText: {
    fontFamily: 'AlumniSans-Bold',
    fontSize: 16,
    color: '#FDEA8A',
    fontWeight: '700',
  },
});
