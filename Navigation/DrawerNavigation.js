import * as React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {DrawerActions} from '@react-navigation/native';
import Feather from "react-native-vector-icons/Feather";
import {Pressable} from 'react-native'


//import Feed from '../Components/Common/Feed'
import Home from "../Screens/Home";
import Notifications from '../Components/Common/Notifications';



const defaultOptions =({})=>({
  //Show sandwith-menu icon at the right
  headerLeft: () => {
        return (
          <>
            <Pressable onPress={() => DrawerActions.openDrawer()}>
              <Feather
                name={"menu"}
                size={32}
                color={"#000"}
                style={{ marginRight: 10 }}
              />
            </Pressable>
          </>
        );
      },
   //Hide the left icon menu
   //headerLeftContainerStyle: { display: "none" },
      headerLeftContainerStyle: {
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "row",
        alignItems: "center",
        marginRight: 10,
      },
      //Hide the left menu Title
      headerTitleStyle: {
        display: "none",
      },
      headerShown: false,
      drawerPosition: "left",
  })





const CustomDrawerContent =(props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

const HomeDrawerNavigator = () => {
  return (
    <Drawer.Navigator
        screenOptions={defaultOptions}
        useLegacyImplementation
        drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen 
        name="Home"
        options={{
          title: "Home",
          drawerIcon: ({ color, size, focuced }) => (
            <Feather
              name={focuced ? "menu" : "menu"}
              size={size}
              color={color}
            />
          ),
        }}
          component={Home} 
        />
      <Drawer.Screen 
        name="Notifications"
        options={{
          title: "Home",
          drawerIcon: ({ color, size, focuced }) => (
            <Feather
              name={focuced ? "bell" : "bell"}
              size={size}
              color={color}
            />
          ),
        }}
        component={Notifications} />
    </Drawer.Navigator>
  );
}

export default HomeDrawerNavigator;
