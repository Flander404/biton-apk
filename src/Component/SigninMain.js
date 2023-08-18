import { StyleSheet, Text, TouchableOpacity, KeyboardAvoidingView, View, Keyboard } from "react-native";
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { ScrollView, TouchableWithoutFeedback } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import SignupMain from "./SignupMain";
import AsyncStorage from "@react-native-async-storage/async-storage";


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
  margin-top:-330px;
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
  bottom: -155px;
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

  margin-top: 60px;
`;
const SignUPMainINp = styled.TextInput`
  width: 90%;
  height: 50px;
  border-radius: 12px;
  border: 1px solid #e7e7e7;
  padding-left: 20px;
  margin-bottom: 10px;
`;
const SignUPMainText2 = styled.Text`
  color: #000;
  text-align: center;
  font-size: 14px;
  margin-bottom: 20px;
  font-weight: 500;
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
    const [state,setState] = useState("")
    const navigation = useNavigation();
    useEffect(() => {
      const getDatse = async () => {
        const naem = await AsyncStorage.getItem('name')
        setState(naem)
      }
      getDatse()
    }, [])
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SignUP>
          <SignUPImage source={require("../image/Group507.png")} />
            <SignUPTitle>Вход</SignUPTitle>
            <SignUPMainText2>{state}</SignUPMainText2>

            <SignUPMainINp placeholder="Телефон" />
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
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
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
