import React, { useState } from "react"
import Card from "./components/Card"
import "./App.css"

const App = () => {
  const suit = ["❤️", "♦️", "♠️", "♣️"]
  const rank = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ]
  const [hand, setHand] = useState([])

  const drawCard = () => {
    // 1) Generates random rank to assigned card
    const draw = `${rank[Math.floor(Math.random() * rank.length)]} ${
      suit[Math.floor(Math.random() * suit.length)]
    }`
    // 2) Checks to see if generated card is in hand or not
    if (hand.indexOf(draw) === -1) {
      // 3) If card isn't in hand, add it to hand
      setHand([...hand, draw])
      // 4) Updates state with a new hand, including the drawn hand
    } else if (hand.length !== 52) {
      // 5) If the card is already in the hand, and it is not full (less than 52)
      drawCard()
      // 6) Draw another card continuitly until you get a unique card or deck is full
    } else {
      // 7) if all cards are drawn, display alert below
      alert("All cards have been dealt.")
    }
  }
  // No need to change anything ABOVE this line ^

  const shuffle = () => {
    setHand([])
  }

  return (
    <div>
    <h1>Draw a Card</h1>
    <button onClick={drawCard}>Click to Draw a Card</button>
    <button onClick={shuffle}>Return Cards and Shuffle Deck</button>
    <Card hand={hand} />
    </div>
  )
}

export default App
