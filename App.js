import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  ScrollView,
  Text,
  Button,
  FlatList
} from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props)

    
    let myList=  [{title: 'Title Text', key: 'item1'}]
  
    this.state = {
      username: '',
      password: ''
      
    }
  }

  _handlePress() {
    var listObj = {"key": 1, "value":this.state.mytest}
    myData.push(listObj)
    this.setState({myData})
     
   
  }
  render() {
    return (
     

      <View style={styles.container}>

       <FlatList data={this.myList}
      renderItem={({item}) => <Text>{item.name}</Text>} />

<FlatList  
  data={this.state.myData}
  renderItem={({item}) => <Text>title={item.value} </Text>}
/>
       <TextInput
      onChangeText={(mytest) => this.setState({mytest})}
    />
<Button onPress={()=> this._handlePress()}
Text="Press Me" 
title="Press"/>

      </View>
    );
  }
}
function getList()
{
  var listObj = {"key": 1, "value":this.mytest}
  return this.state.myData.push(listObj)
}
function getData(number) {
  var data = [];
  for(var i=0; i<number; ++i)
  {
    var myObj = {"key":i,"value": this.mytest}
    data.push(myObj);
  }
  
  return data;
}
// function onPressLearnMore()
// {
//   let thistest = test
//   alert(thistest); 
// }
var myData=[{"key": 1, "value":"usman"}]
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
