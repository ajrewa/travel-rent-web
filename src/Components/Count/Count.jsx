import React from 'react'
import "./Count.css"

const Count = () => {
  return (
    <div className="count">
      <div className="count-blocks">
        <div className="blocks">
        <div className="blocktext">
        <h3>100+</h3>
        <p>Bikes rents / D</p>
        </div>
        </div>
        <div className="blocks">
        <div className="blocktext">
        <h3>50+</h3>
        <p>Cars Rents/ D</p>
        </div>
        </div>
        <div className="blocks">
        <div className="blocktext">
        <h3>50+</h3>
        <p>Kids Bikes Sold / D</p>
        </div>
        </div>
        <div className="blocks">
        <div className="blocktext">
        <h3>10</h3>
        <p>Stations</p>
        </div>
        </div>
      </div>
    </div>
  )
}
export default Count