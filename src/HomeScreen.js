// import React, { Component,useState } from "react";
// import { StyleSheet, Text, View, FlatList } from "react-native";
// import { SearchBar } from "react-native-elements";
// import HomeScreenStyles from "../Styles/HomeScreenStyles";

// const DATA = [
// {
// 	id: "1",
// 	title: "jyothi.menda@synclovis.com",
// },
// {
// 	id: "2",
// 	title: "sandeep.mishra@synclovis.com",
// },
// {
// 	id: "3",
// 	title: "saran.dhanush@synclovis.com",
// },
// {
// 	id: "4",
// 	title: "akshay.kumar@synclovis.com",
// },
// {
// 	id: "5",
// 	title: "shyam.prakash@synclovis.com",
// },
// {
// 	id: "6",
// 	title: "atif.equbal@synclovis.com",
// },
// {
// 	id: "7",
// 	title: "abdus.soyel@synclovis.com",
// },
// {
// 	id: "8",
// 	title: "sudhakar.reddy@synclovis.com",
// },
// {
// 	id: "9",
// 	title: "suraj.pandey@synclovis.com",
// },
// {
// 	id: "10",
// 	title: "anooj.krishnan@synclovis.com",
// },
// {
// 	id: "11",
// 	title: "sagar.acharya@synclovis.com",
// },
// ];

// const Item = ({ title }) => {
// return (
// 	<View style={HomeScreenStyles.item}>
// 	<Text>{title}</Text>
// 	</View>
// );
// };

// const renderItem = ({ item }) => <Item title={item.title} />;
// class HomeScreen extends Component {
// constructor(props) {
// 	super(props);
// 	this.state = {
// 	loading: false,
// 	data: DATA,
// 	error: null,
// 	searchValue: "",
// 	};
// 	this.arrayholder = DATA;
// }

// searchFunction = (text) => {
// 	const updatedData = this.arrayholder.filter((item) => {
// 	const item_data = `${item.title.toUpperCase()})`;
// 	const text_data = text.toUpperCase();
// 	return item_data.indexOf(text_data) > -1;
// 	});
// 	this.setState({ data: updatedData, searchValue: text });
// };

// render() {
// 	return (  
// 	<View style={HomeScreenStyles.container}>
// 		<SearchBar
// 		placeholder="Search Here..."
// 		lightTheme
// 		round
// 		value={this.state.searchValue}
// 		onChangeText={(text) => this.searchFunction(text)}
// 		autoCorrect={false}
// 		/>
// 		<FlatList
// 		data={this.state.data}
// 		renderItem={renderItem}
// 		keyExtractor={(item) => item.id}
// 		/>
// 	</View>
// 	);
// }
// }

  

// export default HomeScreen;


import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { FlatGrid } from 'react-native-super-grid';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import firestore from '@react-native-firebase/firestore';





const HomeScreen = () => {

  
  const [items, setItems] = React.useState([
    { name: 'TURQUOISE' },
    { name: 'EMERALD'},
    { name: 'PETER RIVER'},
    { name: 'AMETHYST'},
    { name: 'WET ASPHALT'},
    { name: 'GREEN SEA' }
  ]);

  return (
    <FlatGrid
      itemDimension={130}
      data={items}
      style={styles.gridView}
      spacing={10}
      renderItem={({ item }) => (
        <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemCode}>{item.code}</Text>
        </View>
      )}
    />
  );
}
export default HomeScreen;
const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius:hp(2),
    padding:hp(2),
    height: hp(20),
	borderWidth:hp(0.2),
    borderColor: "black",
	width:wp(45)
  },
  itemName: {
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});
