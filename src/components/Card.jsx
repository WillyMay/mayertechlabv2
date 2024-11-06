import React from 'react'
import Modal from './Modal'

function Card(props) {

    console.log(props);

  return (
    <li key={props.id}>
    <div
      className="card bg-base-100 w-60 shadow-xl my-10"
      key={props.id}
    >
      <figure>
        <img src={props.imgUrl} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.name}</h2>
        <p>{props.summary}</p>
        <div className="card-actions justify-center">
           <Modal item={props} />
        </div>
      </div>
    </div>
  </li>
  )
}

export default Card