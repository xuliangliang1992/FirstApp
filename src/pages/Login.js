import React, { Component } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid
} from "react-native";
import styles from "../style/styles";
import Request from "../actions/FetchRequest";
export default class Login extends Component {
  //设置顶部导航栏的内容
  static navigationOptions = ({ navigation, screenProps }) => ({
    //左侧标题
    // headerTitle: "登录",
    title: "登录",
    //设置跳转页面左侧返回箭头后面的文字，默认是上一个页面的标题
    headerBackTitle: null,
    //顶部标题栏的样式
    headerStyle: styles.headerStyle,
    //顶部标题栏文字的样式
    headerTitleStyle: styles.headerTitleStyle,
    //导航栏显示模式
    headerMode: "screen"
  });

  _onPress() {
    
    if (!this.state.account || this.state.account == "") {
      ToastAndroid.show("请输入账号", ToastAndroid.SHORT);
      return;
    }
    if (!this.state.passord || this.state.passord == "") {
      ToastAndroid.show("请输入密码", ToastAndroid.SHORT);
      return;
    }

    let params = {
      account: this.state.account,
      password: this.state.passord,
    };

    Request.requestPost(
      "login",
      params,
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

  requestError(error) {}

  requestSuccess(responseData) {
    this.props.navigation.navigate("Home");
  }

  constructor(props) {
    super(props);
    this.state = {
      account: "",
      passord: ""
    };

    this._updateAccount = this._updateAccount.bind(this);
    this._updatePassword = this._updatePassword.bind(this);
    this._onPress = this._onPress.bind(this);
  }

  _updateAccount(text) {
    this.setState(state => {
      return {
        account: text
      };
    });
  }

  _updatePassword(text) {
    this.setState(state => {
      return {
        passord: text
      };
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={(style = styles.container)}>
        {/* <Text style={(style = styles.title)}>登录</Text> */}
        <View style={styles.formSelection}>
          <Text style={styles.formLabel}> 账号 </Text>
          <TextInput
            placeholder="请输入账号"
            underlineColorAndroid="transparent"
            placeholderTextColor={"#cccccc"}
            style={[styles.formTextInput, styles.formFeild]}
            onChangeText={text => {
              this._updateAccount(text);
            }}
          />
        </View>
        <View style={styles.formSelection}>
          <Text style={styles.formLabel}> 密码 </Text>
          <TextInput
            placeholder="请输入密码"
            underlineColorAndroid="transparent"
            placeholderTextColor={"#cccccc"}
            style={[styles.formTextInput, styles.formFeild]}
            onChangeText={text => {
              this._updatePassword(text);
            }}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}
          onPress={() => {
            // this._onPress();
            this.props.navigation.navigate("Home");
          }}
        >
          <Text style={styles.button_text}> 登录 </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
