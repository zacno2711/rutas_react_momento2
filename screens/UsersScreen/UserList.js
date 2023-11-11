import React,{useEffect,useState} from 'react'
import { View , Text, ScrollView, Button} from 'react-native'
import { getUsers } from '../../db/firebaseConfig'
import {ListItem, Avatar} from 'react-native-elements'


const UserList = (props) => {

  const [users, setUsers] = useState([])

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const eusers = await getUsers();
        setUsers([...eusers]);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    eusers = fetchData();
  },[])

  console.log(users)
  return (
    <ScrollView>
      <Button title = "Crear Usuario" onPress = {()=> props.navigation.navigate("CreateUserScreen")}/>
      {
        users.map(user =>{
          return(
            <ListItem
              key={user.id}
            > 
              <ListItem.Chevron/>
              <ListItem.Content>
                <ListItem.Title>{user.name}</ListItem.Title>
              </ListItem.Content>

            </ListItem>
          )
        })
      }
    </ScrollView>
  )
}

export default UserList