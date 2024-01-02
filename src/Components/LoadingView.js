import { View , Text , ActivityIndicator } from "react-native"
import style from '../../assets/Styles/LoadingStyle';


const LoadingView = () => { 
  return(
    <View style={style.container}>
      <Text style={style.text}>Cargando...</Text>
      <ActivityIndicator size="large" color="blue" />
    </View>
  )
}

export default LoadingView;