import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-course-burger-bf798.firebaseio.com/'
});

export default instance;