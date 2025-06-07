import axios from "axios";

const ADD_FOODITEM=`http://localhost:8081/food-api/add`;

const GET_FOODITEMS=`http://localhost:8081/food-api/all`;

const UPDATE_FOODITEM=`http://localhost:8081/food-api/update/`;

const DELETE_FOODITEM=`http://localhost:8081/food-api/delete/`;

export const addFoodItem= async (data,image)=>{

    const formData=new FormData();
    formData.append("food",JSON.stringify(data));
    formData.append("image",image);

    try
    {
      const response= await axios.post(ADD_FOODITEM,formData,
        {headers:{'Content-Type':'multipart/form-data'}});
      return response;
    }
    catch(error)
    {
        console.log("Error:"+error);
        throw error;
    }
}

export const getAllFoodItems= async ()=>{
    try
    {
         const response=await axios.get(GET_FOODITEMS);
         return response;
    }
    catch(error)
    {
        console.log("Error:"+error);
        throw error;
    }
}

export const updateFoodItem= async (foodId,data,file)=>{

    const formData=new FormData();
    formData.append("food",JSON.stringify(data));
    if(file)
    {
       formData.append("image",file);
    }

    try
    {
         const response= await axios.put(UPDATE_FOODITEM+foodId,formData,
            {headers:{'Content-Type':'multipart/form-data'}});
         return response;
    }
    catch(error)
    {
        console.log("Error:"+error);
        throw error;
    }
}

export const deleteFoodItem= async (foodId)=>{
      try
      {
           const response= await axios.delete(DELETE_FOODITEM+foodId);
           return response;
      }
      catch(error)
      {
         console.log("Error:"+error);
         throw error;
      }
}