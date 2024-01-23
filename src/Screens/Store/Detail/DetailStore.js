import React from "react";
import {ScrollView } from "react-native";
import ViewDetail from "../components/ViewDetail";

/**
 * 
 * @param {string} param0 ruta del producto seleccionado
 * @returns Vista de detalle del producto
 */
const DetailStore = ({ route }) => {

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ViewDetail product={route.params.product} />
    </ScrollView>
  );
};

export default DetailStore;
