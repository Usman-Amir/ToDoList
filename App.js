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
    let setlist = this.state.mytest;
     alert(setlist);
     alert(this.myList);
  }
  render() {
    return (
     

      <View style={styles.container}>
       <FlatList data={this.myList}
      renderItem={({item}) => <Text>{item.name}</Text>} />

<FlatList  
  data={getData(5)}
  renderItem={({item}) => <Text>title={item.title} </Text>}
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
function getData(number) {
  let data = [];
  for(var i=0; i<number; ++i)
  {
    data.push("" + i);
  }
  
  return data;
}
// function onPressLearnMore()
// {
//   let thistest = test
//   alert(thistest); 
// }

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
