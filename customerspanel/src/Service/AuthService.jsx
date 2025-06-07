import axios from "axios";

const USER_REGISTER_API=`http://localhost:8081/user-api/register`;

const USER_LOGIN_API=`http://localhost:8081/user-api/login`;


export const RegisterUser= async (details)=>{
      try
      {
          const response= await axios.post(USER_REGISTER_API,details);
          return response;
      }
      catch(error)
      {
         throw error;
      }
}

export const LoginUser= async (details)=>{
     try
     {
         const response= await axios.post(USER_LOGIN_API,details);
         return response;
     }
     catch(error)
     {
          throw error;
     }
}
