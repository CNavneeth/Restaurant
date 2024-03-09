import React from 'react'
import { useEffect,useState } from 'react';
import Navbar from '../components/Navbar'
import '../Reservation.css';
function Cuisine() {
  const [data,setData] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:8081/api/menu')
    .then(res=>res.json())
    .then(data=> setData(data))
    .catch(err=>console.log(err));

  },[] )
  return (
    <div>
        <Navbar/>
        <div className='ccontainer'>
          <h1>MENU</h1>
          
          <table>
        
        <thead>
          <th>Food</th>
          <th>Cost</th>
          <th>Rating</th>
          <th>Chef</th>
        </thead>
        <tbody>
        {data.map((d,i)=>(
                <tr key={i}>
                  <td>{d.food_name}</td>
                  <td>{d.cost}</td>
                  <td>{d.rating}</td>
                  <td>{d.chef}</td>
                  
                </tr>
              )
        )}
          
        </tbody>
      </table>
      
        </div>
    </div>
  )
}

export default Cuisine