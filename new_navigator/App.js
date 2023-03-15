import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';

// https://reactnavigation.org/docs/drawer-navigator/

const Drawer = createDrawerNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="First" component={FirstScreen} />
        <Drawer.Screen name="Second" component={SecondScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}