// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   Dimensions,
//   TouchableOpacity,
//   ScrollView,
// } from "react-native";
// import React, { useState, useRef, useEffect, useCallback } from "react";
// import { styled } from "styled-components";
// import { LinearGradient } from "expo-linear-gradient";
// import MapView, { Marker, Callout, Circle, Draggable } from "react-native-maps";
// import MapViewDirections from "react-native-maps-directions";
// import * as Location from "expo-location";
// import Login from "./Login";
// import { SimpleLineIcons } from "@expo/vector-icons";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { AntDesign } from "@expo/vector-icons";
// import BottomSheet, {
//   BottomSheetView,
// } from "@gorhom/bottom-sheet";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const Tab = createBottomTabNavigator();

// const HomeView = styled.View`
//   justify-content: center;
//   align-items: center;
//   display: flex;
//   background-color: #fff;
//   flex-direction: column;
//   width: 100%;
// `;
// const HomeNav = styled.View`
//   width: 100%;
//   justify-content: space-between;
//   align-items: center;
//   display: flex;
//   height: 80px;
//   position: relative;
//   z-index: 99999;
//   padding-top: 40px;
//   background-color: #f6f6f6;
//   padding-bottom: 10px;
//   flex-direction: row;
// `;
// const HomeNavIMG = styled.Image`
//   width: 109px;
//   height: 29.901px;
//   margin-left: 30px;
// `;
// const HomeNavView = styled.View`
//   width: 60px;

//   justify-content: center;
//   align-items: center;
//   height: 31px;
//   border-radius: 40px;
//   flex-direction: row;
//   display: flex;
// `;
// const HomeNavView2 = styled.View`
//   width: 19.167px;
//   height: 19.167px;
//   fill: #fff;
//   background-color: rgba(255, 255, 255, 1);
//   border-radius: 20px;
//   filter: drop-shadow(
//     0px 3.066666603088379px 3.066666603088379px rgba(0, 0, 0, 0.25)
//   );
// `;
// const HomeNavView2TEXT = styled.Text`
//   color: #595959;
//   text-align: center;

//   font-size: 13.8px;
//   font-weight: 600;
// `;
// const HomeMap = styled.View`
//   justify-content: center;
//   align-items: center;
//   display: flex;
//   width: 100%;
//   height: 400px;
//   position: relative;
//   top: -100px;
//   margin-top: 100px;
// `;
// const HomeMenu = styled.View`
//   justify-content: start;
//   flex-direction: column;
//   align-items: center;
//   display: flex;
//   width: 100%;
//   position: absolute;
//   bottom: 0px;
//   background-color: #f6f6f6;
//   z-index: 99999;
//   height: 300px;
//   flex-direction: column;
//   position: relative;
//   top: -100px;
//   border-radius: 23px 23px 0px 0px;
// `;
// const HomeMenuBTN = styled.View`
//   justify-content: center;
//   align-items: start;
//   display: flex;
//   padding-left: 20px;
//   width: 90%;

//   height: 40px;
//   border-radius: 9px;
//   background: #ececec;
// `;
// const HomeMenuDiv = styled.View`
//   justify-content: left;
//   align-items: start;
//   padding-left: 20px;

//   white-space: pre;

//   display: flex;
//   width: 100%;
//   padding-top: 20px;
//   height: 100px;
// `;
// const HomeMenuCard = styled.View`
//   justify-content: center;
//   align-items: center;
//   display: flex;
//   width: 103px;
//   height: 74px;
//   border-radius: 9px;
//   border: 1px solid #eee;
//   background: #fff;
// `;

// const window = Dimensions.get("window");
// console.log(window.height);
// const HomeDownMenu = () => {
  


