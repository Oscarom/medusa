// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./views/HomeScreen";
import ProductListScreen from "./views/ProductListScreen";
import RecentSearchesScreen from "./views/RecentSearchesScreen";
import BottomTabBar from "./components/BottomTabBar";
import UserProfileScreen from "./views/UserProfileScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="RecentSearches" component={RecentSearchesScreen} />
        <Stack.Screen name="ProductList" component={ProductListScreen} />
        <Stack.Screen name="UserProfile" component={UserProfileScreen} />
      </Stack.Navigator>
      <BottomTabBar />
    </NavigationContainer>
  );
};

export default App;
