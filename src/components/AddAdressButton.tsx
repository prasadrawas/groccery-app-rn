import React from 'react';

import {
  GestureResponderEvent,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import { PlusCircleIcon } from 'react-native-heroicons/outline';
interface Props {
  onPress: (event: GestureResponderEvent) => void;
}
const AddAdressButton: React.FC<Props> = ({ onPress }) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View className='flex-row items-center justify-center space-x-3 border-[1px] border-gray-400 p-1 rounded mx-4 mt-3'>
        <PlusCircleIcon color={'green'} size={25} />
        <Text className='text-xs text-black font-[Poppins-Regular]'>
          Add new address
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
};

export default AddAdressButton;
