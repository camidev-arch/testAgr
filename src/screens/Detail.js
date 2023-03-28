import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import CONTACT_LOGO from "../assets/icons/contact.png";
import { Image } from "react-native";
import InfoContact from "../components/InfoContact";
const Detail = (props) => {
  const { item } = props.route.params;
  useEffect(() => {
    console.log(item);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image style={styles.imgContac} source={CONTACT_LOGO} />
        <Text style={styles.title}>{item.nombre || "N/A"}</Text>
      </View>
      <InfoContact item={item} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    flex: 1,
  },
  title: {
    fontSize: 50,
    textAlign: "center",
  },
  imgContac: {
    width: 150,
    height: 150,
  },
  containerLogo: {
    height: "20%",
    alignItems: "center",
    marginBottom: 50,
  },
});

export default Detail;
