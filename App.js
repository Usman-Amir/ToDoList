import React, { Component } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  ScrollView,
  Text,
  FlatList,
  AsyncStorage
} from "react-native";
import {Button} from "react-native-elements";
import { TextButton, RaisedTextButton } from 'react-native-material-buttons';


export default class App extends Component {
  constructor(props) {
    super(props);

    let myList = [{ title: "Title Text", key: "item1" }];

    this.state = {
      username: "",
      password: "",
      myData: [{ key: 1, value: "usman" }]
    };
  }

  _handlePress() {
    AsyncStorage.setItem(("testitem").toString(), this.state.mytest);
    this.setState({
      myData: [
        
        ...this.state.myData,
        { key: this.state.myData.length + 1, value: this.state.mytest }
      ]
    });

    Promise.all(AsyncStorage.getItem("testitem")
  .then(k=> console.log(k)));

  //   Promise.all(AsyncStorage.getAllKeys()
  // .then(ks=>ks.map(
  //   k=>
  //  console.log( AsyncStorage.getItem(k))
  // )))


//     AsyncStorage.getItem("testitem").then((asd) => {
//       alert(asd); // you will need use the alert in here because this is the point in the execution which you receive the value from getItem.
//     // you could do your authentication and routing logic here but I suggest that you place them in another function and just pass the function as seen in the example below.
// });
  }

  render() {
    return (
      <View style={styles.container}>
      <RaisedTextButton title='touch me' />
       <TextInput
          onChangeText={val =>
            this.setState({
              mytest: val
            })}
          style={{ height:50, backgroundColor:'grey' }}
        />
          <Button
          onPress={() => this._handlePress()}
          Text="Press Me"
          title="To Do"
          style={{ height:20 }}
        />
        <FlatList
          data={this.state.myData}
          renderItem={({ item }) => <Text>{item.value} </Text>}
          style={{
            height:300,
            backgroundColor: 'powderblue'
          }}
        />
       
      
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    
  },
  welcome: {
    fontSize: 12,
  },
  instructions: {
    color: "#333333"
  }
});
