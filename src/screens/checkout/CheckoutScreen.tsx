import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import AddressCard from '../../components/AddressCard';
import BillingCard from '../../components/BillingCard';
import ProceedButton from '../../components/ProceedButton';
import RowText from '../../components/RowText';
import { ORDER_PLACED_SCREEN } from '../../constants/Screens';
import Styles from '../../styles/global';
import { changeHeader } from '../../styles/helper';

const CheckoutScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  changeHeader('Checkout');
  return (
    <>
      <ScrollView className='h-full bg-white'>
        {/* Address details */}
        <Text className='px-4 pt-6 text-lg font-[Poppins-SemiBold] text-black'>
          Address details
        </Text>
        <AddressCard index={-1} />

        {/* Billing details */}
        <Text className='px-4 pt-6 text-lg  font-[Poppins-SemiBold] text-black'>
          Billing details
        </Text>
        <BillingCard />

        {/* Delivery type */}

        <View className='mx-4 p-4 my-5 bg-white rounded-lg' style={Styles.Card}>
          <RowText
            title={'Payment mode'}
            value={`Cash on Delivery`}
            size={'xs'}
          />
        </View>
      </ScrollView>

      <ProceedButton
        title='Checkout'
        onPress={() => {
          navigation.navigate(ORDER_PLACED_SCREEN);
        }}
      />
    </>
  );
};

export default CheckoutScreen;
