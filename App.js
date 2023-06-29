import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground } from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";
import KeyboardAvoidingComponent from "./components/Keyboard";

export default function App() {
  return (
    <View>
      <KeyboardAvoidingComponent>
        <ImageBackground
          source={require("./assets/img/photo_BG.jpg")}
          style={{ width: "100%", height: "100%" }}
        >
          {/* <RegistrationScreen /> */}
          {/* <StatusBar style="auto" /> */}
        </ImageBackground>
      </KeyboardAvoidingComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

// шрифти у формі реєстраціі
