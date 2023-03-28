import React from 'react'
import { StyleSheet, Text, View } from "react-native";


const InfoContact = ({item}) => {
  return (
    <>
     <View style={styles.containerInfo}>
        <Text style={styles.textTitle}>
          Apellido:
        </Text>
        <Text style={styles.textDescription}>
          {item.apellido  || "N/A"}
        </Text>
      </View>
      <View  style={styles.containerInfo}>
        <Text style={styles.textTitle}>
          Documento:
        </Text>
        <Text style={styles.textDescription}>
          {item.documento || "N/A"}
        </Text>
      </View>
      <View  style={styles.containerInfo}>
        <Text style={styles.textTitle}>
          Celular:
        </Text>
        <Text style={styles.textDescription}>
          {item.celular || "N/A"}
        </Text>
      </View>
  
      <View  style={styles.containerInfo}>
        <Text style={styles.textTitle}>
          Correo:
        </Text>
        <Text style={styles.textDescription}>
          {item.emailModificacion || "N/A"}
        </Text>
      </View>
      <View  style={styles.containerInfo}>
        <Text style={styles.textTitle}>
          Estado:
        </Text>
        <Text style={styles.textDescription}>
          {item.estado || "N/A"}
        </Text>
      </View>
      <View  style={styles.containerInfo}>
        <Text style={styles.textTitle}>
          Fecha de creacion:
        </Text>
        <Text style={styles.textDescription}>
          {item.fechaCreacion || "N/A"}
        </Text>
      </View>
      <View  style={styles.containerInfo}>
        <Text style={styles.textTitle}>
          Fecha de modificación:
        </Text>
        <Text style={styles.textDescription}>
          {item.fechaModificacion || "N/A"}
        </Text>
      </View>
    </>
  )
}
const styles = StyleSheet.create({
    containerInfo:{
      marginTop:10,
      width:'80%',
      flexDirection:'row',
      justifyContent: 'space-between',
    },
    textTitle:{
        fontSize:20,
        fontWeight:'bold',
    },
    textDescription:{
        fontSize:15,
    }
  });
export default InfoContact