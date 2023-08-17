import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Component/Home";
import Profile from "../Component/Profile";
import { View, Text } from "react-native";
import { styled } from "styled-components/native";

const Tab = createBottomTabNavigator();

const Post = styled.View`
  width: 100%;
  background-color: red;
`;

const Navigation = () => {
  return (
    <View>
      <Text>salom</Text>
    </View>
  );
};

export default Navigation;
