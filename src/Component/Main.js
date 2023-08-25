import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { styled } from "styled-components";
import MapViewDirections from "react-native-maps-directions";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Modal from "react-native-modal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Where from "./Where";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

const Stack = createStackNavigator();

const HomeView = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const HomeMap = styled.View`
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
const HomeNav = styled.View`
  width: 100%;
  height: 60px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  background: #f6f6f6;
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
const HomeMenu = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  height: 274px;
  border-radius: 23px 23px 0px 0px;
  background: #f6f6f6;
`;
const HomeMenuBTN = styled.View`
  justify-content: center;
  align-items: start;
  display: flex;
  padding-left: 20px;
  width: 345px;

  height: 40px;
  border-radius: 9px;
  background: #ececec;
`;
const HomeMenuDiv = styled.View`
  justify-content: left;
  align-items: start;
  padding-left: 20px;

  display: flex;
  width: 100%;
  padding-top: 9px;
  height: 100px;
`;
const HomeMenuCard = styled.View`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 103px;
  height: 74px;
  border-radius: 9px;
  border: 1px solid #eee;
  background: #fff;
`;
const ModalView = styled.View`
  justify-content: left;
  align-items: start;
  padding-left: 10px;
  padding-top: 20px;

  display: flex;
  width: 100%;
`;
const ModalViewINP = styled.View`
  justify-content: center;
  align-items: start;
  padding-left: 10px;
  padding-top: 10px;

  display: flex;
  width: 100%;
`;
const ModalText = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: 600;
`;
const ModalInput = styled.TextInput`
  width: 98%;
  padding-left: 20px;
  height: 40px;
  border-radius: 9px;
  border: 1px solid #e0e0e0;
`;
const ModalTextArea = styled.TextInput`
  width: 98%;
  padding-left: 20px;
  height: 192px;
  padding-bottom: 150px;
  border-radius: 9px;
  border: 1px solid #e0e0e0;
`;
const ModalBTN = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  flex-shrink: 0;
  border-radius: 12px;
  margin-top: 10px;
  background: #ffcb13;
