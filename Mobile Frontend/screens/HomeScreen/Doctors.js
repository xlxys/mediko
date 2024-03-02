import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import DoctorItem from '../../components/DoctorItem';
import Doctor from './Doctor';

function Doctors({ navigation }) {
  return (
    <View style={{ height: "100%" }}>
      <View style={{ alignItems: "center", paddingTop: 50 }}>
        <Image source={require("../../assets/logo.png")} />
      </View>
      <View style={styles.container}>
        <Pressable onPress={() => {
          navigation.navigate('Profile')
        }}>
          <Image style={styles.image} source={require("../../assets/avatar.jpg")} />
        </Pressable>
        
        <Image style={styles.image} source={require("../../assets/notifications.png")} />
      </View>
      <View style={{ alignItems: "center", paddingTop: 40 }}>
        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "80%", marginBottom: 20}}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Doctors List</Text>
          <View style={{ backgroundColor: "#232D53", borderRadius: 13, padding: 5, paddingHorizontal: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "400", color: "white" }}>See all</Text>
          </View>
        </View>
        <Pressable style={{width:"100%"}} onPress={()=>{
            navigation.navigate('Doctor', {name: "Dr. John Doe", speciality: "Cardiologist", imageUrl: require("../../assets/doctor.png")})
        }}>
          <DoctorItem name="Dr. John Doe" speciality="Cardiologist" imageUrl={require("../../assets/doctor.png")} />
        </Pressable>
        <Pressable style={{width:"100%"}} onPress={()=>{
            navigation.navigate('Doctor', {name:"Dr. Mick Steel", speciality:"Radiologue", imageUrl:require("../../assets/doctor2.png")})
        }}>
          <DoctorItem name="Dr. Mick Steel" speciality="Radiologue" imageUrl={require("../../assets/doctor2.png")} />
        </Pressable>
        <Pressable style={{width:"100%"}} onPress={()=>{
            navigation.navigate('Doctor', {name:"Dr. Rick Joe", speciality:"Cardiologist", imageUrl:require("../../assets/doctor3.png")})
        }}>
          <DoctorItem name="Dr. Rick Joe" speciality="Cardiologist" imageUrl={require("../../assets/doctor3.png")} />
        </Pressable>
        
       
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 40,
    width: 40,
    borderRadius: 60,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
    top: 40,
  },
})

export default Doctors;