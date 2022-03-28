
import React from 'react';
import {View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/LoginScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import bottomTabNavigation from './src/bottomTabNavigation'
import { useAppContext,appProvider } from './src/context/appContext';

const stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const App = () => {
  // const [isSignedIn]=useState(true)
  const token = useAppContext();
  console.log("output",token)
  return (
    <appProvider>
      <NavigationContainer>
      <stack.Navigator>
        {
          token ? <stack.Screen
          name='LoginScreen'
          component={LoginScreen} 
          options={{header: () => null}}
          />:
          <stack.Screen
          name='bottomTabNavigation'
          component={bottomTabNavigation} 
          options={{header: () => null}}
          />
        }
      </stack.Navigator>
    </NavigationContainer>
    </appProvider>

  )
}
export default App;





































// import React from 'react';
// import { Text, View ,TouchableOpacity,Linking, Button } from 'react-native';

// const App = () => {

//   const handleButton1 = async() =>{
//     // Linking.canOpenURL('myclnq://openapp').then(supported => {
//     //   console.log('szdawdfsfdszd', supported);
//     // })
//     await Linking.openURL('myclnq://')

//    // Linking.openURL('whatsapp://app')
//   }

//   const handleButton2 = async() =>{
//     await Linking.openURL('intent://register/Saran/kumar/sarandhanush@synclovis.com/9626653709/#Intent;scheme=myclnq;package=com.ssivixlab.MYCLNQ;end')
//   }


//   return (
//     <View style={{alignItems:'center',flex:1,justifyContent: "center",}}>
//       <Button
//         title="Link 1"
//         onPress={() =>  handleButton1()}
//       />
//       <Text></Text>
//       <Button
//         title="Link 2"
//         onPress={() =>()=>handleButton2()}
//       />
//     </View>
//   )
// }
// export default App;




















