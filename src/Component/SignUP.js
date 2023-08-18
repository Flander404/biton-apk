import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { styled } from "styled-components";
import { ScrollView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import SignupMain from "./SignupMain";

const SignUP = styled.View`
  width: 100%;
  padding-top: 10px;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SignUPImage = styled.Image`
  width: 100%;
  height: 220px;
  position: absolute;
  top: 0px;
`;
const SignUPButton = styled.View`
  width: 345px;
  height: 48px;
  border-radius: 12px;
  background: linear-gradient(153deg, #202020 0%, #505050 100%);
  justify-content: center;
  align-items: center;
  display: flex;
`;
const SignUPButton2 = styled.View`
  width: 345px;
  height: 48px;
  border-radius: 12px;
  background: #ececec;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  display: flex;
`;
const SignUPText = styled.Text`
  color: #000;
  font-size: 14px;
  font-weight: 700;
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
  bottom: -100px;
`;
const SignUPTextDowntext = styled.Text`
  color: #000;
  text-align: center;

  font-size: 14px;
  font-weight: 700;
`;
const SignUPTitle = styled.Text`
  color: #000;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
  margin-top: 60px;
`;


export default function Login() {
  const [buttonColors, setButtonColors] = useState([
    "#ECECEC",
    "#ECECEC",
    "#ECECEC",
  ]);
  const [buttonTextColor, setButtonTextColor] = useState([
    "#000",
    "#000",
    "#000",
  ]);

  const Stack = createStackNavigator();
  
  const SignUPMain = () => {
    const navigation = useNavigation();
    return (
      <SignUP>
        <SignUPImage source={require("../image/Group507.png")} />
        <SignUPTitle>Регистрация</SignUPTitle>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: buttonColors[0] }]}
          onPress={() => {
            const newColors = ["white", "#ECECEC", "#ECECEC"];
            newColors[0] = buttonColors[0] === "black" ? "white" : "black";
            setButtonColors(newColors);
            const newTextColors = ["white", "#000", "#000"];
            newTextColors[0] = buttonTextColor[0] === "black" ? "#000" : "#FFF";
            setButtonTextColor(newTextColors);
          }}
        >
          <Text style={[styles.text, { color: buttonTextColor[0] }]}>
            Физическое лицо
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: buttonColors[1] }]}
          onPress={() => {
            const newColors = ["#ECECEC", "white", "#ECECEC"];
            newColors[1] = buttonColors[1] === "black" ? "white" : "black";
            setButtonColors(newColors);
            const newTextColors = ["#000", "white", "#000"];
            newTextColors[1] = buttonTextColor[1] === "black" ? "#000" : "#FFF";
            setButtonTextColor(newTextColors);
          }}
        >
          <Text style={[styles.text, { color: buttonTextColor[1] }]}>
            Организация
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: buttonColors[2] }]}
          onPress={() => {
            const newColors = ["#ECECEC", "#ECECEC", "white"];
            newColors[2] = buttonColors[2] === "black" ? "white" : "black";
            setButtonColors(newColors);
            const newTextColors = ["#000", "#000", "white"];
            newTextColors[2] = buttonTextColor[2] === "black" ? "#000" : "#FFF";
            setButtonTextColor(newTextColors);
          }}
        >
          <Text style={[styles.text, { color: buttonTextColor[2] }]}>
            Водитель
          </Text>
        </TouchableOpacity>
        <SignUPTextDown>
          <AntDesign
            onPress={() => navigation.navigate("SignupMain")}
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
      </SignUP>
    );
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignUp"
        options={{ headerShown: false }}
        component={SignUPMain}
      />
      <Stack.Screen
        name="SignupMain"
        options={{ headerShown: false }}
        component={SignupMain}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 345,
    height: 48,
    marginTop: 10,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundGradient: "vertical",
    backgroundGradientTop: "#333333",
    backgroundGradientBottom: "#666666",
  },
  text: {
    color: "#000 !important",
    fontSize: 14,
    fontWeight: "700",
  },
});
