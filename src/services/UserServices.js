import axios from "./Customize-axios"

const fetchAllUser = (page) => {
    return axios.get(`/api/users?page=${page}`)

}
const postCreateUser = (name, job) =>{
    return axios.post("/api/users", {name, job})    //viết tắt cho name:name, job:job
}
export {fetchAllUser ,postCreateUser};