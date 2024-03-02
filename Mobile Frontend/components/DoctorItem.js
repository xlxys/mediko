import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

function DoctorItem(props) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={props.imageUrl}/>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{props.name}</Text>
          <Text style={styles.text}>{props.speciality}</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    marginVertical : 10,
    margin: 20,
    marginVertical: 10,
    borderRadius: 20,
    backgroundColor: "white",
  },
  imageContainer: {
    display: "flex",
    justifyContent:'center', 
    alignItems: 'center',
    height: 50,
    width: 50,
    borderRadius: 20,
    margin: 20,
  },
  textContainer:{
    flex: 1,
    marginLeft: 20,
  },
  title: {
    fontSize: 23,
    color: "black",
    fontWeight: "bold"
  },
  text: {
    fontSize: 18,
    color: "black",
    fontWeight: "300",
    fontStyle: "italic",
  },
  image: {
    borderRadius: 20,
    height: 95,
    width: 95,
  },
})

export default DoctorItem;