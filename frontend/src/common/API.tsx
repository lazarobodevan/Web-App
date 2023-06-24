export const API_BASE_URL = 'http://localhost:3333';

export const getOptions = (method:string, body: object) =>{
    return {
        method,
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
    }
}