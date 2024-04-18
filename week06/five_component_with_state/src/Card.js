import React, { useState } from "react";

function Card(props) {
  const [ like, setLike ] = useState('off');
  const toggleLike = () => {
    setLike(prevLike => prevLike === 'off' ? 'on' : 'off');
  }

  const likeOn = {
    // backgroundColor: 'pink'
    backgroundColor: 'rgba(255,19,115,0.3)'
  }
  const likeOff = {
    // backgroundColor: 'white'
    backgroundColor: 'rgba(255,255,255,0.3)'
  }



  return (
    <div className="card">
      <a href={props.url}>
        <img src={props.img} alt={props.alt}></img>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </a>
      <div className="card-bottom">
        <button onClick={toggleLike} style={like === 'off' ? likeOff : likeOn}>
        {like === 'off' ? '🤍' : '❤️'}
        </button>
      </div>
    </div>
  );
}

export default Card;
