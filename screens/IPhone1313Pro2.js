import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const IPhone1313Pro2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iPhone1313Pro2}>
      <Pressable
        style={styles.tESTPressable}
        onPress={() => navigation.navigate("IPhone1313Pro1")}
      >
        <Text style={styles.tESTText}>TEST</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  tESTText: {
    fontSize: 64,
    fontFamily: "Alegreya Sans",
    color: "#fff",
    textAlign: "left",
  },
  tESTPressable: {
    position: "absolute",
    left: 134,
    top: 383,
  },
  iPhone1313Pro2: {
    position: "relative",
    backgroundColor: "#101010",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone1313Pro2;
