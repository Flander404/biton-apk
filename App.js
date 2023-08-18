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
import Home from "./src/Component/Home";

export default function App() {
  const [loading, setLoading] = useState(false);
  useState(() => {
    setLoading(false);
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);
  return (
    <NavigationContainer independent={true}>
      <StatusBar barStyle={"light-content"}/>
      {loading == false ? (
        <Loading/>
      ) : (
        <Home />
      )}
    </NavigationContainer>
  );
}
