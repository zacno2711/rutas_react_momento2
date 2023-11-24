import {initializeApp} from 'firebase/app'
import {collection, doc, query, where, getDoc, getFirestore, setDoc, getDocs, addDoc, deleteDoc, updateDoc} from 'firebase/firestore'
import colors from '../src/utils/colors';
import { Alert } from 'react-native';

const firebaseConfig = {
  apiKey: "AIzaSyA_SQykOb5251q508_IO_HvXmT4pNrawUY",
  authDomain: "rutas-react-84049.firebaseapp.com",
  projectId: "rutas-react-84049",
  storageBucket: "rutas-react-84049.appspot.com",
  messagingSenderId: "248598811354",
  appId: "1:248598811354:web:42970302a8ebbfa969cbe3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export async function getUsersByName(email) {
  const q = query(collection(db, 'users'), where('email', '==', email));
  const querySnapshot = await getDocs(q);

  let users = [];

  if (querySnapshot.size === 1) {
    const doc = querySnapshot.docs[0];
    return {
      id: doc.id,
      ...doc.data(),
    };
  } else {
    return null; // Si no se encuentra ningún usuario o hay más de uno con el mismo email
  }
}

export async function createUser(state){
  if (state.name === '' || state.email === '' || state.phone === ''){
    alert('llenar todos los datos')
  }else{
    const existingUser = await getUsersByName(state.email);
    if(existingUser){
      alert('Usuario con email ya existe, intente con otro')
    }else{
      const docRef = await addDoc(collection(db,'users'),{
        ... state
      });
      alert('Usuario guardado')
    }
  }
  
}

export async function getUsers(){
  const querySnapshot = await getDocs(collection(db,'users'));
  let users = []
  querySnapshot.forEach((doc)=>{
    users.push({
      id : doc.id,
      ...doc.data()
    })
  })
  return users
  }

  export async function getUserById(id){
    const docRef = doc(db,'users',id)
    const docSnap = await getDoc(docRef)
    
    if (docSnap.exists()){
      console.log(docSnap.data())
      return docSnap.data(),docSnap.id
    }
    else return 'no document'
  }

 export async function deleteUser(id){
  const docRef = doc(db,'users',id)
  await deleteDoc(docRef)
 }

 export async function updateUser(id, user){
  const docRef = doc(db,'users', id)
  await updateDoc(docRef,{
    ...user
  })
 }

