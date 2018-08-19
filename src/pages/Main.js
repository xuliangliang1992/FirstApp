import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  FlatList,
  SectionList,
  ActivityIndicator
} from "react-native";
import { StackNavigator } from "react-navigation";
import styles from "../style/styles";
import Request from "../actions/FetchRequest";
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: ''
    };
    
    console.log('​Main -> constructor -> ', this.state.dataSource);
  }

  componentDidMount() {
    return Request.requestGet(
      "https://facebook.github.io/react-native/movies.json",
      // "www.doclever.cn:8090/mock/5b6aa3cc2235f12be2134ba6/getList",
      () => {
        console.log("请求发送中...");
      },
      responseData => {
        this.requestSuccess(responseData);
      },
      error => {
        this.requestError(error);
      }
    );
  }

  requestSuccess(responseData) {
    console.log(
      "​Main -> requestSuccess -> responseData.movies",
      responseData,
      responseData.movies
    );
    this.setState(
      {
        isLoading: false,
        dataSource: responseData.movies
      },
      function() {}
    );
  }

  requestError(error) {}

  render() {
    const { navigate } = this.props.navigation;
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    console.log(this.state.dataSource, this.state.isLoading);
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <Text style={styles.item}>
              {item.title},{item.releaseYear}
            </Text>
          )}
          keyExtractor={(item, index) => item.id}
        />
        {/* <SectionList
          sections={[
            { title: "D", data: ["Devin"] },
            {
              title: "J",
              data: [
                "Jackson",
                "James",
                "Jillian",
                "Jimmy",
                "Joel",
                "John",
                "Julie"
              ]
            }
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
          keyExtractor={(item, index) => index}
        />*/}
      </View>
    );
  }
}
