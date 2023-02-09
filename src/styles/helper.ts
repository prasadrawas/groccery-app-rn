import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';

export const hideHeader = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
};

export const changeHeader = (title: String) => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      title: title,
    });
  }, []);
};
