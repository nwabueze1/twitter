import { StyleSheet } from "react-native";
import React from "react";
import { useFormikContext } from "formik";
import AppTextInput, { IInputProps } from "../AppTextInput";
import AppText from "../AppText";

export default function FormInput({ name, placeholder, type }: IInputProps) {
  const { errors, touched, values, setFieldValue } = useFormikContext();
  return (
    <>
      <AppTextInput
        name={name}
        placeholder={placeholder}
        value={values[name]}
        type={type}
        onChange={(e) => setFieldValue(name, e)}
      />
      {touched[name] && errors[name] && <AppText style={styles.errorText}>{errors[name]}</AppText>}
    </>
  );
}

const styles = StyleSheet.create({
  errorText: {
    color: "red",
    fontSize: 14,
  },
});
