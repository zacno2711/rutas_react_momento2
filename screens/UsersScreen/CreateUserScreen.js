import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';
import { createUser } from '../../db/firebaseConfig';

export const CreateUserScreen = (props) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
  });
  saveNewUser = async () => {
    await createUser(user);
    // Llamamos a la función de actualización pasada como parámetro
    if (props.route.params && props.route.params.onUpdateUserList) {
      props.route.params.onUpdateUserList();
    }
    props.navigation.navigate('UserList');
  }

  const handleChangeText = (name, value) => {
    setUser({ ...user, [name]: value });

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
