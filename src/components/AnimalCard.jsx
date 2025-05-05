import React from 'react'
import AnimalCard from "../styles/AnimalCard.css"
import { Link } from 'react-router-dom'



const AnimalCard = () => {
  return (
    <div className='option-wrapper'>
    <div className='bacground-ellipse top-left'/>
    <div className='background-ellipse bottom-right'/>
        <h2>FÅGEL</h2>
        <div className="image-grid">
        {[bird, dog, cat].map((img, i) => (
          <div className="image-slot" key={i}>
            <img src={img} alt={`option-${i}`} />
          </div>
        ))}
      </div>
            <button className='next-button'> Nästa</button>

      

  

    </div>
  )
}

export default AnimalCard