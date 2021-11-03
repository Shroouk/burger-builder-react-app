import axios from 'axios';

const instance = axios.create({
    baseURL:'https://react-my-burger-shrouk-default-rtdb.firebaseio.com'
})

export default instance;