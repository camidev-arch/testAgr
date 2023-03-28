import React, {  useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ItemList from "../components/ItemList";
import useFetchData from "../hooks/useFetchData";
import { URL_API } from "../utils/constants";

const Home = ({ navigation }) => {
  const { data, loading, error } = useFetchData(URL_API);
  const [textSearch, setTextSearch] = useState("");
  const [filter, setFilter] = useState('Todos')


  const options= {
    Activo:()=>setFilter('Inactivo'),
    Inactivo:()=>setFilter('Todos'),
    Todos:()=>setFilter('Activo')
  }


  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputStyle}
        placeholder="Search"
        placeholderTextColor="#141414"
        onChangeText={(text) => setTextSearch(text)}
      />

      <TouchableOpacity style={styles[filter]} onPress={options[filter]}>
        <Text style={styles.textButton}>{filter}</Text>
      </TouchableOpacity>

      {loading ? (
        <ActivityIndicator color="#0000ff" />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.list}
          data={
            data != null &&
            data.filter((contact) => {
              return contact.nombre
                .toLowerCase()
                .includes(textSearch.toLowerCase())
            }).filter((contact) => filter != 'Todos' ? contact.estado == filter : true)
          }
          renderItem={({ item }) => {
            return <ItemList item={item} />;
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    flex: 1,
  },
  inputStyle: {
    borderBottomColor: "#141414",
    borderBottomWidth: 1,
    width: "90%",
    textAlign: "center",
    fontSize: 20,
  },
  list: {
    width: "90%",
  },
  Activo: {
    backgroundColor: "#31B900",
    paddingHorizontal: "35%",
    marginTop:10,
    borderRadius:10,
    justifyContent:'center',
    width: "90%",
    height: 40,
  },
  Inactivo: {
    backgroundColor: "red",
    paddingHorizontal: "35%",
    marginTop:10,
    borderRadius:10,
    justifyContent:'center',
    width: "90%",
    height: 40,
  },
  Todos: {
    backgroundColor: "gray",
    paddingHorizontal: "35%",
    marginTop:10,
    borderRadius:10,
    justifyContent:'center',
    width: "90%",
    height: 40,
  },
  label: {
    margin: 8,
  },
  textButton:{
    fontSize:20,
    color:'white',
    fontWeight: "bold",
  }
});
export default Home;
