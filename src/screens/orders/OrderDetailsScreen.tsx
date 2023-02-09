import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import AddressCard from '../../components/AddressCard';
import BillingCard from '../../components/BillingCard';
import OrderItem from '../../components/OrderItem';
import RowText from '../../components/RowText';
import Styles from '../../styles/global';
import { changeHeader } from '../../styles/helper';
const orders = [
  {
    id: '1',
    title: 'Maggie',
    imgUrl:
      'https://i.pinimg.com/736x/a8/5c/ed/a85ced6807a6912e058381a388ddcf41.jpg',
    category: 'Noodles',
    rating: 4.5,
    weight: '180 gm',
    price: 48,
  },
  {
    id: '2',
    title: 'Maggie',
    imgUrl:
      'https://i.pinimg.com/736x/a8/5c/ed/a85ced6807a6912e058381a388ddcf41.jpg',
    category: 'Noodles',
    rating: 4.5,
    weight: '180 gm',
    price: 48,
  },
  {
    id: '3',
    title: 'Maggie',
    imgUrl:
      'https://i.pinimg.com/736x/a8/5c/ed/a85ced6807a6912e058381a388ddcf41.jpg',
    category: 'Noodles',
    rating: 4.5,
    weight: '180 gm',
    price: 48,
  },
  {
    id: '4',
    title: 'Maggie',
    imgUrl:
      'https://i.pinimg.com/736x/a8/5c/ed/a85ced6807a6912e058381a388ddcf41.jpg',
    category: 'Noodles',
    rating: 4.5,
    weight: '180 gm',
    price: 48,
  },
  {
    id: '5',
    title: 'Maggie',
    imgUrl:
      'https://i.pinimg.com/736x/a8/5c/ed/a85ced6807a6912e058381a388ddcf41.jpg',
    category: 'Noodles',
    rating: 4.5,
    weight: '180 gm',
    price: 48,
  },
  {
    id: '6',
    title: 'Maggie',
    imgUrl:
      'https://i.pinimg.com/736x/a8/5c/ed/a85ced6807a6912e058381a388ddcf41.jpg',
    category: 'Noodles',
    rating: 4.5,
    weight: '180 gm',
    price: 48,
  },
  {
    id: '7',
    title: 'Maggie',
    imgUrl:
      'https://i.pinimg.com/736x/a8/5c/ed/a85ced6807a6912e058381a388ddcf41.jpg',
    category: 'Noodles',
    rating: 4.5,
    weight: '180 gm',
    price: 48,
  },
  {
    id: '8',
    title: 'Maggie',
    imgUrl:
      'https://i.pinimg.com/736x/a8/5c/ed/a85ced6807a6912e058381a388ddcf41.jpg',
    category: 'Noodles',
    rating: 4.5,
    weight: '180 gm',
    price: 48,
  },
  {
    id: '9',
    title: 'Maggie',
    imgUrl:
      'https://i.pinimg.com/736x/a8/5c/ed/a85ced6807a6912e058381a388ddcf41.jpg',
    category: 'Noodles',
    rating: 4.5,
    weight: '180 gm',
    price: 48,
  },
];

const OrderDetailsScreen = () => {
  changeHeader('Order details');
  return (
    <ScrollView className='bg-white h-full'>
      <Text className='px-4 pt-6 text-lg font-[Poppins-SemiBold] text-black'>
        Address details
      </Text>
      <AddressCard index={-1} />

      <Text className='px-4 pt-6 text-lg font-[Poppins-SemiBold] text-black'>
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

      {/* Order items */}
      <Text className='px-4 pt-6 text-lg mb-4 font-[Poppins-SemiBold]'>
        Ordered items
      </Text>

      {orders.map((item) => (
        <OrderItem
          id={item.id}
          title={item.title}
          category={item.category}
          rating={item.rating}
          price={item.price}
          weight={'190 Gm'}
          quantity={'4'}
          imgUrl={item.imgUrl}
          onPress={() => {}}
        />
      ))}
    </ScrollView>
  );
};

export default OrderDetailsScreen;
