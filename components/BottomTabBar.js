// components/BottomTabBar.js
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const BottomTabBar = () => {
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10 }}>
    <TouchableOpacity onPress={() => navigateToScreen('Home')}>
      <Ionicons name="home" size={30} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigateToScreen('RecentSearches')}>
      <Ionicons name="search" size={30} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigateToScreen('ProductList')}>
      <Ionicons name="list" size={30} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigateToScreen('UserProfile')}>
      <Ionicons name="person" size={30} />
    </TouchableOpacity>
  </View>
  );
};

export default BottomTabBar;
