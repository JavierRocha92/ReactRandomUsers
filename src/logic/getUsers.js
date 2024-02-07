export const getUsers = async () => {
    const url = `https://randomuser.me/api/?results=50`
    const response = await fetch(url)
    const json = await response.json()
    return json.results
}