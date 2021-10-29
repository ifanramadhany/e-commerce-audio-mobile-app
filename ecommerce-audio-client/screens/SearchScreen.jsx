import React, { useState, useCallback } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import { Input, SocialIcon, SearchBar } from "react-native-elements";
import ItemHistorySearch from "./components/ItemHistorySearch";
import CardPopularProduct from "./components/CardPopularProduct";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function SearchScreen({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);

  const historySeacrh = [
    {
      id: 1,
      hist: "TMA-2 Wireless",
    },
    {
      id: 2,
      hist: "Headband MX-1",
    },
    {
      id: 3,
      hist: "Earpads L2 Pro",
    },
  ]

  const populars = [
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

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <View style={styles.topMenu}>
      <View style={styles.backAndCart}>
          <TouchableOpacity
            style={{ marginLeft: 15 }}
            onPress={() => navigation.navigate("HomeScreen")}
          >
            <Icon name="chevron-back-outline" size={30} color="#111827" />
          </TouchableOpacity>
          <View>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Search</Text>
          </View>
          <View style={{ marginRight: 15 }}>
            <Icon name="cart-outline" size={30} color="#111827" />
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.inputSearch}>
            <Input
              inputContainerStyle={{ borderBottomWidth: 0 }}
              inputStyle={{ fontSize: 15 }}
              placeholder="Search headphone"
              placeholderTextColor="#9CA3AF"
              leftIcon={
                <Icon
                  name="search-outline"
                  size={24}
                  color="#9CA3AF"
                  style={{ marginRight: 10 }}
                />
              }
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        
        <View style={styles.latestSearch}>
          <Text style={{ fontSize: 17, marginLeft: 22, fontWeight: "bold" }}>
            Latest search
          </Text>
        </View>
        
        {
            historySeacrh.map(item => {
              return (
                <ItemHistorySearch
                key={item.id}
                item={item}
                ></ItemHistorySearch>
              )
            })
          }
        
        <View style={styles.latestSearch}>
          <Text style={{ fontSize: 17, marginLeft: 22, fontWeight: "bold" }}>
            Popular Products
          </Text>
        </View>
        
        {
          populars.map(item => {
            return (
              <CardPopularProduct
              key={item.id}
              item={item}
              ></CardPopularProduct>
            )
          })
        }
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topMenu: {
    height: "19%",
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB'
    // backgroundColor: 'blue'
  },
  latestSearch: {
    // backgroundColor: 'green',
    width: "100%",
    height: 50,
    display: "flex",
    justifyContent: "center",
  },
  backAndCart: {
    // backgroundColor: 'blue',
    width: "100%",
    marginTop: 10,
    height: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputSearch: {
    // backgroundColor: "yellow",
    width: "90%",
    borderRadius: 15,
    borderColor: "#9CA3AF",
    borderWidth: 1,
    height: 50,
    marginHorizontal: 18,
    marginBottom: 10,
    marginTop: 18,
  },
  container: {
    height: "81%",
    width: "100%",
    // backgroundColor: "red",
  },
});
