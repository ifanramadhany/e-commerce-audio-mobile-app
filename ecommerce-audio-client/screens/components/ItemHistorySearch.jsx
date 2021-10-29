import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function ItemHistorySearch({item}) {
  return (
    <View style={styles.latestSearchItem}>
      <View style={styles.latestSearchItemLeft}>
        <Icon
          name="time-outline"
          size={24}
          color="#9CA3AF"
          style={{ marginRight: 10 }}
        />
        <Text style={{ fontSize: 15 }}>{item.hist}</Text>
      </View>
      <View>
        <Icon
          name="close-outline"
          size={30}
          color="#111827"
          style={{ marginRight: 18 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  latestSearchItemLeft: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: 'blue'
    marginLeft: 20,
  },
  latestSearchItem: {
    // backgroundColor: 'yellow',
    width: "100%",
    height: 35,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
