import { TextInput, View, StyleSheet, Pressable, Text } from "react-native";
import { Formik } from "formik";

export default function RegisterForm() {
  const { input, input_lastChild, btn } = styles;
  return (
    <Formik
      initialValues={{ login: "", email: "", password: "" }}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View>
          <TextInput
            style={input}
            onChangeText={handleChange("login")}
            onBlur={handleBlur("login")}
            value={values.login}
          />

          <TextInput
            keyboardType="email-address"
            style={input}
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
          />

          <TextInput
            style={StyleSheet.compose(input, input_lastChild)}
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
          />
          <Pressable style={btn} onPress={handleSubmit}>
            <Text>Зареєструватися</Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#F6F6F6",
    // border: "1px solid #E8E8E8",
    borderRadius: 8,
    marginBottom: 16,
  },

  input_lastChild: {
    marginBottom: 43,
  },

  btn: {
    display: "flex",
    alignItems: "center",
    paddingHorizontal: 32,
    paddingVertical: 16,
    marginBottom: 16,
    width: "100%",
    height: 51,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    color: "#FFFFFF",
  },
});
