import axios from 'axios'

const apiClient = axios.create({
    baseURL: `http://127.0.0.1:3000/api`,
    withCredentials: true,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    timeout: 10000
})

export default {
    registerUser(userData) {
        return apiClient.post('/register', userData)
    }
}
