export const getUsers = () => {
    const url = `https://randomuser.me/api/?results=10`
    return fetch(url).then(reponse => reponse.json()).then(json => json.results)
}