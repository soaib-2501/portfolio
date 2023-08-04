import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import { Gallery } from './component/Gallery';
// import Evaluate from './Evaluate';
// import Inlinecss from './component/Inlinecss';
import Product from './component/Product';




const root = ReactDOM.createRoot(document.getElementById('root'));
// let m = ["image/1.jpg","image/2.jpg"];

root.render(
  <React.StrictMode>
    {/* <Gallery url = {m[0]}
    />
    <Gallery url = {m[1]}/> */}
  {/* <Evaluate/>
  <Inlinecss/> */}
  <Product/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
