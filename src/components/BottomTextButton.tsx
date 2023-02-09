import React from 'react';
import { Text, TouchableNativeFeedback, View } from 'react-native';
import Styles from '../styles/global';
interface Props {
  text: string;
  buttonText: string;
  onPress: any;
}
const BottomTextButton: React.FC<Props> = ({ text, buttonText, onPress }) => {
  return (
    <View className='pb-4 items-center'>
      <Text className='font-[Poppins-Light] text-black'>
        {text}{' '}
        <TouchableNativeFeedback onPress={onPress}>
          <Text style={[Styles.ColorGreen]} className='font-[Poppins-Bold]'>
            {buttonText}
          </Text>
        </TouchableNativeFeedback>
      </Text>
    </View>
  );
};

export default BottomTextButton;
