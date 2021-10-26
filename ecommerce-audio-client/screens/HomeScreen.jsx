import React from 'react'
import { Text, StyleSheet, View, Image, ScrollView } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import { Input, SocialIcon, SearchBar } from "react-native-elements";
import CardTma1 from './components/CardTma1';
import CardTma2HeadBand from './components/CardTma2HeadBand';
import CardTma2Cable from './components/CardTma2Cable';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <View style={{marginLeft: 15}}>
          <Icon
            name="menu-outline"
            size={30}
            color="#111827"
          />
        </View>
        <View>
          <Image
            style={styles.imgLogo}
            resizeMode="contain"
            source={require("../assets/Logo.png")}
          >
          </Image>
        </View>
        <View style={{marginRight: 15}}>
          <Image
            style={styles.imgUser}
            resizeMode="cover"
            source={{
              uri: "https://images.unsplash.com/photo-1531256456869-ce942a665e80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
            }}
          >
          </Image>
        </View>
      </View>

      <View style={styles.hiUser}>
        <View>
          <Text style={{fontSize: 16, marginLeft: 18}}>
            Hi, Andrea
          </Text>
        </View>
        <View style={{marginLeft: 18}}>
          <Text style={{fontSize: 29, fontWeight: 'bold'}}>
            What are you looking for today?
          </Text>
        </View>
        <View>
          <View style={styles.inputSearch}>
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
            </View>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.headphone}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{display: 'flex', alignItems: 'center', marginLeft: 10}}
            horizontal={true}
          >
            <View style={styles.itemHeadphoneActive}>
              <Text style={{color: 'white', fontSize: 14}}>
                Headphone
              </Text>
            </View>
            <View style={styles.itemHeadphone}>
              <Text style={{color: '#6B7280', fontSize: 14}}>
                Headband
              </Text>
            </View>
            <View style={styles.itemHeadphone}>
              <Text style={{color: '#6B7280', fontSize: 14}}>
                Earpads
              </Text>
            </View>
            <View style={styles.itemHeadphone}>
              <Text style={{color: '#6B7280', fontSize: 14}}>
                TWS
              </Text>
            </View>
            <View style={styles.itemHeadphone}>
              <Text style={{color: '#6B7280', fontSize: 14}}>
                Cable
              </Text>
            </View>
          </ScrollView>
        </View>
        <View style={styles.contentTma1}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{display: 'flex', alignItems: 'center', marginLeft: 20}}
            horizontal={true}
          >
            <CardTma1></CardTma1>
            <CardTma1></CardTma1>
            <CardTma1></CardTma1>
            
          </ScrollView>
        </View>
        <View style={styles.featuredProducts}>
          <Text style={{fontSize: 15, marginLeft: 19}}>
            Featured Products
          </Text>
          <Text style={{color: '#6B7280', fontSize: 14, marginRight: 20}}>
              See All
          </Text>
        </View>
        <View style={styles.contentTma2}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{display: 'flex', alignItems: 'center', marginLeft: 20}}
            horizontal={true}
          >
            <CardTma2HeadBand></CardTma2HeadBand>
            <CardTma2Cable></CardTma2Cable>
            <CardTma2HeadBand></CardTma2HeadBand>
            <CardTma2Cable></CardTma2Cable>
          </ScrollView>
        </View>
      </View>
      
    </SafeAreaView>
  )
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
    shadowColor: "#000",
    shadowOffset:{
    width: 0,
    height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 3,
  },
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
    height: 190,
    marginRight: 17
  },
  itemHeadphoneActive: {
    marginHorizontal: 10,
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
    height: 35,
    backgroundColor: '#0ACF83'
  },
  itemHeadphone: {
    marginHorizontal: 10,
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
    height: 35,
    backgroundColor: '#E5E7EB'
  },
  headphone: {
    width: '100%',
    height: '12%',
    // backgroundColor: 'blue'
  },
  contentTma1: {
    width: '100%',
    height: '36%',
    backgroundColor: '#E5E7EB'
  },
  featuredProducts: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '7%',
    backgroundColor: '#E5E7EB'
  },
  contentTma2: {
    width: '100%',
    height: '45%',
    // backgroundColor: 'red',
  },
  inputSearch: {
    // backgroundColor: "blue",
    width: "90%",
    borderRadius: 15,
    borderColor: '#9CA3AF',
    borderWidth: 1,
    height: 50,
    marginHorizontal: 18,
    marginBottom: 20,
    marginTop: 20
  },
  imgUser: {
    height: 40,
    width: 40,
    borderRadius: 150,
    // backgroundColor: 'white'
  },
  imgLogo: {
    height: 40,
    width: 90,
    // backgroundColor: 'white'
  },
  imgTma1: {
    height: 150,
    width: 150,
    // backgroundColor: 'white'
  },
  imgTma2Inside: {
    height: 130,
    width: 130,
    // backgroundColor: 'white'
  },
  content: {
    display: 'flex',
    height: '67%',
    width: '100%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: '#E5E7EB'
  },  
  hiUser: {
    height: '23%',
    width: '100%',
    // backgroundColor: 'blue'
  },  
  logo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '10%',
    width: '100%',
    // backgroundColor: 'yellow'
  },  
  container: {
    display: 'flex',
    height: '100%',
    width: '100%',
    backgroundColor: 'white'
  }
})
