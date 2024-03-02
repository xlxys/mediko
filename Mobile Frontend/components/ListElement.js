import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';



function ListElement(props) {


  return (
    <>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={props.imageUrl}/>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.text}>{props.text}</Text>
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
  },
  imageContainer: {
    display: "flex",
    justifyContent:'center', 
    alignItems: 'center',
    backgroundColor:"#232D53",
    height: 50,
    width: 50,
    borderRadius: 10,
    marginRight: 20,
  },
  textContainer:{
    flex: 1,
  },
  title: {
    fontSize: 23,
    color: "black",
    fontWeight: "bold"
  },
  text: {
    fontSize: 18,
    color: "black",
    fontWeight: "normal"
  }
})


export default ListElement;
