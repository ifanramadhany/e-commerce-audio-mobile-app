import React from "react";
import { Text, StyleSheet, View, Image, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";


export default function CardTma1() {
  return (
    <>
      <View style={styles.ItemContentTma1}>
        <View style={styles.ItemContentTma1Left}>
          <Text
            style={{
              fontSize: 28,
              fontWeight: "bold",
              marginLeft: 18,
              marginBottom: 10,
            }}
          >
            TMA-2 Modular Headphone
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#0ACF83", marginLeft: 18, marginRight: 10 }}>
              Shop Now
            </Text>
            <Icon
              name="arrow-forward-outline"
              size={24}
              color="#0ACF83"
              style={{ marginRight: 10 }}
            />
          </View>
        </View>
        <View style={styles.ItemContentTma1Right}>
          <Image
            style={styles.imgTma1}
            resizeMode="contain"
            source={require("../../assets/headband.png")}
          ></Image>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  ItemContentTma1Left: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    // backgroundColor: 'yellow',
    width: '50%'
  },
  ItemContentTma1Right: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'green',
    width: '50%'
  },
  ItemContentTma1: {
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 15,
    width: 350,
    backgroundColor: 'white',
    height: 175,
    marginRight: 13,
    shadowColor: "#000",
    shadowOffset:{
    width: 0,
    height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 3,
  },
  imgTma1: {
    height: 140,
    width: 140,
    // backgroundColor: 'white'
  },
})
