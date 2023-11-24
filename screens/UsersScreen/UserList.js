import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
import { getUsers } from '../../db/firebaseConfig';
import { Avatar, ListItem } from 'react-native-elements';

const UserList = (props) => {
  const [users, setUsers] = useState([]);
  const [refreshIndicator, setRefreshIndicator] = useState(false);

  const fetchData = async () => {
    try {
      const xusers = await getUsers();
      setUsers([...xusers]);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      // Después de obtener los usuarios, establece el indicador de actualización en falso
      setRefreshIndicator(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [refreshIndicator]);

  const handleRefresh = () => {
    // Cuando se presiona el botón de actualización, establece el indicador en true
    setRefreshIndicator(true);
  };

  return (
    <ScrollView>
      <Button title="Crear Usuario" onPress={() => props.navigation.navigate("CreateUserScreen", {
    onUpdateUserList: fetchData})} />
      {
        users.map(user => (
          <ListItem
            key={user.id} bottomDivider onPress={()=>{
              props.navigation.navigate('UserDetailScreen',{
                userId: user.id
              })
            }}>
            <ListItem.Chevron />
            <Avatar source={{uri:"https://randomuser.me/api/portraits/men/36.jpg"}} rounded/>
            <ListItem.Content>
              <ListItem.Title>{user.name}</ListItem.Title>
              <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))
      }
    </ScrollView>
  );
};

export default UserList;
