
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import { ShopProvider } from './src/context/ShopContext';

import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import VerificationScreen from './src/screens/VerificationScreen';
import HomeScreen from './src/screens/HomeScreen';
import ExploreScreen from './src/screens/ExploreScreen';
import ProductDetailScreen from './src/screens/ProductDetailScreen';
import FavoriteScreen from './src/screens/FavoriteScreen';
import CartScreen from './src/screens/CartScreen';
import CheckoutScreen from './src/screens/CheckoutScreen';
import AddCardScreen from './src/screens/AddCardScreen';
import OrderSuccessScreen from './src/screens/OrderSuccessScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SettingsScreen from './src/screens/SettingsScreen';

export type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Signup: undefined;
  ForgotPassword: undefined;
  Verification: { email: string; name: string };
  Home: undefined;
  Explore: undefined;
  ProductDetail: { product: any };
  Favorite: undefined;
  Cart: undefined;
  Checkout: undefined;
  AddCard: undefined;
  OrderSuccess: undefined;
  Profile: undefined;
  Settings: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <ShopProvider>
      <NavigationContainer>
       <Stack.Navigator
  id="RootStack"
  initialRouteName="Welcome"
  screenOptions={{
    headerShown: false,
    animation: 'slide_from_right',
  }}
>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
          <Stack.Screen name="Verification" component={VerificationScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Explore" component={ExploreScreen} />
          <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
          <Stack.Screen name="Favorite" component={FavoriteScreen} />
          <Stack.Screen name="Cart" component={CartScreen} />
          <Stack.Screen name="Checkout" component={CheckoutScreen} />
          <Stack.Screen name="AddCard" component={AddCardScreen} />
          <Stack.Screen name="OrderSuccess" component={OrderSuccessScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ShopProvider>
  );
}
