import React from 'react'
import "./Hero.css"
import videofile from "../Assets/video2.mp4"

const Hero = () => {
  return (
    <div className='hero'>
        <video src={videofile} autoPlay loop muted>
        </video>
        <div className="content">
        <p>Best Quality Vehicles</p>
<h1>Your ride, your way.
</h1>
<h1>Unlock the freedom to <span className='green'>explore.</span> 
</h1>
        </div>
    </div>
  )
}

export default Hero

{/*<div className="lefthero">
<div className="lefthero-hdng">
<p>Best Quality Vehicles</p>
<h1>Your ride, your way.
</h1>
<h1>Unlock the freedom to explore.
</h1>
<button class="btn btn-outline-success " type="button">Main button</button>
</div>


</div>
<div className="righthero"><img src={cyclelogo} /></div>*/}