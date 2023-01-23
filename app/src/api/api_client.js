import axios from 'axios'
class Api{
    constructor(){
        this.api = axios.create({
            baseURL: process.env.REACT_APP_BASE_URL,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
    }

    get(path){
        return this.api.get(path)
    }

    post(path, params){
        return this.api.post(path, params)
    }

    put(path, params){
        return this.api.put(path, params)
    }

    patch(path, params){
        return this.api.patch(path, params)
    }

    delete(path){
        return this.api.delete(path)
    }
}


export default Api
