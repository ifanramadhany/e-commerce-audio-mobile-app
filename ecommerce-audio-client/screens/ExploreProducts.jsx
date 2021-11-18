import React, { useState, useCallback } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  TouchableHighlight,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import { Input, SocialIcon, SearchBar } from "react-native-elements";
import ButtonCategoriesWhite from "./components/ButtonCategoriesWhite";
import CardExploreProduct from "./components/CardExploreProduct";

export default function ExploreProducts({ navigation }) {
  const [isPressFilter, setIsPressFilter] = useState(false);

  const categories = [
    {
      id: 1,
      ctgry: "Popularity",
    },
    {
      id: 2,
      ctgry: "Newest",
    },
    {
      id: 3,
      ctgry: "Most Expensive",
    },
    {
      id: 4,
      ctgry: "Most Valuable",
    },
  ];

  const exploreProducts = [
    {
      id: 1,
      name: "TMA-2 Comfort Wireless",
      price: 354,
      star: "4.0",
      review: 102
    },
    {
      id: 2,
      name: "Earpads Pro LX1",
      price: 270,
      star: "4.4",
      review: 86
    },
    {
      id: 3,
      name: "Headband MNX-12",
      price: 450,
      star: "4.9",
      review: 231
    },
    {
      id: 4,
      name: "TWS-Sport R-30",
      price: 600,
      star: "4.9",
      review: 366
    },
    {
      id: 5,
      name: "TWS-Sport R-30",
      price: 600,
      star: "4.9",
      review: 366
    },
    {
      id: 6,
      name: "TWS-Sport R-400",
      price: 600,
      star: "4.9",
      review: 366
    },
  ] 

  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <View style={styles.backAndCart}>
        <TouchableOpacity
          style={{ marginLeft: 15 }}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Icon name="chevron-back-outline" size={30} color="#111827" />
        </TouchableOpacity>

        <View style={{ marginRight: 15 }}>
          <Icon name="cart-outline" size={30} color="#111827" />
        </View>
      </View>
      <ScrollView style={styles.mainProducts}>
        <Text style={{ fontSize: 22, marginLeft: 20, marginTop: 10 }}>
          Headphone
        </Text>
        <Text
          style={{
            fontSize: 30,
            marginLeft: 20,
            marginTop: 10,
            fontWeight: "bold",
            marginBottom: 20,
          }}
        >
          TMA Wireless
        </Text>
        <View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              display: "flex",
              alignItems: "center",
              marginLeft: 10,
            }}
            horizontal={true}
          >
            <TouchableHighlight
              underlayColor="#0ACF83"
              style={
                isPressFilter
                  ? styles.itemHeadphoneActiveFilter
                  : styles.itemHeadphoneFilter
              }
              onPress={() => navigation.navigate("ExploreProducts")}
              onPressIn={() => setIsPressFilter(true)}
              onPressOut={() => setIsPressFilter(false)}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon
                  name="options"
                  size={24}
                  style={
                    isPressFilter
                      ? styles.buttonPressIcon
                      : styles.buttonNormalIcon
                  }
                />
                <Text
                  style={
                    isPressFilter ? styles.buttonPress : styles.buttonNormal
                  }
                >
                  Filter
                </Text>
              </View>
            </TouchableHighlight>
            {categories.map((item) => {
              return (
                <ButtonCategoriesWhite
                  key={item.id}
                  item={item}
                  navigation={navigation}
                ></ButtonCategoriesWhite>
              );
            })}
          </ScrollView>
        </View>
        <ScrollView style={styles.allCard}>
          <View style={styles.containerCard}>
            {/* Card Explore Product  */}
            {
              exploreProducts.map(item => {
                return (
                  <CardExploreProduct
                  key={item.id}
                  item={item}
                  ></CardExploreProduct>
                )
              })
            }
          </View>
        </ScrollView>
        <View
          style={{
            width: "100%",
            height: 25,
            backgroundColor: "#E5E7EB",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        ></View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
  containerCard: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    marginLeft: 6,
    marginTop: 18,
  },
  allCard: {
    backgroundColor: "#E5E7EB",
    marginTop: 25,
    width: "100%",
    height: "100%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  buttonPressIcon: {
    color: "white",
    fontSize: 24,
    marginRight: 10,
  },
  buttonNormalIcon: {
    color: "#6B7280",
    fontSize: 24,
    marginRight: 10,
  },
  buttonPress: {
    color: "white",
    fontSize: 14,
  },
  buttonNormal: {
    color: "#6B7280",
    fontSize: 14,
  },
  itemHeadphoneActiveFilter: {
    marginHorizontal: 10,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#0ACF83",
    paddingHorizontal: 15,
    paddingVertical: 10,
    height: 53,
    backgroundColor: "#0ACF83",
  },
  itemHeadphoneFilter: {
    marginHorizontal: 10,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#9CA3AF",
    height: 53,
    backgroundColor: "white",
  },
  mainProducts: {
    // backgroundColor: "pink",
    width: "100%",
    height: "91%",
  },
  backAndCart: {
    // backgroundColor: 'blue',
    width: "100%",
    // marginTop: 10,
    height: 70,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
});
