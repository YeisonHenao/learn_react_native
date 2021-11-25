import React  from 'react'
import {View,Text,Button, StyleSheet} from 'react-native'


const Home = ({navigation}) => {
  
  const style = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });

  return(
    <View style={style.container}>
      <Text>Home</Text>
      <Button 
        title="Iniciar sesión"
        onPress={() => navigation.navigate("Iniciar") }
      />
    </View>
  );
}

export default Home;