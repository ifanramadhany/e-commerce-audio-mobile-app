import React from 'react'
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

export default function CardPopularProduct({item}) {
  return (
    <View style={styles.popularProduct}>
          <View style={styles.popularProductLeft}>
            <View style={styles.wrapperPopularImg}>
              <Image
                style={styles.imgPopular}
                resizeMode="contain"
                source={require("../../assets/headband.png")}
              ></Image>
            </View>
          </View>
          <View style={styles.popularProductRight}>
            <View style={styles.popularProductRightTop}>
              <Text style={{fontSize: 19, marginLeft: 10}}>
                {item.name}
              </Text>
              <Text style={{fontWeight: 'bold', fontSize: 20, marginLeft: 10, marginTop: 6}}>
                USD {item.price}
              </Text>
            </View>
            <View style={styles.popularProductRightBottom}>
              <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
                <Icon
                    name="star"
                    size={19}
                    color="#FFC120"
                    style={{ marginRight: 4 }}
                  />
                <Text style={{fontSize: 16, marginRight: 14}}>
                  {item.star}
                </Text>
                <Text style={{fontSize: 16, marginRight: 5}}>
                  {item.review} Reviews
                </Text>
              </View>
              <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: 30}}>
              <Icon
                    name="ellipsis-vertical"
                    size={22}
                    color="#9CA3AF"
                    style={{ marginLeft: 0}}
                  />
              </View>
              <View>
              </View>
            </View>
          </View>
        </View>
  )
}

const styles = StyleSheet.create({
  popularProductRightTop: {
    width: '100%',
    height: '60%',
    // backgroundColor: 'green'
  },
  popularProductRightBottom: {
    width: '100%',
    height: '36%',
    // backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  wrapperPopularImg: {
    width: '79%',
    height: '92%',
    backgroundColor: '#E5E7EB',
    borderRadius: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgPopular: {
    height: 100,
    width: 100,
  },
  popularProductRight: {
    display: 'flex',
    width: '65%',
    height: '100%',
    // backgroundColor: 'yellow'
  },  
  popularProductLeft: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '35%',
    height: '100%',
  },  
  popularProduct: {
    display: 'flex',
    flexDirection:'row',
    width: "100%",
    height: 110,
    marginBottom: 16
    // backgroundColor: 'green'
  },
})