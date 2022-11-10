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
export const addEvent=(event)=>async dispatch=>{
  try {
    const res=await axios.post("/events",event)
    
  } catch (error) {
    console.log(error)
  }
}
export const deleteEvent=(id)=>async dispatch=>{
  try {
    const res=await axios.delete(`/events/${id}`)
    dispatch({
      type:"DELETE",
      payload:id
    })
  } catch (error) {
    console.log(error)
  }
}