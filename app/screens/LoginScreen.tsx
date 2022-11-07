import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import AppScreen from "../components/AppScreen";
import AppTextInput from "../components/AppTextInput";
import TwitterIcon from "../components/TwitterIcon";
import AppButton from "../components/AppButton";
import { Formik } from "formik";
import { loginSchema } from "../schema/schemas";
import { AuthContext, IUser } from "../context/AuthContext";
import FormInput from "../components/forms/FormInput";

export default function LoginScreen() {
  const { createUser } = useContext(AuthContext);
  return (
    <AppScreen style={styles.container}>
      <TwitterIcon style={styles.icon} />
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={(val) => createUser(val as IUser)}
      >
        {({ handleSubmit }) => (
          <>
            <FormInput name="email" placeholder="Emails" type="email-address" />
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
    paddingTop: 0,
    flex: 1,
    alignItems: "center",
  },
  icon: {
    marginTop: 150,
    marginBottom: 50,
  },
});
