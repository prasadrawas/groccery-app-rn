import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { UserCircleIcon } from 'react-native-heroicons/solid';
import { useSelector } from 'react-redux';
import BannerCarousel from '../../components/BannerCarousel';
import Categories from '../../components/Categories';
import HotProducts from '../../components/HotProducts';
import ProceedButton from '../../components/ProceedButton';
import TextField from '../../components/TextFields';
import { GREEN_COLOR } from '../../constants/Colors';
import { FONT_SEMIBOLD } from '../../constants/Fonts';
import { CART_SCREEN, PROFILE_SCREEN } from '../../constants/Screens';
import Styles from '../../styles/global';
import { hideHeader } from '../../styles/helper';

const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  hideHeader();
  const items = useSelector((state: any) => state.cart.items);

  return (
    <>
      <ScrollView>
        {/* Appbar */}
        <View className='pt-4 flex-row px-2 items-center mx-2 pb-5'>
          <View className='flex-1'>
            <Text
              className={`text-xl tracking-widest font-[Poppins-Bold] text-black`}>
              blink
              <Text style={Styles.ColorGreen}>it</Text>
            </Text>
            <Text className='font-[Poppins-Light] text-black'>
              All of your need at one place
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(PROFILE_SCREEN);
            }}>
            <UserCircleIcon size={30} color={GREEN_COLOR} />
          </TouchableOpacity>
        </View>

        {/* Search bar */}
        <TextField
          icon={<MagnifyingGlassIcon size={20} color={'gray'} />}
          placeholder='Search here'
        />

        {/* Greetings */}
        <Text className={`mx-4 my-5 text-2xl text-black`} style={Styles.Bold}>
          Welcome <Text style={Styles.ColorGreen}>Prasad !</Text>
        </Text>

        {/* Carousel */}
        <BannerCarousel />

        {/* Categories */}
        <Text
          className={`font-['${FONT_SEMIBOLD}'] text-lg mx-4 py-4 text-black`}
          style={Styles.SemiBold}>
          Categories
        </Text>

        <Categories />

        {/* Hot products */}

        <Text
          className={`font-['${FONT_SEMIBOLD}'] text-lg mx-4 py-4 mt-10 text-black`}
          style={Styles.SemiBold}>
          Hot Products
        </Text>

        <HotProducts />
      </ScrollView>
      {items.length > 0 ? (
        <ProceedButton
          onPress={() => {
            navigation.navigate(CART_SCREEN);
          }}
          title={'View cart'}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default HomeScreen;
