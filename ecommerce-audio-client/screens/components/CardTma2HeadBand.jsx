import React from "react";
import { Text, StyleSheet, View, Image, ScrollView } from "react-native";
import { Input, SocialIcon, SearchBar } from "react-native-elements";

export default function CardTma2HeadBand() {
  return (
    <>
      <View style={styles.ItemContentTma2}>
        <View style={styles.imgTma2}>
          <Image
            style={styles.imgTma2Inside}
            resizeMode="contain"
            source={require("../../assets/headband.png")}
          ></Image>
        </View>
        <View style={styles.titleTma2}>
          <Text style={{ fontSize: 15, marginLeft: 8 }}>TMA-2 HD Wireless</Text>
        </View>
        <View style={styles.priceTma2}>
          <Text style={{ fontSize: 15, fontWeight: "bold", marginLeft: 8 }}>
            USD 350
          </Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  imgTma2: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '70%',
    // backgroundColor: 'green'
  },
  titleTma2: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    height: '15%',
    // backgroundColor: 'yellow'
  },
  priceTma2: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: '15%',
    // backgroundColor: 'orange'
  },
  ItemContentTma2: {
    display: 'flex',
    borderRadius: 15,
    width: 166,
    backgroundColor: 'white',
    height: 210,
    marginRight: 13,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset:{
    width: 0,
    height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 3,
  },
  imgTma2Inside: {
    height: 130,
    width: 130,
    // backgroundColor: 'white'
  },
})