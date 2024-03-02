import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

function General() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Man, 22 y.o</Text> 
        <Text style={styles.text}>SSN: 123 45 6789</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Phone: 123-456-7890</Text>  
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    padding: 20,
  },
  textContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 10,
  },
  text: {
    fontSize: 18,
    color: "black",
    fontWeight: "normal"
  }
})

export default General;