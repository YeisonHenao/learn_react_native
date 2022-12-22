import { View, Text, Image } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import style from "../assets/Styles/HomeStyle";

import AnimationFade from "../Components/Common/AnimationFade";

const Home = () => {
  return (
    <SafeAreaProvider>
      <View style={style.container}>
        <AnimationFade>
          <Text style={style.title}>Home</Text>
        </AnimationFade>
        <Image
          source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          style={style.Image}
        />
      </View>
    </SafeAreaProvider>
  );
};

export default Home;
