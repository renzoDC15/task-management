import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5173/api', // adjust if needed
    withCredentials: true,
})

export default api
