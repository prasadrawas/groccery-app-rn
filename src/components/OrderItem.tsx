import React from 'react';
import {
  GestureResponderEvent,
  Image,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import Styles from '../styles/global';
interface Props {
  id: string;
  title: string;
  rating: number;
  price: number;
  weight: string;
  category: string;
  imgUrl: string;
  quantity: string;
  onPress: (event: GestureResponderEvent) => void;
}
const OrderItem: React.FC<Props> = ({
  title,
  price,
  category,
  imgUrl,
  quantity,
  onPress,
}) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View
        className='flex-1 m-1 rounded-lg p-2 flex-row space-x-3'
        style={Styles.Card}>
        <View className='items-center'>
          <Image
            source={{ uri: imgUrl }}
            className='h-[80px] w-[80px] rounded-full items-center'
          />
        </View>
        <View className='space-y-1'>
          <Text className='text-gray-800 font-[Poppins-SemiBold]'>{title}</Text>
          <Text className='text-xs font-[Poppins-Light] text-black'>
            {category}
          </Text>
          <View className='flex-row space-x-1 text-black'>
            <Text className='text-xs text-m font-[Poppins-ExtraLight] text-gray-900'>
              quantity :{' '}
              <Text className='text-xs text-m mb-4 font-[Poppins-SemiBold] text-gray-900'>
                {quantity}
              </Text>
            </Text>
          </View>
          <View className='flex-row space-x-1'>
            <Text className='text-xs text-m text-gray-900 font-[Poppins-ExtraLight]'>
              Total price :{' '}
              <Text className='text-xs text-m mb-4 font-[Poppins-SemiBold]'>
                ₹ {price}
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

export default OrderItem;
