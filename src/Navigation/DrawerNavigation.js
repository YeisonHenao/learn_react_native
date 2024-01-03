import * as React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Feather from "react-native-vector-icons/Feather";
import Home from "../Screens/Home/Home";

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
        screenOptions={{headerShown:false}}
        useLegacyImplementation
        drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen 
        name="Home"
        options={{
          title: "Home",
          drawerIcon: ({ color, size, focused }) => (
            <Feather
              name={focused ? "menu" : "menu"}
              size={size}
              color={color}
            />
          ),
        }}
          component={Home} 
        />
    </Drawer.Navigator>
  );
}

export default HomeDrawerNavigator;
