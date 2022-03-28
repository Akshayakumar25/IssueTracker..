import React, {useState,useContext} from 'react';
import { Text, View,TouchableOpacity,TextInput,TouchableHighlight,Alert} from 'react-native';
import { NavigationContainer ,useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import firestore from '@react-native-firebase/firestore';
import LoginScreen from '../src/LoginScreen';
import RegisterScreenStyles from '../Styles/RegisterScreenStyles';
import Toast from 'react-native-simple-toast';
import auth from '@react-native-firebase/auth';
import appContext from '../src/context/appContext';
import allStrings from '../string/allString';

const Register = (props) => {
  const navigation = useNavigation();
  const handleOnPressLogin = () => {
    props.navigation.navigate('LoginScreen');
  };

  const[name,setName]=useState('');
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');
  const[emailError,setEmailError]=useState('');
  const[emailState,setEmailState]=useState(false);
  const[nameState,setNameState]=useState(false);
  const[nameError,setnameError]=useState('');
  const[checkPassword,setCheckPassword]=useState(false);
  const[passwordError,setPasswordError]=useState('')
  const[isSignedIn,setIsSignedIn]=useContext(appContext);
  const[state,setState]=useState(true)


  
  const handleAllFunction = () =>{
    emailValidation();
    nameValidation();
    passwordValidation();
    handleAuthentication();
    toastMessage();
  }

  const emailValidation = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email) === true){
      setEmailError("Email is valid");
      setEmailState(true);
    }
      else{
        setEmailError("Email is incorrect");
        setEmailState(false)
      }
  }

  const nameValidation = () =>{
    var regName = /^[a-zA-Z]+$/;
    if(regName.test(name) == true){
      setnameError('Name is Valid');
      setNameState(true);
    }else{
      setnameError('Not a Valid name given.');
    }
  }

  const passwordValidation = () =>{
    if(password.length >= 6){
      setPasswordError('Password is Valid');
      setCheckPassword(true);
    }else{
      setPasswordError("Password should be min 6 char and max 10 char");
    }
 }

  const handleAuthentication = async() =>{
    try {
      const isUserCreated = await auth().createUserWithEmailAndPassword(email,password);
      console.log("data",isUserCreated);
      setIsSignedIn(false);
      userData();
    } catch (error) {
      console.log(error)
    }
  }

  
  const userData = () => {
    firestore()
    .collection('userData')
    .add({userName:name,userEmail:email})
  }

  const toastMessage = () =>{
    Toast.show("You are successfully registered")
  }


    
  return (
    <View>
    <View style={RegisterScreenStyles.alignview}>
      <Text style={RegisterScreenStyles.welcometext}>{allStrings.inputPlaceholder.welcomeText}</Text>
      <View style={RegisterScreenStyles.textInput}>
        <TextInput 
            placeholder='Name'
            value={name}
            onChangeText={(value) => setName(value)}>
        </TextInput>
      </View>
      <Text>{nameError}</Text>
      <View style={RegisterScreenStyles.textInput}>
        <TextInput 
            placeholder='Email'
            value={email} 
            autoCapitalize='none'
            onChangeText={value => setEmail(value)}>
        </TextInput>
      </View>
      <Text>{emailError}</Text>
      <View style={RegisterScreenStyles.textInput}>
        <TextInput 
             placeholder='Password'
             maxLength={10}
             value={password}
             onChangeText={value => setPassword(value)}
             secureTextEntry={true}>
        </TextInput>
      </View>  
      <Text>{passwordError}</Text>
    </View>
    <View style={RegisterScreenStyles.view}>
      <TouchableHighlight
          style={RegisterScreenStyles.submit}
          onPress={handleAllFunction}>
          <Text style={RegisterScreenStyles.submitText}>{allStrings.inputPlaceholder.registerText}</Text>
      </TouchableHighlight>
    </View>
    <View>
      <Text style={RegisterScreenStyles.alreadyText}>{allStrings.inputPlaceholder.alreadyText}</Text>
    </View>
    <View>
      <TouchableOpacity  onPress={()=>handleOnPressLogin()}>
        <Text style={RegisterScreenStyles.text}>{allStrings.inputPlaceholder.loginText}</Text>
      </TouchableOpacity>
    </View>
</View>

  );
};


const RegisterScreen = () => {
  const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator>
          <Stack.Screen name="Register" component={Register}  options={{header: () => null}}/>
          <Stack.Screen name="LoginScreen" component={LoginScreen} options={{header: () => null}} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

export default RegisterScreen;



