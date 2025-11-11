import axios from 'axios'

const $host = axios.create({                      // instance - запущенная копия серверное программы
  baseURL: process.env.REACT_APP_API_URL
})

const $authHost = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

const authInterceptor = config => {                            // interceptor - функция которая параметром принимает config
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
  return config
}

$authHost.interceptors.request.use(authInterceptor)           // Интерцептор для запроса, отрабатывает при каждом запросе и подставляет header.authorization

export {
  $host,
  $authHost,
}