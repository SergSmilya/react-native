import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  StyleSheet,
  View,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";

export default function App() {
  return (
    <SafeAreaProvider>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
        <View>
          <ImageBackground
            source={require("./assets/img/photo_BG.jpg")}
            style={{ width: "100%", height: "100%" }}
          >
            <RegistrationScreen />
            <StatusBar style="auto" />
          </ImageBackground>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
