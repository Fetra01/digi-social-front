const api = process.env.REACT_APP_API_URL;


export function fetchAll() {
    return fetch(`${api}/`)
        .then((res) => res.json())
}