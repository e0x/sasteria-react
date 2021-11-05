import axios from 'axios'

const BASE_URL = 'https://localhost:44306/api/';

export const createAPIEndpoint = endpoint => {
    let url = BASE_URL + endpoint + '/';
    return {
        fechAll: () => axios.get(url),
        fetchById: id => axios.get(url + id),
        create: newRecord => axios.post(url, newRecord),
        update: (id, updateRecord) => axios.put(url + id, updateRecord),
        delete: (id) => axios.delete(url + id).then(res => console.log(res)).catch(error => console.log(error))
    }
}

