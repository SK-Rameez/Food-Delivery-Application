import axios from "axios";

const GET_FOODITEMS=`http://localhost:8081/food-api/all`;

const GET_FOODITEM=`http://localhost:8081/food-api/find`;

export const fetchFoodList= async()=>{
         try
         {
            const response= await axios.get(GET_FOODITEMS);
            return response.data;
         }
         catch(error)
         {
            console.log("Error getting the food list",error);
            throw error;
         }
} 

export const fetchFoodDetails= async (id)=>{
        try
        {
         const response= await axios.get(GET_FOODITEM+`/${id}`);
         return response.data;
        }
        catch(error)
        {
           console.error('Error geting the food item details:',error);
           throw error;
        }
   }
