import styled from "styled-components/native";
import {
  Alert,
  Button,
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Navigation from "./src/Navigation";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import Loading from "./src/Navigation/Loading";
import Login from "./src/Component/Login";
import Main from "./src/Component/Main";

export default function App() {
  const [loading, setLoading] = useState(false);
  useState(() => {
    setLoading(false);
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);
  return (
    <NavigationContainer independent={true}>
      <StatusBar   translucent = {false} hidden={false}/>
      {loading == false ? (
        <Loading/>
      ) : (
        <Main />
      )}
    </NavigationContainer>
  );
}
