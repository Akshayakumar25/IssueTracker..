
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/LoginScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabNavigation from './src/BottomTabNavigation'
import { useAppContext } from './appContext';

const stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function App() {
  let token = useAppContext();
  console.log(":: output", token)
  return (
    <NavigationContainer>
      <stack.Navigator>
        {
          token ? <stack.Screen
            name='LoginScreen'
            component={LoginScreen}
            options={{ header: () => null }}
          /> :
            <stack.Screen
              name='BottomTabNavigation'
              component={BottomTabNavigation}
              options={{ header: () => null }}
            />
        }
      </stack.Navigator>
    </NavigationContainer>
  )
}
export default App;















































