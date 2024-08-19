import { InitialState } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function Login() {
  const initialState = {
    name: "",
    age: "",
    address: "",
    phoneNumber: "",
  };

  const [inputs, setInputs] = useState(initialState);

  const handleChangeValueInput = (i: any, e: any) => {
    setInputs({ ...inputs, [e]: i });
  };

  console.log(inputs)

  return (
    <View style={{ flex: 1, backgroundColor: "#FFF", padding: 20 }}>
      <TextInput
        placeholder="Name"
        style={styles.inputContainer}
        value={inputs?.name}
        onChangeText={(e) => handleChangeValueInput(e, "name")}
      />
      <TextInput
        placeholder="Age"
        style={styles.inputContainer}
        value={inputs?.age}
        onChangeText={(e) => handleChangeValueInput(e, "age")}
      />
      <TextInput
        placeholder="Address"
        style={styles.inputContainer}
        value={inputs?.address}
        onChangeText={(e) => handleChangeValueInput(e, "address")}
      />
      <TextInput
        placeholder="phoneNumber"
        style={styles.inputContainer}
        value={inputs?.phoneNumber}
        onChangeText={(e) => handleChangeValueInput(e, "phoneNumber")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    height: 45,
    width: "100%",
    borderWidth: 1,
    borderColor: "#000",
    paddingLeft: 10,
    marginBottom: 20,
  },
});
