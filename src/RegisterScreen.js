import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, TouchableHighlight, Alert } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import firestore from '@react-native-firebase/firestore';
import LoginScreen from '../src/LoginScreen';
import RegisterScreenStyles from '../Styles/RegisterScreenStyles';
import Toast from 'react-native-simple-toast';
import auth from '@react-native-firebase/auth';
// import appContext from '../src/context/appContext';
import allStrings from '../string/allString';
import { useAppContext, useAppContextUpate } from '../appContext';
import { Picker } from '@react-native-picker/picker';

const Register = (props) => {
  const navigation = useNavigation();
  const handleOnPressLogin = () => {
    props.navigation.navigate('LoginScreen');
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nameError, setnameError] = useState('');
  const [passwordError, setPasswordError] = useState('')
  const update = useAppContextUpate();
  const token = useAppContext();
  const [pickerValue, setPickerValue] = useState('')



  const handleAllFunction = () => {
    if (email && name && password && pickerValue) {
      try {
        emailValidation();
        nameValidation();
        passwordValidation();
        handleAuthentication();
        toastMessage();
      } catch (error) {
        console.log(error)
      }
    } else {
      Alert.alert("Please Enter All fields")
    }

  }

  const emailValidation = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email) === true) {
      setEmailError("Email is valid");
    }
    else {
      setEmailError("Email is incorrect");
    }
  }

  const nameValidation = () => {
    var regName = /^[a-zA-Z]+$/;
    if (regName.test(name) == true) {
      setnameError('Name is Valid');
    } else {
      setnameError('Not a Valid name given.');
    }
  }

  const passwordValidation = () => {
    if (password.length >= 6) {
      setPasswordError('Password is Valid');
    } else {
      setPasswordError("Password should be min 6 char and max 10 char");
    }
  }

  const handleAuthentication = async () => {
    try {
      const isUserCreated = await auth().createUserWithEmailAndPassword(email, password);
      update(false)
      console.log("data", isUserCreated, token);
      userData();
    } catch (error) {
      console.log("{{}}", error.code)
      ToastMessage2(error.code)
    }
  }

  const userData = () => {
    const user = firestore().collection('userData').add({ userName: name, userEmail: email, role: pickerValue })
  }

  const toastMessage = () => {
    Toast.show("You are successfully registered")
  }

  const ToastMessage2 = (msg) => {
    Toast.show(msg);
  }



  return (
    <View>
      <View style={RegisterScreenStyles.alignview}>
        <Text style={RegisterScreenStyles.welcometext}>{allStrings.inputPlaceholder.welcomeText}</Text>
        <View style={RegisterScreenStyles.textInput}>
          <TextInput
            placeholder={allStrings.inputPlaceholder.name}
            value={name}
            onChangeText={(value) => setName(value)}>
          </TextInput>
        </View>
        <Text>{nameError}</Text>
        <View style={RegisterScreenStyles.textInput}>
          <TextInput
            placeholder={allStrings.inputPlaceholder.emailText}
            value={email}
            autoCapitalize='none'
            onChangeText={value => setEmail(value)}>
          </TextInput>
        </View>
        <Text>{emailError}</Text>
        <View style={RegisterScreenStyles.textInput}>
          <TextInput
            placeholder={allStrings.inputPlaceholder.password}
            maxLength={10}
            value={password}
            onChangeText={value => setPassword(value)}
            secureTextEntry={true}>
          </TextInput>
        </View>
        <Text>{passwordError}</Text>
      </View>
      <View style={RegisterScreenStyles.picker}>
        <Picker selectedValue={pickerValue} style={RegisterScreenStyles.textInput}
          onValueChange={(itemValue) => setPickerValue(itemValue)}>
          <Picker.Item label="Select your Role" />
          <Picker.Item label="User" value="User" />
          <Picker.Item label="Tester" value="Tester" />
          <Picker.Item label="Admin" value="Admin" />
        </Picker>
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
        <TouchableOpacity onPress={() => handleOnPressLogin()}>
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
        <Stack.Screen name="Register" component={Register} options={{ header: () => null }} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ header: () => null }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RegisterScreen;



