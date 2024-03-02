import React from 'react';
import { StyleSheet } from 'react-native';
import Header from '../../components/Header';
import General from '../../components/General';
import ListElement from '../../components/ListElement';

function Profile() {
  return (
    <>
      <Header title="Profile" name="BOUCHERIKA Abdelmalek"/>
      <General/>
      <ListElement title="Blood group" text="Lorem Ipsum is simply dummy text of the prin" imageUrl={require("../../assets/blood.png")}/>
      <ListElement title="My allergies" text="He'll want to use your yacht, and I don't want this thing smelling like fish." imageUrl={require("../../assets/virus.png")}/>
      <ListElement title="My Medicines" text=" software like Aldus PageMaker including versions of Lorem Ipsum." imageUrl={require("../../assets/drugs.png")}/>
      <ListElement title="My consultations" text="He'll want to use your yacht, and thing smelling like fish." imageUrl={require("../../assets/docs.png")}/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingHorizontal: 20,
  }
})


export default Profile;