import { Text, View, StyleSheet, Image } from "react-native";
import RegisterForm from "../../components/RegisterForm";
import { useFonts } from "expo-font";

export default function RegistrationScreen() {
  const { container, text, title, wrap__foto } = styles;

  const [fontsLoaded] = useFonts({
    "Inter-Medium": require("../../assets/fonts/Inter/Inter-Medium.ttf"),
    "Roboto-Medium": require("../../assets/fonts/Roboto/Roboto-Medium.ttf"),
    "Roboto-Bold": require("../../assets/fonts/Roboto/Roboto-Bold.ttf"),
    "Roboto-Regular": require("../../assets/fonts/Roboto/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return;
  }

  return (
    <View style={container}>
      <View style={wrap__foto}>
        <View
          style={{
            position: "absolute",
            borderRadius: "50%",
            right: 0,
            bottom: 14,
            transform: [{ translateX: 12 }],
            width: 25,
            height: 25,
          }}
        >
          <Image
            source={require("../../assets/img/add.png")}
            style={{
              resizeMode: "contain",
            }}
          />
        </View>
      </View>
      <Text style={StyleSheet.compose(text, title)}>Реєстрація</Text>
      <RegisterForm style={{ width: "100%" }} />
      <Text style={text}>Вже маєте акаунт? Увійти</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    width: "100%",
    height: 549,
    backgroundColor: "#FFFFFF",
    marginTop: 219,
    paddingHorizontal: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  wrap__foto: {
    position: "absolute",
    top: -60,
    left: "50%",
    transform: [{ translateX: -50 }],
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },

  text: {
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },

  title: {
    fontFamily: "Roboto-Medium",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    color: "#212121",
    marginTop: 92,
    marginBottom: 32,
  },
});
