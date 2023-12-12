 import axios from "axios";
 //need to add getter method endpoint to retrieve the data
 const USER_REST_API = 'http://localhost:9091/user/alluser'

 class UserApi{
    getUserDetails(){
        return axios.get(USER_REST_API);
    }
 }
 
 export default new UserApi();