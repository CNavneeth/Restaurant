import React from 'react'
import { useState,useEffect } from 'react';
import '../Reservation.css';
import axios from 'axios';
import img1 from '../assets/bg.jpg'
import Navbar from '../components/Navbar';
function Reservation() {
  const [name,setName]=useState('');
  const [id,setId]=useState('');
  const [email,setEmail]=useState('');
  const [phno,setPhno]=useState('');
  const [seat,setSeat]=useState('');
  const [time,setTime]=useState('');
  const [data,setData] = useState([]);
  const [data2,setData2]=useState([]);
  const[edit,setEdit]=useState('');
  useEffect(()=>{
    fetch('http://localhost:8081/api/seat')
    .then(res=>res.json())
    .then(data=> setData(data))
    .catch(err=>console.log(err));

  },[] )
  useEffect(()=>{
    fetch('http://localhost:8081/api/reserve')
    .then(res=>res.json())
    .then(data=> setData2(data))
    .catch(err=>console.log(err));

  },[] )
  console.log(data2);
function editin(){
    axios.post('http://localhost:8081/api/status',{edit})
    .then(res=>console.log(res))
    .catch(err=>console.log(err));
    window.location.reload();
}

  function reserve(){
    axios.post('http://localhost:8081/api/reserve',{name,email,phno,seat,time})
    .then(res=>console.log(res))
    .catch(err=>console.log(err));
    window.location.reload();
  }
  return (
    <div>
      <Navbar/>
      <div className='tableholder'>
      <h1>RESERVATION</h1>
      <table>
        
        <thead>
          <th>Seat Number</th>
          <th>Booked</th>
        </thead>
        <tbody>
        {data.map((d,i)=>(
                <tr key={i}>
                  <td>{d.seat_no}</td>
                  <td>{d.booked}</td>
                  
                </tr>
              )
        )}
          
        </tbody>
      </table>
      </div>
      <div className='reservation'>
        <h2>CHECK THE SEAT NUMBERS FROM ABOVE AND SELECT THE SEATS ACCORDINGLY</h2>
        <h1>Enter the Customer details</h1>
          <form onSubmit={reserve}>
            <input placeholder='Enter Name' type='text' value={name} onChange={e=> setName(e.target.value)}/>
            <input placeholder='Enter Email' type='text' value={email} onChange={e=> setEmail(e.target.value)}/>
            <input placeholder='Enter Phno' type='text' value={phno} onChange={e=> setPhno(e.target.value)}/>
            <input placeholder='Enter Seat' type='text' value={seat} onChange={e=> setSeat(e.target.value)}/>
            <input placeholder='Enter Time' type='text' value={time} onChange={e=> setTime(e.target.value)}/>
          </form>
          <button onClick={reserve} type='submit' className='button-57' style={{marginLeft:'46%',borderRadius:'20px',marginTop:'1%'}}><span class="text" style={{fontSize:'20px',color:'rgb(148, 50, 239)'}}>Reserve</span><span style={{color:'white',fontSize:'20px'}}>CONFIRM</span></button>
          <div className='edit'>
          <input placeholder='Enter Id to Change Status' type='text' value={edit} onChange={e=> setEdit(e.target.value)}/>
          <button type='submit' className='button-57' onClick={editin} style={{borderRadius:'20px',marginTop:'1%'}}><span class="text" style={{fontSize:'20px',color:'rgb(148, 50, 239)'}}>Edit</span><span style={{color:'white',fontSize:'20px'}}>CONFIRM</span></button>
          </div>
      </div>
      <div className='tableholder'>
      <h1>Customer Details</h1>
      <table>
        
        <thead>
          <th>Name</th>
          <th>Email</th>
          <th>Phno</th>
          <th>Seat_no</th>
          <th>Time</th>
        </thead>
        <tbody>
        {data2.map((d,i)=>(
                <tr key={i}>
                  <td>{d.name}</td>
                  <td>{d.email}</td>
                  <td>{d.ph_no}</td>
                  <td>{d.seat_no}</td>
                  <td>{d.time}</td>
                  
                </tr>
              )
        )}
          
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default Reservation