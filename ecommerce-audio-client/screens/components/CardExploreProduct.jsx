import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function CardExploreProduct({item}) {
  return (
    <View style={styles.cardProduct}>
      <View style={styles.cardProductPic}>
        <View style={styles.containerImg}>
          <Image
            style={styles.imgExplore}
            resizeMode="contain"
            source={require("../../assets/headband.png")}
          ></Image>
        </View>
      </View>
      <View style={styles.cardProductTitle}>
        <Text style={{ fontSize: 18 }}>{item.name}</Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            marginBottom: 5,
          }}
        >
          USD {item.price}
        </Text>
      </View>
      <View style={styles.cardProductReview}>
        <Icon
          name="star"
          size={18}
          color="#FFC120"
          style={{ marginRight: 4 }}
        />
        <Text style={{ fontSize: 13, marginRight: 14 }}>{item.star}</Text>
        <Text style={{ fontSize: 13, marginRight: 5 }}>{item.review} Reviews</Text>
        <Icon
          name="ellipsis-vertical"
          size={22}
          color="#9CA3AF"
          style={{ marginLeft: 0 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerImg: {
    backgroundColor: "#D1D5DB",
    borderRadius: 15,
  },
  imgExplore: {
    height: 160,
    width: 160,
  },
  cardProductPic: {
    width: "100%",
    height: "60%",
    // backgroundColor: "blue",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cardProductTitle: {
    width: "90%",
    height: "25%",
    // backgroundColor: "yellow",
    display: "flex",
    justifyContent: 'space-between',
    alignItems: "flex-start",
    
  },
  cardProductReview: {
    width: 150,
    height: "15%",
    // backgroundColor: "pink",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "space-between",
  },
  cardProduct: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    width: 170,
    height: 285,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 3,
    display: "flex",
    alignItems: "center",
  },
})