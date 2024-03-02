import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

function TestItem(props) {
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
    width: "90%",
    alignSelf: "center",
    display: "flex",
    flexDirection: "row",
    padding: 10,
    marginVertical : 10,
    borderRadius: 10,
    backgroundColor: "white",
  },
  imageContainer: {
    display: "flex",
    justifyContent:'center', 
    alignItems: 'center',
    
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



export default TestItem;