//   const [openModal, setopenModal] = React.useState(false);
//   const [buttonColors, setButtonColors] = useState(["#EEE", "#EEE", "#EEE"]);
//   const [buttonTextColor, setButtonTextColor] = useState([
//     "#000",
//     "#000",
//     "#000",
//   ]);
//   useEffect(() => {
//     (async () => {
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== "granted") {
//         console.log("Permission to access location was denied");
//         return;
//       }

//       let location = await Location.getCurrentPositionAsync({});
//       setLocation(location);
//       console.log(location);
//       setPin({
//         latitude: location.coords.latitude,
//         longitude: location.coords.longitude,
//       });
//     })();
//   }, []);
//   const [location, setLocation] = useState(null);
//   const [errorMsg, setErrorMsg] = useState(null);
//   const [pin, setPin] = React.useState({
//     latitude: 0,
//     longitude: 0,
//   });
//   const [state, setState] = useState({
//     pickupCords: {
//       latitude: 41.292660476903826,
//       longitude: 69.36632562428713,
//       latitudeDelta: 0.0922,
//       longitudeDelta: 0.0421,
//     },
//     droplocationCords: {
//       latitude: 41.29309829375103,
//       longitude: 69.34164762496948,
//       latitudeDelta: 0.0922,
//       longitudeDelta: 0.0421,
//     },
//   });

//   const GOOGLE_MAPS_APIKEY = "AIzaSyB1Kok7KQe0YzwScTNjC7lHRSi7my056bk";

//   const mapRef = useRef();
//   const { pickupCords, droplocationCords } = state;

//   return (
//     <HomeView>
//       <HomeNav>
//         <HomeNavIMG source={require("../image/Слой_x0020_11.png")} />
//         <HomeNavView>
//           <LinearGradient
//             // Background Linear Gradient
//             colors={["rgba(0,0,0,0.8)", "transparent"]}
//           />
//           <LinearGradient
//             // Button Linear Gradient
//             colors={["#080808", "#707070"]}
//             style={{
//               width: "100%",
//               paddingLeft: 5,
//               paddingRight: 5,
//               borderRadius: 40,
//               height: "100%",
//               alignItems: "center",
//               justifyContent: "space-around",
//               flexDirection: "row",
//               marginLeft: -30,
//               justifyContent: "space-between",
//             }}
//           >
//             <HomeNavView2>
//               <HomeNavView2TEXT>B</HomeNavView2TEXT>
//             </HomeNavView2>
//             <Text style={{ color: "#FFF" }}>120</Text>
//           </LinearGradient>
//         </HomeNavView>
//       </HomeNav>
//       <HomeMap>
//         <MapView
//           ref={mapRef}
//           style={{
//             width: "100%",
//             height: "100%",
//           }}
//           initialRegion={pickupCords}
//           showsUserLocation={true}
//         >
//           <Marker
//             title="salom2"
//             description="salom-test"
//             coordinate={pin}
//             onDragStart={(e) => {
//               console.log("Drag Start", e.nativeEvent.coordinate);
//             }}
//             onDragEnd={(e) => {
//               console.log("Drag End", e.nativeEvent.coordinate);

//               setPin({
//                 latitude: e.nativeEvent.coordinate.latitude,
//                 longitude: e.nativeEvent.coordinate.longitude,
//               });
//             }}
//           />
//           <Circle
//             fillColor=""
//             strokeColor="rgba(255, 203, 19, 1)"
//             center={pin}
//             radius={1000}
//           />
//           <Marker
//             onDragStart={(e) => {
//               console.log("Drag Start", e.nativeEvent.coordinate);
//             }}
//             onDragEnd={(e) => {
//               console.log("Drag End", e.nativeEvent.coordinate);

//               setPin({
//                 latitude: e.nativeEvent.coordinate.latitude,
//                 longitude: e.nativeEvent.coordinate.longitude,
//               });
//             }}
//             draggable={true}
//             pinColor="red"
//             coordinate={droplocationCords}
//           />
//           <MapViewDirections
//             origin={pickupCords}
//             destination={pickupCords}
//             apikey={GOOGLE_MAPS_APIKEY}
//             strokeWidth={3}
//             strokeColor="hotpink"
//             optimizeWaypoints={true}
//             onReady={(result) => {
//               mapRef.current.fitToCoordinates(result.coordinates, {
//                 edgePadding: {
//                   right: 30,
//                   bottom: 300,
//                   left: 30,
//                   top: 100,
//                 },
//               });
//             }}
//           />
//         </MapView>
//       </HomeMap>
//       <HomeMenu>
//         <HomeMenuBTN style={{ marginTop: 20 }}>
//           <Text style={{ fontSize: 16, fontWeight: 500, color: "#000" }}>
//             Куда
//           </Text>
//           <AntDesign
//             style={{ position: "absolute", top: 8, right: 10 }}
//             name="right"
//             size={24}
//             color="black"
//           />
//           <AntDesign
//             style={{
//               position: "absolute",
//               opacity: 0,
//               top: 0,
//               right: 0,
//               width: "100%",
//               height: "100%",
//             }}
//             name="right"
//             size={24}
//             color="black"
//             onPress={() => {
//               alert("salom");
//             }}
//           />
//         </HomeMenuBTN>
//         <HomeMenuBTN style={{ marginTop: 10 }}>
//           <Text style={{ fontSize: 16, fontWeight: 500, color: "#000" }}>
//             Уточните время заказа
//           </Text>
//           <AntDesign
//             style={{ position: "absolute", top: 8, right: 10 }}
//             name="right"
//             size={24}
//             color="black"
//           />
//           <AntDesign
//             style={{
//               position: "absolute",
//               opacity: 0,
//               top: 0,
//               right: 0,
//               width: "100%",
//               height: "100%",
//             }}
//             name="right"
//             size={24}
//             color="black"
//             onPress={() => {
//               alert("salom");
//             }}
//           />
//         </HomeMenuBTN>
//         <HomeMenuDiv>
//           <ScrollView style={{ width: "100%" }} horizontal={true}>
//             <TouchableOpacity
//               style={[
//                 styles.button,
//                 {
//                   borderWidth: 1,
//                   marginRight: 10,
//                   borderRadius: 9,
//                   width: 105,
//                   height: 76,
//                   borderColor: buttonColors[0],
//                 },
//               ]}
//               onPress={() => {
//                 const newColors = ["white", "#ECECEC", "#ECECEC"];
//                 newColors[0] =
//                   buttonColors[0] === "#FFCB13" ? "white" : "#FFCB13";
//                 setButtonColors(newColors);

//                 const ayncFunc = async () => {
//                   const title = "Бетон";
//                   await AsyncStorage.setItem("title", title);
//                 };
//                 ayncFunc();
//               }}
//             >
//               <HomeMenuCard>
//                 <Image source={require("../image/m3501.png")} />
//                 <Text style={{ fontSize: 12, fontWeight: 500 }}>Бетон</Text>
//               </HomeMenuCard>
//             </TouchableOpacity>

//             <TouchableOpacity
//               style={[
//                 styles.button,
//                 {
//                   borderWidth: 1,
//                   marginRight: 10,
//                   borderRadius: 9,
//                   width: 105,
//                   height: 76,
//                   borderColor: buttonColors[1],
//                 },
//               ]}
//               onPress={() => {
//                 const newColors = ["#ECECEC", "white", "#ECECEC"];
//                 newColors[1] =
//                   buttonColors[1] === "#FFCB13" ? "white" : "#FFCB13";
//                 setButtonColors(newColors);

//                 const ayncFunc = async () => {
//                   const title = "Пескбетон";
//                   await AsyncStorage.setItem("title", title);
//                 };
//                 ayncFunc();
//               }}
//             >
//               <HomeMenuCard>
//                 <Image source={require("../image/cement1.png")} />
//                 <Text style={{ fontSize: 12, fontWeight: 500 }}>Пескбетон</Text>
//               </HomeMenuCard>
//             </TouchableOpacity>

//             <TouchableOpacity
//               style={[
//                 styles.button,
//                 {
//                   borderWidth: 1,
//                   marginRight: 10,
//                   borderRadius: 9,
//                   width: 105,
//                   height: 76,
//                   borderColor: buttonColors[2],
//                 },
//               ]}
//               onPress={() => {
//                 const newColors = ["#ECECEC", "#ECECEC", "white"];
//                 newColors[2] =
//                   buttonColors[2] === "#FFCB13" ? "white" : "#FFCB13";
//                 setButtonColors(newColors);

//                 const ayncFunc = async () => {
//                   const title = "Строительный бетон";
//                   await AsyncStorage.setItem("title", title);
//                 };
//                 ayncFunc();
//               }}
//             >
//               <HomeMenuCard>
//                 <Image
//                   source={require("../image/183973062b952e05464d21c9f08676f91.png")}
//                 />
//                 <Text
//                   style={{ fontSize: 12, fontWeight: 500, textAlign: "center" }}
//                 >
//                   Строительный бетон
//                 </Text>
//               </HomeMenuCard>
//             </TouchableOpacity>

//             <HomeMenuCard>
//               <LinearGradient
//                 // Background Linear Gradient
//                 colors={["rgba(0,0,0,0.8)", "transparent"]}
//               />
//               <LinearGradient
//                 // Button Linear Gradient
//                 colors={["#080808", "#707070"]}
//                 style={{
//                   width: "100%",
//                   paddingLeft: 5,
//                   paddingRight: 5,
//                   borderRadius: 9,
//                   height: "100%",
//                   alignItems: "center",
//                   justifyContent: "space-around",
//                   flexDirection: "row",

//                   justifyContent: "space-between",
//                 }}
//               >
//                 <Text
//                   style={{
//                     textAlign: "center",
//                     color: "#FFF",
//                     fontSize: 12,
//                     fontWeight: 500,
//                   }}
//                 >
//                   Стпециальный бетон
//                 </Text>
//               </LinearGradient>
//               <AntDesign
//                 style={{
//                   position: "absolute",
//                   opacity: 0,
//                   top: 0,
//                   right: 0,
//                   width: "100%",
//                   height: "100%",
//                 }}
//                 name="right"
//                 size={24}
//                 color="black"
//                 onPress={() => {
//                   downModal;
//                 }}
//               />
//             </HomeMenuCard>
//           </ScrollView>
//         </HomeMenuDiv>
//       </HomeMenu>
//     </HomeView>
//   );
// };

// const Home = () => {
//   return (
//     <Tab.Navigator
//       tabBarOptions={{
//         activeTintColor: "#E93333",
//         inactiveTintColor: "#939393",
//         labelStyle: {
//           fontSize: 16,
//           fontWeight: "bold",
//         },
//       }}
//       screenOptions={{
//         tabBarStyle: {
//           height: 62,
//           position: "absolute",
//           bottom: 21,
//           paddingBottom: 10,
//           right: 15,
//           left: 15,
//           borderRadius: 20,
//         },
//       }}
//     >
//       <Tab.Screen
//         style={{ paddingTop: 10 }}
//         options={{
//           tabBarLabelStyle: ({ focused }) =>
//             focused ? { color: "red" } : { color: "black" },
//           tabBarLabel: "Главная",
//           tabBarIcon: ({ focused }) =>
//             focused ? (
//               <SimpleLineIcons name="pin" size={24} color="#E93333" />
//             ) : (
//               <SimpleLineIcons name="pin" size={24} color="#939393" />
//             ),
//           headerShown: false,
//         }}
//         name="Home"
//         component={HomeDownMenu}
//       />
//     </Tab.Navigator>
//   );
// };

// const styles = StyleSheet.create({});

// export default Home;
