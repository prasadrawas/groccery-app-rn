import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Text, TouchableNativeFeedback, View } from 'react-native';
import { CheckCircleIcon } from 'react-native-heroicons/solid';
import { GREEN_COLOR } from '../../constants/Colors';
import { HOMES_CREEN } from '../../constants/Screens';
import Styles from '../../styles/global';
import { hideHeader } from '../../styles/helper';

const OrderPlacedScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  hideHeader();
  return (
    <View className='h-full items-center justify-center'>
      <CheckCircleIcon size={150} color={`${GREEN_COLOR}`} />
      <Text
        className='text-[30px]'
        style={[Styles.SemiBold, Styles.ColorGreen]}>
        Thank you!
      </Text>
      <Text style={Styles.Regular}>Your order placed successfully.</Text>

      <TouchableNativeFeedback
        onPress={() => {
          navigation.navigate(HOMES_CREEN);
        }}>
        <View
          className='w-[230px] rounded-full absolute z-50 bottom-9'
          style={Styles.BgGreen}>
          <Text style={Styles.Regular} className='text-center text-white p-3'>
            Done
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default OrderPlacedScreen;
