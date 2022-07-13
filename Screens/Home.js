import React  from 'react'
import {View,Text , Image} from 'react-native'
import style from '../assets/Styles/HomeStyle';

const Home = () => {
  
  return(
    <View style={style.container}>
      <Text>Home</Text>
      <Image source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
       style={{width: 64, height: 64}} />
    </View>
  );
}

export default Home;