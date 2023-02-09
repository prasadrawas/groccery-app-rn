import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import { LOGIN_SCREEN } from '../../constants/Screens';

import Styles from '../../styles/global';
import { hideHeader } from '../../styles/helper';

const SplashScreen = () => {
  hideHeader();

  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(LOGIN_SCREEN);
    }, 2000);
  }, []);
  return <Splash />;
};

const Splash = () => (
  <View
    className={`justify-center h-full w-full items-center`}
    style={Styles.BgYellow}>
    <Image
      source={require('../../assets/images/img_splash.png')}
      className='w-52 h-52'
    />

    <Text
      className={`text-[40px] tracking-widest font-[Poppins-SemiBold] text-gray`}>
      blink<Text style={Styles.ColorGreen}>it</Text>
    </Text>
    <Text style={Styles.Light} className='text-gray'>
      All of your needs at one place
    </Text>
  </View>
);

export default SplashScreen;
