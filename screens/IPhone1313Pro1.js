import * as React from "react";
import {
  Pressable,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const IPhone1313Pro1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iPhone1313Pro1}>
      <TouchableOpacity
        style={styles.rectangleTouchableOpacity}
        activeOpacity={0.04}
        onPress={() => navigation.navigate("IPhone1313Pro2")}
      />
      <Pressable
        style={styles.goGhostMode1}
        onPress={() => navigation.navigate("IPhone1313Pro2")}
      >
        <Text style={styles.goGhostMode}>go ghost mode</Text>
      </Pressable>
      <Text style={styles.facebookOAuthText}>Facebook oAuth</Text>
      <Image
        style={styles.image1Icon}
        resizeMode="cover"
        source={require("../assets/image-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleTouchableOpacity: {
    position: "absolute",
    top: 708,
    left: 43,
    borderRadius: 9,
    backgroundColor: "#1a1a1a",
    width: 304,
    height: 50,
  },
  goGhostMode: {
    fontSize: 16,
    fontFamily: "Agrandir",
    color: "#fff",
    textAlign: "left",
  },
  goGhostMode1: {
    position: "absolute",
    left: 138,
    top: 722,
  },
  facebookOAuthText: {
    position: "absolute",
    top: 782,
    left: 134,
    fontSize: 16,
    fontFamily: "Agrandir",
    color: "#fff",
    textAlign: "left",
  },
  image1Icon: {
    position: "absolute",
    top: 366,
    left: 139,
    width: 111,
    height: 111,
  },
  iPhone1313Pro1: {
    position: "relative",
    backgroundColor: "#101010",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone1313Pro1;
