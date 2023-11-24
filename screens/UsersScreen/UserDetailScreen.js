import React, {useEffect,useState} from 'react'
import { getUserById } from '../../db/firebaseConfig';
import { View , StyleSheet,TextInput,Button} from 'react-native'

export const UserDetailScreen = (props) => {

  const [user, setUser] = useState({
    id:'',
    name:'',
    email:'',
    phone:''
  })

  // nuser,nid = getUserById(props.route.params.userId)


  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const { nuser, nid } = await getUserById(props.route.params.userId);
  //       setUser({
  //         id: nid,
  //         name: nuser.name,
  //         email: nuser.email,
  //         phone: nuser.phone,
  //       });
  //     } catch (error) {
  //       console.error('Error fetching user:', error);
  //     }
  //   };

  //   fetchUser();
  // }, [props.route.params.userId]);

  const handleChangeText = (name, value) => {
    setUser({ ...user, [name]: value });
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nombre de usuario"
        value={user.name}
        onChangeText={(value) => handleChangeText('name', value)}
        
      />
      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        value={user.email}
        onChangeText={(value) => handleChangeText('email', value)}
        
      />
      <TextInput
        style={styles.input}
        placeholder="Teléfono"
        value={user.phone}
        onChangeText={(value) => handleChangeText('phone', value)}
        
      />
      <View>
        <Button 
  
          title="Actualizar Usuario" onPress={() => alert("hola mundo")} />
      </View>
      <View>
        <Button
          color="#E37"
          title="Eliminar Usuario" onPress={() => alert("hola mundo")} />
      </View>
    </View>
  )
}

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

export default UserDetailScreen
