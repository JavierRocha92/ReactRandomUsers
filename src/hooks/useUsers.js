import { useEffect, useState } from "react"
import { getUsers } from "../logic/getUsers"

export const useUsers = () => {

    const [users, setUsers] = useState(null)

    const fecthUsers = (number = false) => {
       getUsers(number).then(newusers => setUsers(newusers))
    }

    useEffect(() => fecthUsers(), [])

    return [fecthUsers, users]
}