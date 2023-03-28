import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Image } from "react-native";
import CONTACT_LOGO from '../assets/icons/contact.png'
import ACTIVE_ICON from '../assets/icons/activeIcon.png'
import INACTIVE_ICON from '../assets/icons/inactiveIcon.png'



const ItemList = ({ item }) => {
  const navigation = useNavigation();

  const goToDetail = () => {
    navigation.navigate("Detail", { item });
  };
  return (
    <TouchableOpacity style={styles.container} onPress={() => {
        goToDetail();
      }}>
      <View style={styles.containerImg}>
      <Image style={styles.img} source={CONTACT_LOGO} />
        <Text style={styles.text}>{item.nombre}</Text>
       
      </View>
      <Text
        style={
          item.estado == "Activo" ? styles.textActive : styles.textInactive
        }
      >
        <TouchableOpacity
          onPress={() => {
            goToDetail();
          }}
        >
          <Image source={item.estado == 'Activo' ? ACTIVE_ICON: INACTIVE_ICON} style={styles.imgVisibility} />
        </TouchableOpacity>
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    paddingTop: 15,
    borderColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
    border: 2,
    borderBottomColor: "red",
  },
  containerImg:{
    flexDirection:'row'
  },
  img:{
    width:30,
    height:30,
    marginRight:10
  },
  imgVisibility:{
    width:30,
    height:30,
    marginRight:10
  },
  text: {
    color: "gray",
    fontSize: 31,
  },
  textActive: {
    color: "green",
    fontSize: 31,
  },
  textInactive: {
    color: "red",
    fontSize: 31,
  },
});
export default ItemList;
