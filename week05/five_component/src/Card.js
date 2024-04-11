import React from 'react'

function Card(props) {
  return (
    <a href={props.url}>
        <div class="card">
            <img src={props.img} alt={props.alt}></img>
            <h3>
                {props.title}
            </h3>
            <p>
                {props.description}
            </p>
        </div>
    </a>
  )
}

export default Card
