import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";

export default function App() {
  return (
    <SafeAreaProvider>
      <View>
        <ImageBackground
          source={require("./assets/img/photo_BG.jpg")}
          style={{ width: "100%", height: "100%" }}
        >
          <RegistrationScreen />
          <StatusBar style="auto" />
        </ImageBackground>
      </View>
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
