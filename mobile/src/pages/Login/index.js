import React from 'react';
import {
  TextInput,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

import logo from '../../assets/logo.png';

export default function Login() {
  return (
    <View styles={styles.container}>
      <Image source={logo} />
      <TextInput
        placeholder="Digite seu usuário no github"
        placeholderTextColor="#999"
        styles={styles.input}
      />

      <TouchableOpacity styles={styles.button}>
        <Text style={styles.buttonText}> Enviar </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  input: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    marginTop: 20,
    paddingHorizontal: 15,
  },
  button: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#df4723',
    borderRadius: 4,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
