import React,{useState} from "react";
import { useDispatch } from "react-redux";
import {addEvent} from "../redux/action"
export default function AddEvent() {
  const dispatch=useDispatch()
  const [event,setEvent]=useState({name:"",desc:"",date:""})
  const onChange=(e)=>{
    setEvent({...event,[e.target.name]:e.target.value})
  }
  const onsubmit=()=>{
    dispatch(addEvent(event))
  }
  return (
    <div className="addEvent container">
      <h4>Add Event</h4>
      <form onSubmit={onsubmit}>
         <input type="text" name="name" placeholder="Event Name" onChange={onChange} value={event.name} required/>
         <input type="text" name="desc" placeholder="Event Desc" onChange={onChange} value={event.desc} required/>
         <input type="date" onChange={onChange} id="date" name="date" value={event.date} required/>
         <input type="submit" />
      </form>
    </div>
  );
}
