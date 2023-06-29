import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";

export default function App() {
  return (
    <SafeAreaProvider>
      <ImageBackground
        source={require("./assets/img/photo_BG.jpg")}
        // style={{ flex: 1, width: "100%", height: "100%" }}
        style={{ flex: 1, width: null, height: null }}
      >
        <View style={styles.container}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <RegistrationScreen />
            <StatusBar style="auto" />
          </KeyboardAvoidingView>
        </View>
      </ImageBackground>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 3,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
