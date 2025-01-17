import { View, Text, Button } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { styles } from "./style";
import Avatar from "../../components/Avatar/Avatar";
import ButtonLink from "../../components/Button/Button";

export default function Home({ navigation }: any) {

  function handleNavigateToSkills() {
    navigation.navigate("Skills");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Avatar />
        <Text style={styles.text} >Fanderson</Text>
      </View>
     <ButtonLink onPress={handleNavigateToSkills} />
      <StatusBar style="auto" />
    </View>
  );
}
