import React from 'react';
import { View, Text, StyleSheet, Image, Pressable, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function Doctor({ navigation, route}) {
  const { name, speciality, imageUrl } = route.params;
  return (
    <SafeAreaView style={styles.container}>

        <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>Doctor</Text>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={imageUrl} />
          <Text style={{ left: 20, fontSize: 20, fontWeight: "500", marginTop: 10 }}>{name}</Text>
          <Text style={{ left: 20, fontSize: 20,fontStyle: "italic", fontWeight: "300", marginTop: 10 }}>{speciality}</Text>
          <Text style={{ left: 20, fontSize: 20, fontWeight: "bold", marginTop: 10 }}>Informations</Text>
          <Text style={{ left: 20, fontSize: 20, fontWeight: "300", marginTop: 10 }}>{name} is the top most cardiologist specialist in Crist Hospital in London, Read More. . . </Text>
        </View>

        <Pressable style={{
          width: 250,
          height: 50,
          backgroundColor: "#232D53",
          borderRadius: 45,
          alignSelf: "center",
          display: "flex",


        }} onPress={() => {
          navigation.navigate('Chat', {
            name: name,
          })
        }}>
          <Text style={{ color: "white", textAlign: "center", marginTop: 10, fontSize: 20, fontWeight: "bold" }}>Contact Doctor</Text>
        </Pressable>
        <Pressable style={{
          width: 250,
          height: 50,
          backgroundColor: "#486CF6",
          borderRadius: 45,
          alignSelf: "center",
          display: "flex",
          marginTop: 20,
        }} onPress={() => {
  
        }}>

          <Text style={{ color: "white", textAlign: "center", marginTop: 10, fontSize: 20, fontWeight: "bold" }}>Schedule Visit</Text>
        </Pressable>


    </SafeAreaView>
  );
}

export default Doctor;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  image: {
    width: "90%",
    height: "40%",
    alignSelf: "center",
    borderRadius: 20,
  },
});
