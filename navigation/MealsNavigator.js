import React from 'react'

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import { createBottomTabNavigator } from "react-navigation-tabs"
import { createDrawerNavigator } from "react-navigation-drawer";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavouritesScreen from "../screens/FavoritesScreen"
import FiltersScreen from "../screens/FiltersScreen"

import Colors from "../constants/Colors";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: {
      screen: CategoryMealsScreen,
      // navigationOptions:{
      //   headerStyle: {
      //     backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "white",
      //   },
      //   headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
      // }
    },
    // CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen,
  },
  {
    // initialRouteName: "MealDetail",
    // mode: "modal",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:
          Platform.OS === "android" ? Colors.primaryColor : "white",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
    },
  }
);

const FavNavigator = createStackNavigator(
  {
    Favourites: FavouritesScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:
          Platform.OS === "android" ? Colors.primaryColor : "white",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
    }
  }
)

const MealsFavTabNavigator = createBottomTabNavigator(
  {
    Meals:{
      screen: MealsNavigator,
      navigationOptions:{
        tabBarIcon: (tabInfo) => {
          return(
            <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
          )
        }
      }
    },
    Favourites:{
      screen: FavNavigator,
      navigationOptions:{
        tabBarIcon: (tabInfo) => {
          return(
            <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
          )
        }
      }
    }
  },
  {
    tabBarOptions:{
      activeTintColor: Colors.accentColor,
      style:{
        backgroundColor: "mintcream"
      }
    }
  }
)

const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:
          Platform.OS === "android" ? Colors.primaryColor : "white",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
    },
  }
)

const MainNavigator = createDrawerNavigator(
  {
    MealsFav: {
      screen: MealsFavTabNavigator,
      navigationOptions: { drawerLabel: "Meals" },
    },
    Filters: FiltersNavigator,
  },
  { contentOptions: { activeTintColor: Colors.accentColor } }
);

export default createAppContainer(MainNavigator);
