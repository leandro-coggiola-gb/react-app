export function getUsers(usersAmount) {
    return fetch(`https://randomusdser.me/api/?results=${usersAmount}`)
        .then((response) => {return response.json(); })
        .then((data) => {
            return data;
        }).catch((error) => {
            return error;
        });
}