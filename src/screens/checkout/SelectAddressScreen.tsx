import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import AddAdressButton from '../../components/AddAdressButton';
import AddressCard from '../../components/AddressCard';
import ProceedButton from '../../components/ProceedButton';
import { ADDRESS_SCREEN, CHECKOUT_SCREEN } from '../../constants/Screens';

import { changeHeader } from '../../styles/helper';

const SelectAddressScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [selectedAddress, selectAddress] = useState(-1);

  const updateSelection = (i: number) => {
    selectAddress(i);
  };

  changeHeader('Address');
  const navigateAddAddress = () => {
    navigation.navigate(ADDRESS_SCREEN);
  };

  return (
    <View className='bg-white h-full'>
      <Text className='px-4 my-2 text-lg font-[Poppins-SemiBold] text-black'>
        Select address
      </Text>

      {/* Add address button */}
      <AddAdressButton onPress={navigateAddAddress} />

      <FlatList
        data={new Array(10)}
        key={Math.random().toString()}
        nestedScrollEnabled={true}
        renderItem={({ index }) => {
          return (
            <AddressCard
              onPress={() => updateSelection(index)}
              selected={selectedAddress}
              index={index}
            />
          );
        }}
        className='mt-5'
      />

      {selectedAddress >= 0 ? (
        <ProceedButton
          title='Checkout'
          onPress={() => {
            navigation.navigate(CHECKOUT_SCREEN);
          }}
        />
      ) : null}
    </View>
  );
};

export default SelectAddressScreen;
