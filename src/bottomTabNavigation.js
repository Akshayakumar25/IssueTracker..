import React from 'react';
import {View,Text,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome';
import 'react-native-gesture-handler';
import HomeScreen from './HomeScreen';
import AdminScreen from './AdminScreen';
import IssueListScreen from './IssueListScreen';
import MyProfileScreen from './MyProfileScreen';


const stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const bottomTabNavigation = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator screenOptions={{
        headerShown:false,
        tabBarStyle:{backgroundColor:'#f76420'},
        tabBarInactiveTintColor:'#b0adac',
        tabBarActiveTintColor:'black'
      }}>
        <Tab.Screen name='Home' component={HomeScreen} options={{
          tabBarIcon:({color,size})=>{
            <Ionicons name={"download"} color={"#4287f5"} size={50}/>
          }  
        }}/>
        <Tab.Screen name='Member' component={AdminScreen} options={{
          tabBarIcon:({color,size})=>{
            <Ionicons name={"download"} color={color} size={size}/>
          }
        }} />
        <Tab.Screen name='Issue' component={IssueListScreen} options={{
          tabBarIcon:({color,size})=>{
            <Ionicons name="download" color={'black'} size={16}/>
          }
        }}/>
        <Tab.Screen name='Profile' component={MyProfileScreen} options={{
          tabBarIcon:({color,size})=>{
            <Ionicons name="download" color={color} size={size}/>
          }
        }}/>
  
      </Tab.Navigator>
    </NavigationContainer>
  )
}
export default bottomTabNavigation;