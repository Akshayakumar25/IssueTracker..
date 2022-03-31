import React from 'react';
import App from './App';
import { AppProvider } from './appContext';

function SuperContainer() {

  return (
    <AppProvider>
      <App />
    </AppProvider>

  )
}
export default SuperContainer;































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




















