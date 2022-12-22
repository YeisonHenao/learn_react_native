import React from "react";
import ListCharacters from "../Components/RickAndMorty/ListCharacters";
import { View } from "react-native";
import style from "../assets/Styles/RickAndMortyStyle";

const RickAndMortyView = () => {
  return (
    <View style={style.container}>
      <ListCharacters />
    </View>
  );
};

export default RickAndMortyView;
