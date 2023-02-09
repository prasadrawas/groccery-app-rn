import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Image, Text, TouchableNativeFeedback, View } from 'react-native';
import { StarIcon } from 'react-native-heroicons/outline';
import { PRODUCT_DETAILS_SCREEN } from '../constants/Screens';

import Styles from '../styles/global';
import CartModifierButton from './CartModifierButton';
interface Props {
  id: string;
  title: string;
  rating: number;
  price: number;
  weight: string;
  category: string;
  imgUrl: string;
}
const ProductCard: React.FC<Props> = ({
  id,
  title,
  rating,
  weight,
  price,
  category,
  imgUrl,
}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const navigateToProductDetailsScreen = () => {
    navigation.navigate(PRODUCT_DETAILS_SCREEN, { id: id });
  };

  return (
    <TouchableNativeFeedback onPress={navigateToProductDetailsScreen}>
      <View className='flex-1 m-1 rounded-lg p-2' style={Styles.Card}>
        <View className='items-center mb-4'>
          <Image
            source={{ uri: imgUrl }}
            className='h-[80px] w-[80px] rounded items-center'
          />
        </View>
        <Text className='text-gray-800 font-[Poppins-SemiBold]'>{title}</Text>
        <Text className='text-xs text-black font-[Poppins-Light]'>
          {category}
        </Text>
        <View className='flex-row space-x-1'>
          <View className='flex-row space-x-1'>
            <StarIcon size={14} color='green' />
            <Text className='text-xs text-m text-gray-900 font-[Poppins-ExtraLight]'>
              {rating}
            </Text>
          </View>
          <Text className='text-xs text-m font-[Poppins-ExtraLight] text-gray-900'>
            |
          </Text>
          <Text className='text-xs text-m font-[Poppins-Regular] text-black'>
            {weight}
          </Text>
        </View>

        <Text className='text-xs text-m mb-4 font-[Poppins-SemiBold] text-gray-900'>
          ₹ {price}
        </Text>

        <CartModifierButton id={id} />
      </View>
    </TouchableNativeFeedback>
  );
};

export default ProductCard;
