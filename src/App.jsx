import './App.css'
import {useUsers} from './hooks/useUsers.js'
import { Card } from './components/Card.jsx'

function App() {

  const [fetchUsers, users] = useUsers()
  console.log(users)

  return (
    <div className='d-flex flex-wrap p-5 justify-content-center'>
      {users && users.map((user) => 
      <Card key = {user.login.uuid} 
      name = {user.name.first} 
      user = {user.login.username} 
      image = {user.picture.large}
      age = {user.dob.age}/>)}
    </div>
  )
}

export default App
