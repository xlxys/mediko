import React from 'react';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import TestItem from '../../components/TestItem';
import { View } from 'react-native';

function Tests() {
  return (
    <>
      <Header title="History" name="BOUCHERIKA Abdelmalek"/>
      <View style={{marginTop: 40}}>
        <TestItem title="Diagnostic" text="He'll want to use your yacht" imageUrl={require("../../assets/dark-blood.png")} />
        <TestItem title="Blood Test" text="He'll want to use your yacht" imageUrl={require("../../assets/analyse.png")} />
        <TestItem title="Food allergy" text="He'll want to use your yacht" imageUrl={require("../../assets/food.png")} />
      </View>
    </>
  );
}


export default Tests;