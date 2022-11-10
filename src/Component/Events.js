import React from 'react'

export default function Events({d}) {
  return (
    <div className="col s12 m7">
   
    <div className="card horizontal">
      
      <div className="card-stacked">
        <div className="card-content">
          <p>{d.Ename}</p>
        </div>
        <div className="card-action">
          <p>Event data:{d.date}</p>
        </div>
      </div>
    </div>
  </div>
  )
}
