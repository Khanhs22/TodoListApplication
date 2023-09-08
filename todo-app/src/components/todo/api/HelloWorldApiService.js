import { apiClient } from "./ApiClient";


// export function retrieveHelloWorldBean() {
//     return axios.get('http://localhost:8080/hello-world-bean')
// }

export const retrieveHelloWorldBean = 
            () => apiClient.get('/hello-world-bean')

//Response to preflight request doesn't pass access control check
export const retrieveHelloWorldPathVariable = 
            (username, token) => apiClient.get(`/hello-world/path-variable/${username}`, {
                headers: {
                    Authorization: 'Basic a2hhbmg6MTIz',
                }
            })

export const executeBasicAuthenticationService 
= (token) => apiClient.get(`/basicauth`, {
                headers: {
                    Authorization: token,
                }
            })