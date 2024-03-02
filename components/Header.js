import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

function Header(props) {
  return (
    <>
    <View style={styles.header}>
      <View style={{ alignItems: "center"}}>
        <Image source={require("../assets/logo2.png")} />
      </View>
      {/* <Pressable style={{position:'absolute', top: 50, left: 10}} onPress={() => {
        navigation.navigate('Doctors')
      }}>
        <Image style={{height:30, width:30}} source={require('../assets/back.png')}/>
      </Pressable> */}
    
      <Text style={styles.title}>{props.title}</Text>
      
      <View style={styles.avatar}>
        <Image style={{height:90, width:90, borderRadius: 60}} source={require('../assets/avatar.jpg')} />
      </View>
    </View>
    <Text style={styles.name}>{props.name}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 150,
    paddingTop: 40,
    backgroundColor: '#486CF6',
    borderRadius: 18
  },
  title: {
    top: 50,
    left: 150,
    color: '#EFF0F2',
    fontSize: 25,
    fontWeight: 'bold',
  },
  name: {
    left: 150,
    color: '#486CF6',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5
  },
  avatar: {
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 50,
    margin: 'auto',
    left: 30,
    justifyContent:'center', 
    alignItems: 'center'
  }
})

export default Header;