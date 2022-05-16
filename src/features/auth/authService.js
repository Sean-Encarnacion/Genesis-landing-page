import axios from 'axios'

const API_URL = 'http://localhost:5000/api/users/'

//ping
const pingServer =  async () => {
  const response = await axios.get('http://localhost:5000/ping')

  if (response.data) {
    console.log(response.data)
  }

  return response.data
}

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData)

  if(!!response.data.token) {
    const queryString = Object.keys(response.data).map(key => key + '=' + response.data[key]).join('&');
    console.log(queryString)
    window.location = "http://localhost:4000" + "?" + queryString;
  }

  return response.data
}

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + 'login', userData)

  if(!!response.data.token) {
    const queryString = Object.keys(response.data).map(key => key + '=' + response.data[key]).join('&');
    console.log(queryString)
    window.location = "http://localhost:4000" + "?" + queryString;
  }
}

// Logout user
const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  logout,
  login,
  pingServer
}

export default authService