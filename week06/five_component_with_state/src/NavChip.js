import React from 'react'

function NavChip(props) {
  return (
        <li>
          <a href={props.url}>
            <img src={props.imgUrl} alt={props.alt} ></img>
            {props.title}
          </a>
        </li>
  )
}

export default NavChip
