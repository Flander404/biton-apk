import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState, useRef } from "react";
import { styled } from "styled-components";
import { LinearGradient } from "expo-linear-gradient";

import MapViewDirections from "react-native-maps-directions";
import MapView from 'react-native-yandex-maps';

const HomeView = styled.View`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const HomeNav = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  flex-direction: row;
`;
const HomeNavIMG = styled.Image`
  width: 109px;
  height: 29.901px;
  margin-left: 30px;
`;
const HomeNavView = styled.View`
  width: 60px;

  justify-content: center;
  align-items: center;
  height: 31px;
  border-radius: 40px;
  flex-direction: row;
  display: flex;
`;
const HomeNavView2 = styled.View`
  width: 19.167px;
  height: 19.167px;
  fill: #fff;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 20px;
  filter: drop-shadow(
    0px 3.066666603088379px 3.066666603088379px rgba(0, 0, 0, 0.25)
  );
`;
const HomeNavView2TEXT = styled.Text`
  color: #595959;
  text-align: center;

  font-size: 13.8px;
  font-weight: 600;
`;
const HomeMap = styled.View`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
`;

const Home = () => {
  const [state, setState] = useState({
    pickupCords: {
      latitude: 41.3039,
      longitude: 69.2587,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    droplocationCords: {
      latitude: 41.3119,
      longitude: 69.2401,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  });
  const GOOGLE_MAPS_APIKEY = "05d56965-a920-4a75-874e-1ae3226f0126";

  const mapRef = useRef();
  const { pickupCords, droplocationCords } = state;

  return (
    <HomeView>
      <HomeNav>
        <HomeNavIMG source={require("../image/Слой_x0020_11.png")} />
        <HomeNavView>
          <LinearGradient
            // Background Linear Gradient
            colors={["rgba(0,0,0,0.8)", "transparent"]}
          />
          <LinearGradient
            // Button Linear Gradient
            colors={["#080808", "#707070"]}
            style={{
              width: "100%",
              paddingLeft: 5,
              paddingRight: 5,
              borderRadius: 40,
              height: "100%",
              alignItems: "center",
              justifyContent: "space-around",
              flexDirection: "row",
              marginLeft: -30,
              justifyContent: "space-between",
            }}
          >
            <HomeNavView2>
              <HomeNavView2TEXT>B</HomeNavView2TEXT>
            </HomeNavView2>
            <Text>120</Text>
          </LinearGradient>
        </HomeNavView>
      </HomeNav>
      <HomeMap>
        {/* <MapView
        ref={mapRef}
          style={{ width: "100%", height: 500 }}
          initialRegion={pickupCords}
        >
          <Marker coordinate={pickupCords}/>
          <Marker coordinate={droplocationCords}/>
          <MapViewDirections
            origin={pickupCords}
            destination={droplocationCords}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColor="hotpink"
            optimizeWaypoints={true}
            onReady={result => {
              mapRef.current.fitToCoordinates(result.coordinates,{
                edgePadding:{
                  right: 30,
                  bottom:300,
                  left:30,
                  top:100
                }
              })
            }}
          />
        </MapView> */}
       <MapView
      style={{ width: "100%", height: 500 }}
      userLocationTrackingMode={true}
      showMyLocationButton={true}
      initialRegion={{
        latitude: 55.753215,
        longitude: 37.622504,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      onRegionChangeComplete={(region) => console.log(region)}
      onPress={(event) => console.log(event.nativeEvent)}
    />
      </HomeMap>
    </HomeView>
    
  );
};
<application>
  ...
  <meta-data
    android:name="com.yandex.maps.v3.API_KEY"
    android:value="YOUR_API_KEY_HERE" />
</application>

export default Home;
