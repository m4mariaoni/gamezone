import { createStackNavigator } from "react-navigation-stack";
import About from "../screens/about";
import React from "react";
import Header from "../shared/header";

const screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='About GameZone'  />,
      };
    },
  },
};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "#b7b6b6", height: 60 },
  },
});

export default AboutStack;
