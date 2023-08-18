import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { styled } from "styled-components";
import { ScrollView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { AntDesign } from "@expo/vector-icons";
import Navigation from "../Navigation";
import { createStackNavigator } from "@react-navigation/stack";
import SignUP from "./SignUP";
import SignIN from "./SignIN";
import { useNavigation } from "@react-navigation/native";
const Post = styled.View`
  width: 100%;
  padding-top: 10px;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PostImage = styled.Image`
  width: 100%;
  height: 220px;
  position: absolute;
  top: 0px;
`;
const PostButton = styled.View`
  width: 345px;
  height: 48px;
  border-radius: 12px;
  background: #ffcb13;
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
`;
const PostButton2 = styled.View`
  width: 345px;
  height: 48px;
  border-radius: 12px;
  border: 2px solid #000;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  display: flex;
`;
const PostText = styled.Text`
  color: #000;
  font-size: 14px;
  font-weight: 700;
`;
const PostTextDown = styled.Text`
  color: #aeaeae;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #aeaeae;
  position: absolute;
  bottom: 60px;
`;

const Stack = createStackNavigator();

const LoginPage = () => {
  const navigation = useNavigation();
  return (
    <Post>
      <PostImage source={require("../image/Group507.png")} />
      <PostButton>
        <AntDesign
          onPress={() => navigation.navigate("SignUp")}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            opacity: 0,
          }}
          name="link"
          size={60}
          color="black"
        />
        <PostText>Зарегистрироваться</PostText>
      </PostButton>

      <PostButton2>
          <AntDesign
            onPress={() => navigation.navigate("SignIN")}
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              opacity: 0,
            }}
            name="link"
            size={24}
            color="black"
          />
        <PostText>
          Войти
        </PostText>
      </PostButton2>
      <PostTextDown>Условия</PostTextDown>
    </Post>
  );
};

export default function Login() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        options={{ headerShown: false }}
        component={LoginPage}
      />
      <Stack.Screen
        name="SignUp"
        options={{ headerShown: false }}
        component={SignUP}
      />
      <Stack.Screen
        name="SignIN"
        options={{ headerShown: false }}
        component={SignIN}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
