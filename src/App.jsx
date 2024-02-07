import './App.css'
import {useUsers} from './hooks/useUsers.js'

function App() {

  const [fetchUsers, users] = useUsers()

  return (
    <>
      {/* {users.map((user) => user)} */}
    </>
  )
}

export default App
