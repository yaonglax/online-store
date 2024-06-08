import axios from 'axios'

const $host =axios.create( //запросы без авторизации
    {
        baseURL: 'http://localhost:5000/'
    }
)
const $authHost =axios.create( //запросы с авторизацией
    {
        baseURL: 'http://localhost:5000/'
    }
)
const authToken = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}` 
    return config;
}

$authHost.interceptors.request.use(authToken)

export {
    $host,
    $authHost
}




