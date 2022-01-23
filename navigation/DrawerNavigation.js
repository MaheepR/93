import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from './TabNavigator';
import Logout from '../screens/Logout';

const drawer=createDrawerNavigator();

const DrawerNavigator=()=>{
    return(
        <drawer.Navigator>
            <drawer.Screen name='Home' component={BottomTabNavigator} />
            <drawer.Screen name='Logout' component={Logout}/>
        </drawer.Navigator>
    );
}

export default DrawerNavigator;