import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';
import firebase from '../../db/firebaseConfig';

export const CreateUserScreen = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChangeText = (name, value) => {
    setUser({ ...user, [name]: value });
  };

  const saveNewUser = async () => {
    if (user.name === '') {
      alert('Por favor, proporciona un nombre');
    } else {
      try {
        await firebase.db.collection('users').add({
          name: user.name,
          email: user.email,
          phone: user.phone,
        });
        alert('Usuario guardado con éxito');
        // Limpia los campos del formulario
        setUser({
          name: '',
          email: '',
          phone: '',
        });
      } catch (error) {
        console.error('Error al guardar el usuario: ', error);
        alert('Hubo un error al guardar el usuario');
      }
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nombre de usuario"
        onChangeText={(value) => handleChangeText('name', value)}
        value={user.name}
      />
      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        onChangeText={(value) => handleChangeText('email', value)}
        value={user.email}
      />
      <TextInput
        style={styles.input}
        placeholder="Teléfono"
        onChangeText={(value) => handleChangeText('phone', value)}
        value={user.phone}
      />
      <Button title="Guardar Usuario" onPress={() => saveNewUser()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default CreateUserScreen;
