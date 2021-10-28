import React, { useState, useCallback } from 'react'
import { Text, StyleSheet, View, Image, ScrollView, TouchableOpacity, RefreshControl } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import { Input, SocialIcon, SearchBar } from "react-native-elements";

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function SearchScreen({navigation}) {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <ScrollView style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        <View style={styles.backAndCart}>
          <TouchableOpacity style={{marginLeft: 15}} onPress={() => navigation.navigate("HomeScreen")}>
            <Icon
              name="chevron-back-outline"
              size={30}
              color="#111827"
            />
          </TouchableOpacity>
          <View>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Search
            </Text>
          </View>
          <View style={{marginRight: 15}}>
            <Icon
              name="cart-outline"
              size={30}
              color="#111827"
            />
          </View>
        </View>
        <TouchableOpacity style={styles.inputSearch}>
              <Input
                inputContainerStyle={{ borderBottomWidth: 0}}
                inputStyle={{fontSize: 15}}
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
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  backAndCart: {
    // backgroundColor: 'blue',
    width: '100%',
    height: '30%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputSearch: {
    // backgroundColor: "blue",
    width: "90%",
    borderRadius: 15,
    borderColor: '#9CA3AF',
    borderWidth: 1,
    height: 50,
    marginHorizontal: 18,
    marginBottom: 124,
    marginTop: 20
  },
  container: {
    display: 'flex',
    height: '100%',
    width: '100%',
    backgroundColor: 'white'
  }
})