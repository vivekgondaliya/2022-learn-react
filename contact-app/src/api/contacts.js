import axios from 'axios';

//UPDATE YOUR API URL below instead of below JSON Server URL
export default axios.create({
    baseURL: "http://localhost:3006/"
});