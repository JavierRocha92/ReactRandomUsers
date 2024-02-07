import { useEffect, useState } from "react"
import { getUsers } from "../logic/getUsers"

export const useUsers = () => {

    const [users, setUsers] = useState(null)

    const fecthUsers = async () => {
        const users = await getUsers()
        console.log(users)
        // setUsers(await getUsers())
        console.log(users)
    }

    useEffect(() => fecthUsers(), [])

    return [fecthUsers, users]
}