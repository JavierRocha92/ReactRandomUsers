export const getUsers = (numberusers = false) => {
    let number = (numberusers) ? numberusers : 10
    const url = `https://randomuser.me/api/?results=${number}`
    return fetch(url).then(reponse => reponse.json()).then(json => json.results)
}