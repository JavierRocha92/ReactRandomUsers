import { useEffect, useState } from "react"
import { getUsers } from "../logic/getUsers"

export const useUsers = () => {

    const [users, setUsers] = useState(null)

    const fecthUsers = () => {
       getUsers().then(newusers => setUsers(newusers))
    }

    useEffect(() => fecthUsers(), [])

    return [fecthUsers, users]
}