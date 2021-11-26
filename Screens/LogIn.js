import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet , ActivityIndicator } from "react-native";

import Login from "../service/Acount/Login";

export default function LogIn() {
  const [user, setUser] = useState("");

  useEffect(async () => {
    const response = await getUser();
    console.log(response);
    setUser(response || "No data");
  }, []);

  const getUser = async () => {
    const response = await Login();
    return response.data;
  };

  const style = StyleSheet.create({
    nameText: {
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 25,
    },
    normalText: {
      paddingTop: 10,
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 14,
    },
  });

  return (
    <View>
        <Text style={style.nameText}>{JSON.stringify(user.name.firstname).slice(1,-1).toUpperCase()} {JSON.stringify(user.name.lastname).slice(1,-1).toUpperCase()}</Text>
        <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}
