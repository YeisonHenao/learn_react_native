import React from "react";
import {ScrollView } from "react-native";
import ViewDetail from "../../../Components/Store/ViewDetail";

const DetailStore = ({ route }) => {

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ViewDetail product={route.params.product} />
    </ScrollView>
  );
};

export default DetailStore;