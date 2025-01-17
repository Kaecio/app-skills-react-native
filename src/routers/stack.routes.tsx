import {createStackNavigator} from '@react-navigation/stack';
import Home  from '../screen/Home/Home';
import Skills from '../screen/Skills/Skills';

const {Screen, Navigator} = createStackNavigator();

import { View, Text } from 'react-native'
import React from 'react'

export default function StackRoutes() {
  return (
    <Navigator>
      <Screen name="Home" component={Home} />
      <Screen name="Skills" component={Skills} />
    </Navigator>
  );
}