`;

const HomeCopy = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const [state, setState] = useState({
    mapLocation: {
      latitude: 41.292660476903826,
      longitude: 69.36632562428713,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },

  });
  const [buttonColors, setButtonColors] = useState(["#EEE", "#EEE", "#EEE"]);

  const { mapLocation } = state;
  const GOOGLE_MAPS_APIKEY = "AIzaSyDLjdqwxb2X7CrX3dVQ0w4MfLlEYUHM8p8";
  return (
    <HomeView>
      <HomeNav>
        <Image
          style={{ width: 109, height: 30 }}
          source={require("../image/Слой_x0020_11.png")}
        />
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
              justifyContent: "space-between",
            }}
          >
            <HomeNavView2>
              <HomeNavView2TEXT>B</HomeNavView2TEXT>
            </HomeNavView2>
            <Text style={{ color: "#FFF" }}>120</Text>
          </LinearGradient>
        </HomeNavView>
      </HomeNav>
      <HomeMap>
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
      </HomeMap>
      <HomeMenu>
        <HomeMenuBTN style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 16, fontWeight: 500, color: "#000" }}>
            Куда
          </Text>

          <AntDesign
            style={{ position: "absolute", top: 8, right: 10 }}
            name="right"
            size={24}
            color="black"
          />
          <AntDesign
            style={{
              position: "absolute",
              opacity: 0,
              top: 0,
              right: 0,
              width: "100%",
              height: "100%",
            }}
            name="right"
            size={24}
            color="black"
            onPress={() => navigation.navigate("Where")}
          />
        </HomeMenuBTN>
        <HomeMenuBTN style={{ marginTop: 4 }}>
          <Text style={{ fontSize: 16, fontWeight: 500, color: "#000" }}>
            Уточните время заказа
          </Text>
          <AntDesign
            style={{ position: "absolute", top: 8, right: 10 }}
            name="right"
            size={24}
            color="black"
          />
          <AntDesign
            style={{
              position: "absolute",
              opacity: 0,
              top: 0,
              right: 0,
              width: "100%",
              height: "100%",
            }}
            name="right"
            size={24}
            color="black"
            onPress={() => {
              alert("salom");
            }}
          />
        </HomeMenuBTN>
        <HomeMenuDiv>
          <ScrollView style={{ width: "98%" }} horizontal={true}>
            <TouchableOpacity
              style={[
                styles.button,
                {
                  borderWidth: 1,
                  marginRight: 10,
                  borderRadius: 9,
                  width: 105,
                  height: 76,
                  borderColor: buttonColors[0],
                },
              ]}
              onPress={() => {
                const newColors = ["white", "#ECECEC", "#ECECEC"];
                newColors[0] =
                  buttonColors[0] === "#FFCB13" ? "white" : "#FFCB13";
                setButtonColors(newColors);

                const ayncFunc = async () => {
                  const title = "Бетон";
                  await AsyncStorage.setItem("title", title);
                };
                ayncFunc();
              }}
            >
              <HomeMenuCard>
                <Image source={require("../image/m3501.png")} />
                <Text style={{ fontSize: 12, fontWeight: 500 }}>Бетон</Text>
              </HomeMenuCard>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.button,
                {
                  borderWidth: 1,
                  marginRight: 10,
                  borderRadius: 9,
                  width: 105,
                  height: 76,
                  borderColor: buttonColors[1],
                },
              ]}
              onPress={() => {
                const newColors = ["#ECECEC", "white", "#ECECEC"];
                newColors[1] =
                  buttonColors[1] === "#FFCB13" ? "white" : "#FFCB13";
                setButtonColors(newColors);

                const ayncFunc = async () => {
                  const title = "Пескбетон";
                  await AsyncStorage.setItem("title", title);
                };
                ayncFunc();
              }}
            >
              <HomeMenuCard>
                <Image source={require("../image/cement1.png")} />
                <Text style={{ fontSize: 12, fontWeight: 500 }}>Пескбетон</Text>
              </HomeMenuCard>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.button,
                {
                  borderWidth: 1,
                  marginRight: 10,
                  borderRadius: 9,
                  width: 105,
                  height: 76,
                  borderColor: buttonColors[2],
                },
              ]}
              onPress={() => {
                const newColors = ["#ECECEC", "#ECECEC", "white"];
                newColors[2] =
                  buttonColors[2] === "#FFCB13" ? "white" : "#FFCB13";
                setButtonColors(newColors);

                const ayncFunc = async () => {
                  const title = "Строительный бетон";
                  await AsyncStorage.setItem("title", title);
                };
                ayncFunc();
              }}
            >
              <HomeMenuCard>
                <Image
                  source={require("../image/183973062b952e05464d21c9f08676f91.png")}
                />
                <Text
                  style={{ fontSize: 12, fontWeight: 500, textAlign: "center" }}
                >
                  Строительный бетон
                </Text>
              </HomeMenuCard>
            </TouchableOpacity>

            <HomeMenuCard>
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
                  borderRadius: 9,
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "space-around",
                  flexDirection: "row",

                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "#FFF",
                    fontSize: 12,
                    fontWeight: 500,
                  }}
                >
                  Стпециальный бетон
                </Text>
              </LinearGradient>
              <AntDesign
                style={{
                  position: "absolute",
                  opacity: 0,
                  top: 0,
                  right: 0,
                  width: "100%",
                  height: "100%",
                }}
                name="right"
                size={24}
                color="black"
                onPress={toggleModal}
              />
            </HomeMenuCard>
          </ScrollView>
        </HomeMenuDiv>
      </HomeMenu>
      <Modal
        onBackdropPress={() => setModalVisible(false)}
        onBackButtonPress={() => setModalVisible(false)}
        isVisible={isModalVisible}
        swipeDirection="down"
        onSwipeComplete={toggleModal}
        animationIn="bounceInUp"
        animationOut="bounceOutDown"
        animationInTiming={900}
        animationOutTiming={600}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={600}
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <View style={styles.center}>
            <View style={styles.barIcon} />
            <ModalView>
              <ModalText>Требуется специальный бетон?</ModalText>
              <Text style={{ fontSize: 14, fontWeight: 400, marginTop: 10 }}>
                Отправим ваш запрос на все заводы
              </Text>
            </ModalView>
            <ModalViewINP>
              <ModalInput placeholder="Имя" />
              <ModalInput style={{ marginTop: 10 }} placeholder="Телефон" />
              <ModalTextArea
                style={{ marginTop: 10 }}
                placeholder="Комментарий"
              />
              <ModalBTN>
                <Text style={{ fontSize: 14, fontWeight: 700 }}>
                  Заказать у поставщиков
                </Text>
              </ModalBTN>
            </ModalViewINP>
          </View>
        </View>
      </Modal>
    </HomeView>
  );
};

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const HomeButtom = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="HomeScreen" component={HomeCopy} />
      <Stack.Screen options={{ headerShown: false }}   name="Where" component={Where} />
    </Stack.Navigator>
  );
};
const Main = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#E93333",
        inactiveTintColor: "#939393",
        labelStyle: {
          fontSize: 16,
          fontWeight: "bold",
        },
      }}
      screenOptions={{
        tabBarStyle: {
          height: 62,
          position: "absolute",
          bottom: 17,
          paddingBottom: 8,
          paddingTop: 8,
          right: 15,
          left: 15,
          borderRadius: 20,
        },
      }}
    >
      <Tab.Screen
        style={{ paddingTop: 10 }}
        options={{
          tabBarLabelStyle: ({ focused }) =>
            focused ? { color: "red" } : { color: "black" },
          tabBarLabel: "Главная",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <SimpleLineIcons name="pin" size={24} color="#E93333" />
            ) : (
              <SimpleLineIcons name="pin" size={24} color="#939393" />
            ),
          headerShown: false,
        }}
        name="Home"
        component={HomeButtom}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  flexView: {
    flex: 1,
    backgroundColor: "white",
  },
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: "#FFF",
    paddingTop: 12,
    paddingHorizontal: 12,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    minHeight: 500,
    paddingBottom: 20,
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  barIcon: {
    width: 60,
    height: 5,
    backgroundColor: "#D4D4D4",
    borderRadius: 3,
  },
  text: {
    color: "#bbb",
    fontSize: 24,
    marginTop: 100,
  },
  btnContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 500,
  },
});

export default Main;
