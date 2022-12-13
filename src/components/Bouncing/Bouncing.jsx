import React from 'react'
import "./Bouncing.css"

const Bouncing = () => {
  return (
    <>
     <div className="ball">
        <bouncing>
          <ul class="bouncing-ul">
            <li class="bouncing-li"></li>
            <li class="bouncing-li"></li>
            <li class="bouncing-li"></li>
            <li class="bouncing-li"></li>
            <li class="bouncing-li"></li>
          </ul>
        </bouncing>
      </div>
    </>
  )
}

export default Bouncing