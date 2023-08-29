import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import { AntDesign } from "@expo/vector-icons";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const WhereView = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const WhereMap = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  z-index: -4;
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: red;
`;
const WhereNav = styled.View`
  width: 90%;
  margin-top: 15px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 9px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;
const WhereDown = styled.View`
width: 100%;
height: 91px;
display: flex;
background: #fff;
align-items: center;
justify-content: center;
flex-direction: column;
`;
const WhereNavLeft = styled.View`
  width: 60%;

  flex-shrink: 0;
  border-radius: 9px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: left;
  flex-direction: row;
  padding-left: 20px;
`;

const Where = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.getParent().setOptions({ tabBarStyle: { display: "none" } });
    return () => {
      navigation.getParent().setOptions({
        tabBarStyle: {
          display: "flex",
          height: 62,
          position: "absolute",
          bottom: 17,
          paddingBottom: 8,
          paddingTop: 8,
          right: 15,
          left: 15,
          borderRadius: 20,
        },
      });
    };
  }, []);
  const [state, setState] = useState({
    mapLocation: {
      latitude: 41.292660476903826,
      longitude: 69.36632562428713,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  });
  const onDone = () => {
    navigation.goBack();
  };
  const { mapLocation } = state;
  return (
    <WhereView>
      <WhereNav>
        <WhereNavLeft>
          <AntDesign
            style={{ color: "#AAA" }}
            name="left"
            size={24}
            color="black"
            onPress={onDone}
          />
          <GooglePlacesAutocomplete
            placeholder="Search"
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              console.log(data, details);
            }}
            query={{
              key: "AIzaSyBseAd4cJYXdgpW9-bopEq6LxHfaCBaV60",
              language: "en",
            }}
          />
        </WhereNavLeft>
      </WhereNav>
      <WhereMap>
        <MapView
          style={{
            width: "100%",
            height: "100%",
          }}
          initialRegion={mapLocation}
        >
          <Marker
            coordinate={mapLocation}
            title="salom2"
            description="salom-test"
            pinColor="red"
          />
        </MapView>
      </WhereMap>
    </WhereView>
  );
};

export default Where;
