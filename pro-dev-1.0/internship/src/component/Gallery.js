import React from 'react'

export function Gallery(props) {
  return (
    <div>
        <img src = {props.url} width={250} />
    </div>
  );
}



