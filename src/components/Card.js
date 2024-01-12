import React from "react"

const Card = ({ hand }) => {
  // Component logic using 'hand'
  return (
    <div className="handStyles">
      {hand.map((card, index) => {
        return (
          <div className="cardStyles" key={index}>
            {card}
          </div>
        )
      })}
    </div>
  )
}
// added export default Card to fix error
export default Card