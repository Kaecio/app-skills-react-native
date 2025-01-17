import { View, Text, Pressable } from "react-native";
import React from "react";
import { styles } from "./style";

interface ButtonLinkProps {
    onPress: () => void;
    }

export default function ButtonLink({ onPress }: ButtonLinkProps) {
  return (
    <View>
      <Pressable
        style={styles.button}
        onPress={onPress}
      >
        <Text style={styles.text}>Skills</Text>
        </Pressable>
    </View>
  );
}
