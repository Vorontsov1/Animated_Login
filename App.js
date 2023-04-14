import { StyleSheet, Text, View, Dimensions, TextInput, Pressable } from "react-native";
import styles from "./styles";
import Svg, { Image, Ellipse, ClipPath } from "react-native-svg";
import Animated, {useSharedValue,  useAnimatedStyle,  interpolate, withTiming } from "react-native-reanimated";



export default function App() {
  const { height, width } = Dimensions.get("window");
  const imagePosition = useSharedValue(1);

  const imageAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [-height / 2, 0]);
    return {
      transform: [{ translateY: withTiming(interpolation,{duration:700})}],
    };
  });
  
  const buttonAnimatedStyle = useAnimatedStyle(() => { 
    const interpolation = interpolate(imagePosition.value, [0, 1], [250, 0])
    return {
      opacity: withTiming(imagePosition.value, { duration: 700 }),
      transform: [{ translateY: withTiming(interpolation, { duration: 700 }) }],
    }
  });

  const loginHandler = () => { 
    imagePosition.value = 0;
  }

  const registerHandler = () => {
    imagePosition.value = 0;
  }
  
  return (
    <View style={styles.container}>
      <Animated.View style={[StyleSheet.absoluteFill, imageAnimatedStyle]}>
        <Svg height={height + 100} width={width}>
          <ClipPath id="clipPathId">
            <Ellipse cx={width / 2} rx={height} ry={height + 100} />
          </ClipPath>
          <Image
            href={require("./assets/login-background.jpg")}
            width={width + 100}
            height={height + 100}
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#clipPathId)"
          />
        </Svg>
        <View style={styles.closeButtonContainer}>
          <Text style={styles.closeButtonText}>X</Text>
        </View>
      </Animated.View>

      <View style={styles.buttonContainer}>
        <Animated.View style={buttonAnimatedStyle}>
          <Pressable style={styles.button} onPress={loginHandler}>
            <Text style={styles.buttonText}>LOG IN</Text>
          </Pressable>
        </Animated.View>
        <Animated.View style={buttonAnimatedStyle}>
          <Pressable style={styles.button} onPress={registerHandler}>
            <Text style={styles.buttonText}>REGISTER</Text>
          </Pressable>
        </Animated.View>
        {/* <View style={styles.formInputContainer}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="black"
            style={styles.textInput}
          />
          <TextInput
            placeholder="Full name"
            placeholderTextColor="black"
            style={styles.textInput}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="black"
            style={styles.textInput}
          />
          <View style={styles.formButton}>
             <Text style={styles.buttonText}>LOG IN</Text>
          </View>
        </View> */}
      </View>
    </View>
  );
}
