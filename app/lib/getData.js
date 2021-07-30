export const getData = () => {
    return fetch("https://5dc588200bbd050014fb8ae1.mockapi.io/assessment")
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                return Promise.reject(response);
            }
        })
        .then( (data) => {return data})
        .catch((err) => console.log(console.warn(err)))
}