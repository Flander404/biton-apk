import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Home from "./Home";
import { createStackNavigator } from "@react-navigation/stack";

const SignUPMain = styled.View`
  width: 100%;
  padding-top: 10px;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: left;
  align-items: center;
`;
const SignUPTextDown = styled.View`
  position: absolute;
  bottom: 60px;
  width: 134px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  flex-shrink: 0;
  border-radius: 12px;
  background: #ffcb13;
  position: fixed;
  bottom: -150px;
`;
const SignUPTextDowntext = styled.Text`
  color: #000;
  text-align: center;

  font-size: 14px;
  font-weight: 700;
`;
const SignUPMainNAV = styled.View`
  width: 100%;
  padding-top: 15px;
  padding-bottom: 20px;
  justify-content: left;
  align-items: start;
  display: flex;
`;
const SignUPMainIMG = styled.Image`
  width: 47px;
  height: 46px;
  margin-left: 20px;
`;

const SignUPMainTextView = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: -40px;
  display: flex;
  flex-direction: column;
`;
const SignUPMainText = styled.Text`
  color: #000;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
`;
const SignUPMainText2 = styled.Text`
  color: #000;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
`;
const SignUPMainINp = styled.TextInput`
  width: 90%;
  height: 50px;
  border-radius: 12px;
  border: 1px solid #e7e7e7;
  padding-left: 20px;
  margin-bottom: 10px;
`;
const Stack = createStackNavigator();

const SignUPMAIN = () => {
  const [state, setState] = useState("");
  const navigation = useNavigation();
  useEffect(() => {
    const getDatse = async () => {
      const naem = await AsyncStorage.getItem("name");
      setState(naem);
    };
    getDatse();
  }, []);
  return (
    <SignUPMain>
      <SignUPMainNAV>
        <SignUPMainIMG source={require("../image/Group508.png")} />
        <SignUPMainTextView>
          <SignUPMainText>Регистрация</SignUPMainText>
          <SignUPMainText2>{state}</SignUPMainText2>
        </SignUPMainTextView>
      </SignUPMainNAV>
      <SignUPMainINp style={{marginTop:20}} placeholder="Имя" />
      <SignUPMainINp placeholder="Фамилия" />
      <SignUPMainINp placeholder="Отчество" />
      <SignUPMainINp placeholder="Телефон" />
      <SignUPMainINp placeholder="Email" />
      <SignUPTextDown>
        <AntDesign
          onPress={() => navigation.navigate("Home")}
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
        <SignUPTextDowntext>Далее</SignUPTextDowntext>
      </SignUPTextDown>
    </SignUPMain>
  )
}
const SignupMain = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignUpMain"
        options={{ headerShown: false }}
        component={SignUPMAIN}
      />
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={Home}
      />
    </Stack.Navigator>
  );
};

export default SignupMain;
