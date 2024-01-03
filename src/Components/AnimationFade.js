import { useRef , useEffect } from "react";
import { View , Animated  } from "react-native";

const AnimationFade = (props) => {
  
  const fadeAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(
      fadeAnimation,
      {
        toValue: 1,
        duration:10000
      }
    ).start();
  },[fadeAnimation])


  return(
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnimation
      }}
    >
      {props.children}
    </Animated.View>
  );
}

export default AnimationFade;