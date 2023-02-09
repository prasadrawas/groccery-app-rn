import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import BillingCard from '../../components/BillingCard';
import CartItemsList from '../../components/CartItemsList';
import ProceedButton from '../../components/ProceedButton';
import { SELECT_ADDRESS_SCREEN } from '../../constants/Screens';
import { changeHeader } from '../../styles/helper';

const CartScreen = () => {
  changeHeader('Checkout');
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const items = useSelector((state: any) => state.cart.items);
  return (
    <View className='h-full bg-white'>
      {items.length > 0 ? (
        <>
          <ScrollView>
            <View>
              <Text className='text-lg px-4 pt-5 font-[Poppins-SemiBold] text-black'>
                Cart items
              </Text>
              <CartItemsList items={items} />
              <View>
                <BillingCard />
              </View>
            </View>
          </ScrollView>
          {items.length > 0 ? (
            <ProceedButton
              onPress={() => {
                navigation.navigate(SELECT_ADDRESS_SCREEN);
              }}
              title={'Select address'}
            />
          ) : (
            <></>
          )}
        </>
      ) : (
        <View className='h-full justify-center'>
          <Text className='text-center text-gray-900'>No items to display</Text>
        </View>
      )}
    </View>
  );
};

export default CartScreen;
