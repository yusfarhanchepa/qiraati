import React from "react";
import { Root } from "native-base";
// import { StackNavigator, DrawerNavigator } from "react-navigation";
import { createDrawerNavigator, createStackNavigator, createAppContainer } from "react-navigation";

//import Header from "./screens/Header/";
//import Header1 from "./screens/Header/1";
import Home from "./screens/home/";
 import SideBar from "./screens/sidebar";
import Pengumuman from "./screens/Pengumuman";
import TipsBacaanIqra from "./screens/TipsBacaanIqra/";
import VideoLibrary from "./screens/VideoLibrary/";
import Settings from "./screens/Settings/";

const Drawer = createDrawerNavigator(
  {
    Home: { screen: Home },
    Pengumuman: { screen: Pengumuman },
    TipsBacaanIqra: { screen: TipsBacaanIqra },
    VideoLibrary: { screen: VideoLibrary },
    Settings: { screen: Settings },
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

const AppNavigator = createStackNavigator(
  {
    Drawer: { screen: Drawer },
   // Header1: { screen: Header1 },
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default () =>
  <Root>
    <AppContainer />
  </Root>;
