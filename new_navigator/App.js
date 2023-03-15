import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// https://reactnavigation.org/docs/drawer-navigator/

// @react-navigation/native
// npm install @react-navigation/drawer
// npm install @react-navigation/bottom-tabs

// https://icons.expo.fyi/

// const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

export default function App() {
   {/*</Drawer>*/}
  return (
    <NavigationContainer>
      <BottomTab.Navigator screenOptions={{
        headerStyle: {backgroundColor: '#445566'},
        headerTintColor: 'white'
      }}>
        <BottomTab.Screen name="First" component={FirstScreen} options={{
          tabBarIcon: ({color, size}) => (<Ionicons name="ios-radio-sharp" color={color} size={size} />)
        }}/>
        <BottomTab.Screen name="Second" component={SecondScreen} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}