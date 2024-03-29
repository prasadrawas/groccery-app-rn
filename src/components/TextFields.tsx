import React from 'react';
import { TextInput, View } from 'react-native';
import Styles from '../styles/global';

interface Props {
  icon: React.ReactNode;
  placeholder: string;
}

const TextField: React.FC<Props> = ({ icon, placeholder }) => {
  return (
    <View
      className={`flex-row items-center space-x-2 px-1 py-1 pl-2 my-2 border-gray-400 rounded-md mx-4 bg-gray-100`}>
      {icon}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={'gray'}
        className={`flex-1 text-gray-900`}
        style={Styles.Light}
        cursorColor={'gray'}
      />
    </View>
  );
};

export default TextField;
