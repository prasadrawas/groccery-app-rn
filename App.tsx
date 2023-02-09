import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { useColorScheme } from 'react-native';
import { Provider } from 'react-redux';
import {
  ADDRESS_SCREEN,
  CART_SCREEN,
  CHECKOUT_SCREEN,
  HOMES_CREEN,
  LOGIN_SCREEN,
  ORDERS_SCREEN,
  ORDER_DETAILS_SCREEN,
  ORDER_PLACED_SCREEN,
  PRODUCT_DETAILS_SCREEN,
  PROFILE_SCREEN,
  REGISTER_SCREEN,
  SELECT_ADDRESS_SCREEN,
  SPLASH_SCREEN,
} from './src/constants/Screens';
import { store } from './src/redux/store';
import LoginScreen from './src/screens/auth/LoginScreen';
import RegisterScreen from './src/screens/auth/RegisterScreen';
import CartScreen from './src/screens/cart/CartScreen';
import AddAddressScreen from './src/screens/checkout/AddAddressScreen';
import CheckoutScreen from './src/screens/checkout/CheckoutScreen';
import OrderPlacedScreen from './src/screens/checkout/OrderPlacedScreen';
import SelectAddressScreen from './src/screens/checkout/SelectAddressScreen';
import ProductDetailsScreen from './src/screens/details/ProductDetailsScreen';
import HomeScreen from './src/screens/home/HomeScreen';
import MyOrdersScreen from './src/screens/orders/MyOrdersScreen';
import OrderDetailsScreen from './src/screens/orders/OrderDetailsScreen';
import ProfileScreen from './src/screens/profile/ProfileScreen';
import SplashScreen from './src/screens/splash/SplashScreen';

const App = () => {
  const Stack = createNativeStackNavigator();

  const Theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white',
    },
  };

  //Always use Light theme
  useColorScheme();
  useState('dark');

  return (
    <NavigationContainer theme={Theme}>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name={SPLASH_SCREEN} component={SplashScreen} />
          <Stack.Screen name={LOGIN_SCREEN} component={LoginScreen} />
          <Stack.Screen name={REGISTER_SCREEN} component={RegisterScreen} />
          <Stack.Screen name={HOMES_CREEN} component={HomeScreen} />
          <Stack.Screen
            name={PRODUCT_DETAILS_SCREEN}
            component={ProductDetailsScreen}
          />
          <Stack.Screen name={CART_SCREEN} component={CartScreen} />
          <Stack.Screen
            name={SELECT_ADDRESS_SCREEN}
            component={SelectAddressScreen}
          />
          <Stack.Screen name={ADDRESS_SCREEN} component={AddAddressScreen} />
          <Stack.Screen name={CHECKOUT_SCREEN} component={CheckoutScreen} />
          <Stack.Screen
            name={ORDER_PLACED_SCREEN}
            component={OrderPlacedScreen}
          />
          <Stack.Screen name={PROFILE_SCREEN} component={ProfileScreen} />
          <Stack.Screen name={ORDERS_SCREEN} component={MyOrdersScreen} />
          <Stack.Screen
            name={ORDER_DETAILS_SCREEN}
            component={OrderDetailsScreen}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;

//Adding expo fonts
// const [fontsLoaded] = useFonts({
//   'Poppins-Black': require('./src/assets/fonts/Poppins-Black.ttf'),
//   'Poppins-Bold': require('./src/assets/fonts/Poppins-Bold.ttf'),
//   'Poppins-ExtraBold': require('./src/assets/fonts/Poppins-ExtraBold.ttf'),
//   'Poppins-ExtraLight': require('./src/assets/fonts/Poppins-ExtraLight.ttf'),
//   'Poppins-Light': require('./src/assets/fonts/Poppins-Light.ttf'),
//   'Poppins-Medium': require('./src/assets/fonts/Poppins-Medium.ttf'),
//   'Poppins-Regular': require('./src/assets/fonts/Poppins-Regular.ttf'),
//   'Poppins-SemiBold': require('./src/assets/fonts/Poppins-SemiBold.ttf'),
//   'Poppins-Thin': require('./src/assets/fonts/Poppins-Thin.ttf'),
// });
