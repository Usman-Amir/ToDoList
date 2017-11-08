import React, { Component } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  ScrollView,
  Text,
  Button,
  FlatList
} from "react-native";

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
    this.setState({
      myData: [
        ...this.state.myData,
        { key: this.state.myData.length + 1, value: this.state.mytest }
      ]
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.myData}
          renderItem={({ item }) => <Text>title={item.value} </Text>}
          style={{
            flex: 80
          }}
        />
        <TextInput
          onChangeText={val =>
            this.setState({
              mytest: val
            })}
          style={{ flex: 10, width: 100 }}
        />
        <Button
          onPress={() => this._handlePress()}
          Text="Press Me"
          title="Press"
          style={{ flex: 10 }}
        />
      </View>
    );
  }
}
function getList() {
  var listObj = { key: 1, value: this.mytest };
  return this.state.myData.push(listObj);
}
function getData(number) {
  var data = [];
  for (var i = 0; i < number; ++i) {
    var myObj = { key: i, value: this.mytest };
    data.push(myObj);
  }

  return data;
}

const styles = StyleSheet.create({
  container: {
    flex: 90,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
