// import React, { useState } from "react";
// import { signInWithEmailAndPassword } from "@firebase/auth";
// import { auth } from "../../config/firebase";
// import {
//   View,
//   TextInput,
//   Button,
//   StyleSheet,
//   Text,
//   Platform,
//   Alert,
// } from "react-native";

// export default function Login({navigation}) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");


//   const onHandleLogin = () => {
//     if (email !== "" && password !== "") {
//       signInWithEmailAndPassword(auth, email, password)
//         .then(() => {
//           console.log("User logged in")
//         })
//         .catch((err) => {
//           Alert.alert("Error", err.message);
//         });
//     }
//   }
//     return (
//       <View style={styles.container}>
        
//       </View>
//     );
//   };

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: "center",
//       paddingHorizontal: 20,
//       backgroundColor: "#fff",
//     }
//   })

