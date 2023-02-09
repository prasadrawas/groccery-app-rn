import React from 'react';
import { Text, View } from 'react-native';
import Styles from '../styles/global';

interface Props {
  title: string;
  value: string;
  size: string;
}
const RowText: React.FC<Props> = ({ title, value, size }) => {
  return (
    <View className='flex-row justify-between items-center py-1'>
      <Text className={`text-${size} font-[Poppins-Regular] text-gray-900`}>
        {title}
      </Text>
      <Text style={Styles.SemiBold} className={`text-${size} text-gray-900`}>
        {value}
      </Text>
    </View>
  );
};

export default RowText;
