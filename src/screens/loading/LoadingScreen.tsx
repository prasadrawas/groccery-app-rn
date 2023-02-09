import React from 'react';
import { View } from 'react-native';
import { hideHeader } from '../../styles/helper';

const LoadingScreen = () => {
  hideHeader();
  return <View className='bg-white'></View>;
};

export default LoadingScreen;
