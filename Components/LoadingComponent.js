import react from 'react';
import { View, Text , ActivityIndicador } from 'react-native-web';
import style from '../assets/Styles/LoadingStyle';

const LoadingComponent = () => {
  return(
    <View style={style.container}>
      <Text style={style.text}>Cargando...</Text>
      <ActivityIndicador size="large" color="#256CD3" />
    </View>
  )
}

export default LoadingComponent;