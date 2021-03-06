import React, {useState} from 'react';
import { Text, View,TouchableOpacity,TextInput,TouchableHighlight,Alert} from 'react-native';
import { NavigationContainer ,useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import allStrings from '../string/allString';
import RegisterScreen from './RegisterScreen';
import LoginScreenStyles from '../Styles/LoginScreenStyles';
import Toast from 'react-native-simple-toast';
import auth from '@react-native-firebase/auth';
import {useAppContextUpate} from '../appContext'


const Login = (props) => {
  const navigation = useNavigation();
  const handleOnPressRegister = () => {
    props.navigation.navigate('RegisterScreen');
  };

  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');
  const[messege,setMessege]=useState('');
  const update = useAppContextUpate()

  const handleLogin = async() =>{
        if(email && password){
          try {
            const data = await auth().signInWithEmailAndPassword(email,password);
            console.log("::::|||",data)
            if(data){
            update(false);
            console.log('User Loged In');
            ToastMessage();
          }
          } catch (error) {
            console.log(":: error ", error.code);
            ToastMessage2(error.code)
          }
        }else{
          Alert.alert("Enter All fields")
          
        }
  }
    
      const ToastMessage = () =>{
        Toast.show('You are successfully logged in');
      }
    
      const ToastMessage2 = (msg) =>{
        Toast.show(msg);
      }
    
    
  return (
    <View>
       <View style={LoginScreenStyles.alignText}>
         <Text style={LoginScreenStyles.welcometext}>{allStrings.inputPlaceholder.welcomeBack}</Text>
         <View style={LoginScreenStyles.textInput}>
           <TextInput 
               placeholder='Email'
               value={email}
               onChangeText={value => setEmail(value)}>
          </TextInput>
        </View>
        <Text style={{color:'red'}}></Text>
        <View style={LoginScreenStyles.textInput}>
          <TextInput 
              placeholder='Password'
              value={password}
              secureTextEntry={true}
              onChangeText={value => setPassword(value)}>
          </TextInput>
        </View>  
      </View>
      <View style={LoginScreenStyles.view}>
        <TouchableHighlight
            style={LoginScreenStyles.submit}
            underlayColor='#fff'
            onPress={handleLogin}>
            <Text style={LoginScreenStyles.submitText}>{allStrings.inputPlaceholder.loginText}</Text>
        </TouchableHighlight>
      </View>
      <Text>{messege}</Text>
      <View style={{alignSelf:'center'}}>
        <View>
           <Text style={LoginScreenStyles.usertext}>{allStrings.inputPlaceholder.newUser}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={()=>handleOnPressRegister()}>
            <Text style={LoginScreenStyles.text}>{allStrings.inputPlaceholder.registerText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};


const LoginScreen = () => {
  const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login}  options={{header: () => null}}/>
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{header: () => null}} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };


export default LoginScreen;















































































// import React,{useState} from 'react';
// import { Text, View,TouchableOpacity,TextInput,TouchableHighlight } from 'react-native';
// import LoginScreenStyles from '../Styles/LoginScreenStyles';
// import auth from '@react-native-firebase/auth';
// import Toast from 'react-native-simple-toast';
// import RegisterScreen from './RegisterScreen';
// import { NavigationContainer ,useNavigation} from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';



// const LoginScreen = () => {
  

//   const[email,setEmail] = useState('');
//   const[password,setPassword] = useState('');
//   const[messege,setMessege]=useState('');

  
//   const handleLogin = () =>{
//     try {
//       auth().signInWithEmailAndPassword(email,password);
//       console.log('User Loged In');
//       ToastMessage();
//     } catch (error) {
//       console.log(error);
//       ToastMessage2();
//     }
//   }

//   const ToastMessage = () =>{
//     Toast.show('You are successfully logged in');
//   }

//   const ToastMessage2 = () =>{
//     Toast.show('Please check Email and Password');
//   }

//   return (
//     <View>
//       <View style={LoginScreenStyles.alignText}>
//         <Text style={LoginScreenStyles.welcometext}>Welcome Back</Text>
//         <View style={LoginScreenStyles.textInput}>
//           <TextInput 
//                placeholder='Email'
//                value={email}
//                onChangeText={value => setEmail(value)}>
//           </TextInput>
//         </View>
//         <Text style={{color:'red'}}></Text>
//         <View style={LoginScreenStyles.textInput}>
//           <TextInput 
//               placeholder='Password'
//               value={password}
//               onChangeText={value => setPassword(value)}>
//           </TextInput>
//         </View>  
//       </View>
//       <View style={LoginScreenStyles.view}>
//         <TouchableHighlight
//             style={LoginScreenStyles.submit}
//             underlayColor='#fff'
//             onPress={handleLogin}>
//             <Text style={LoginScreenStyles.submitText}>Login</Text>
//         </TouchableHighlight>
//       </View>
//       <Text>{messege}</Text>
//       <View style={{alignSelf:'center'}}>
//         <View>
//            <Text style={LoginScreenStyles.usertext}>New User?</Text>
//         </View>
//         <View>
//           <TouchableOpacity onPress={()=>handleOnPressRegister()}>
//             <Text style={LoginScreenStyles.text}>Register</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default LoginScreen;



