import { Text, View, StyleSheet } from "react-native";
import RegisterForm from "../../components/RegisterForm";
import { useFonts } from "expo-font";

export default function RegistrationScreen() {
  const { container, text, title } = styles;

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
      <Text style={StyleSheet.compose(text, title)}>Реєстрація</Text>
      <RegisterForm style={{ width: "100%" }} />
      <Text style={text}>Вже маєте акаунт? Увійти</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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

  text: {
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 1.19,
    color: "#1B4371",
  },

  title: {
    fontFamily: "Roboto-Medium",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 1.1,
    color: "#212121",
    marginTop: 92,
    marginBottom: 32,
  },
});
