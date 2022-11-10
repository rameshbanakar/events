import axios from "axios"
export const hello = () => async dispatch => {
    try{
        const res=await axios.get("/events")
        dispatch({
            type:"GET_DATA",
            payload:res.data
          })
    }catch(err){
          console.log(err)
    }
    
  }