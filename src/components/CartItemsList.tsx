import React from 'react';
import { FlatList, View } from 'react-native';
import Styles from '../styles/global';
import CartItemCard from './CartItemCard';

interface Props {
  items: any;
}

const CartItemsList: React.FC<Props> = ({ items }) => {
  const product = {
    id: '1',
    title: 'Maggie',
    imgUrl:
      'https://i.pinimg.com/736x/a8/5c/ed/a85ced6807a6912e058381a388ddcf41.jpg',
    category: 'Noodles',
    rating: 4.5,
    weight: '180 gm',
    price: 48,
  };
  return (
    <View className='bg-white p-1 rounded-xl m-3' style={Styles.Card}>
      <FlatList
        data={items}
        key={Math.random().toString()}
        nestedScrollEnabled={true}
        ItemSeparatorComponent={itemSeperator}
        renderItem={({ item }) => (
          <CartItemCard
            id={Math.random().toString()}
            title={product.title}
            price={product.price}
            weight={product.weight}
            imgUrl={product.imgUrl}
          />
        )}
      />
    </View>
  );
};

const itemSeperator = () => <View className='bg-gray-400 h-[0.3px]' />;

export default CartItemsList;
