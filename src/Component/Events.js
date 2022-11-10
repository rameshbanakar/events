import React from 'react'
import {deleteEvent} from "../redux/action";
import { useDispatch } from 'react-redux';
export default function Events({d}) {
  const dispatch=useDispatch()
  return (
    <div className="col s12 m7">
   
    <div className="card horizontal">
      
      <div className="card-stacked">
        <div className="card-content">
          <h6><b>{d.name}</b></h6>
          <p>{d.desc}</p>
        </div>
        
        <div className="card-action">
          <p>Event data:-{d.date}</p>
        </div>
        <button type="button" onClick={()=>{dispatch(deleteEvent(d.id))}}>Delete</button>
      </div>
    </div>
  </div>
  )
}
