import React from 'react'

export default function Evaluate() {
  let x = 20;
  let y = 30;  
  return (
    <div>
        <h1>Evaluate Expression</h1>
        <h3>{x} {">"} {y} {":"} {x>y ? "true" : "false"}</h3>
    </div>
  );
}
