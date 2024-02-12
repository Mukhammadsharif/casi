import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Platform,
  ImageBackground,
} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {COLORS} from './helpers/customColor';
import CloseIcon from './icons/close-white.png';
import Category from './screens/Category';
import Main from './screens/Main';
import Product from './screens/Product';
import Background from './icons/menu-background.png';
import Cart from './screens/Cart';
import CartThank from './screens/CartThank';
import Reserve from './screens/Reserve';
import ReserveThank from './screens/ReserveThank';
import Contacts from './screens/Contacts';
import Party from './screens/Party';
import Retro from './screens/Retro';
import Caraoke from './screens/Caraoke';
import Football from './screens/Football';
import Kitchen from './screens/Kitchen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const {width, height} = Dimensions.get('window');
export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          component={DrawerNavigator}
          name="DrawerNavigator"
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width: width,
        },
        headerShown: false,
      }}
      drawerContent={props => <CustomDrawerNavigator {...props} />}>
      <Drawer.Screen name="Category" component={Category} />
      <Drawer.Screen name="Main" component={Main} />
      <Drawer.Screen name="Product" component={Product} />
      <Drawer.Screen name="Cart" component={Cart} />
      <Drawer.Screen name="CartThank" component={CartThank} />
      <Drawer.Screen name="Reserve" component={Reserve} />
      <Drawer.Screen name="ReserveThank" component={ReserveThank} />
      <Drawer.Screen name="Contacts" component={Contacts} />
      <Drawer.Screen name="Party" component={Party} />
      <Drawer.Screen name="Retro" component={Retro} />
      <Drawer.Screen name="Kitchen" component={Kitchen} />
      <Drawer.Screen name="Football" component={Football} />
      <Drawer.Screen name="Caraoke" component={Caraoke} />
    </Drawer.Navigator>
  );
}

function CustomDrawerNavigator(props) {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView {...props} scrollEnabled={false}>
      <ImageBackground source={Background} style={styles.container}>
        <View style={styles.closeIconContainer}>
          <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
            <Image source={CloseIcon} style={styles.close} />
          </TouchableOpacity>
        </View>

        <View style={styles.mainContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Category')}
            style={styles.drawerItem}>
            <Text style={styles.itemText}>Главная</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Main')}
            style={styles.drawerFirstItem}>
            <Text style={styles.itemFirstText}>Меню</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Cart')}
            style={styles.drawerItem}>
            <Text style={styles.itemText}>Корзина</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Reserve')}
            style={styles.drawerItem}>
            <Text style={styles.itemText}>Бронь</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Party')}
            style={styles.drawerItem}>
            <Text style={styles.itemText}>События</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Contacts')}
            style={styles.drawerItem}>
            <Text style={styles.itemText}>Контакты</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: COLORS.main,
    height: Platform.OS === 'ios' ? height : height,
  },
  mainContainer: {
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: height / 10,
  },
  drawerFirstItem: {
    width: '75%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 14,
    paddingHorizontal: 30,
    marginTop: 10,
  },
  itemFirstText: {
    color: COLORS.black,
    fontSize: 30,
    fontFamily: 'AlumniSans-Bold',
    lineHeight: 28,
  },
  drawerItem: {
    width: '75%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingVertical: 14,
    paddingHorizontal: 30,
    marginTop: 7,
  },
  itemText: {
    color: COLORS.white,
    fontSize: 30,
    fontFamily: 'AlumniSans-Bold',
    lineHeight: 28,
  },
  icon: {
    width: 25,
    height: 25,
  },
  footer: {
    justifyContent: 'center',
    color: COLORS.white,
    fontWeight: '700',
    fontSize: 30,
    fontFamily: 'AlumniSans-Medium',
  },
  transform: {
    transform: 'scale(0.35)',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 30,
  },
  closeIconContainer: {
    position: 'absolute',
    right: 20,
    top: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  close: {
    width: 20,
    height: 20,
  },
  header: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: height / 10,
  },
  drawerLogo: {
    aspectRatio: 0.5,
    resizeMode: 'contain',
  },
  basket: {
    width: 50,
    height: 50,
    marginTop: height / 5,
  },
});
