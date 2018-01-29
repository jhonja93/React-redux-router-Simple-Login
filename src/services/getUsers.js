import axios from 'axios'

const getUsers = () => {
    var data = {};

    axios.get('http://jsonplaceholder.typicode.com/users')
        .then((response) => {
            data = response.data
        });

    return data;
}

export default getUsers;