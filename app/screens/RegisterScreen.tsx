import { KeyboardAvoidingView, ScrollView, StyleSheet } from "react-native";
import React, { useContext } from "react";
import AppScreen from "../components/AppScreen";
import AppTextInput from "../components/AppTextInput";
import TwitterIcon from "../components/TwitterIcon";
import AppButton from "../components/AppButton";
import { Formik } from "formik";
import { registerSchema } from "../schema/schemas";
import { AuthContext } from "../context/AuthContext";
import FormInput from "../components/forms/FormInput";

export default function RegisterScreen() {
  const { createUser } = useContext(AuthContext);
  return (
    <AppScreen style={styles.container}>
      <TwitterIcon style={styles.icon} />
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={registerSchema}
        onSubmit={(val) => createUser(val)}
      >
        {({ handleSubmit }) => (
          <>
            <FormInput name="name" placeholder="Name" type="default" />
            <FormInput name="email" placeholder="Email" type="email-address" />
            <FormInput name="password" placeholder="Password" type="password" />
            <AppButton title="Login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    alignItems: "center",
    flex: 1,
  },
  icon: {
    marginTop: 120,
    marginBottom: 50,
  },
});
